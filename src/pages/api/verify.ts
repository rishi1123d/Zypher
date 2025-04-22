import { NextApiRequest, NextApiResponse } from 'next';
import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider, Wallet } from '@project-serum/anchor';
import { IDL } from '../../contracts/program/idl';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { proofHash, minimumAge } = req.body;

    // Initialize Solana connection
    const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);
    const provider = new AnchorProvider(
      connection,
      new Wallet(new Uint8Array(0)), // Dummy wallet for now
      { commitment: 'confirmed' }
    );

    // Load program
    const program = new Program(
      IDL,
      new PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID!),
      provider
    );

    // Verify identity
    const [identityPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from('identity')],
      program.programId
    );

    const tx = await program.methods
      .verifyIdentity(proofHash, minimumAge)
      .accounts({
        identity: identityPDA,
        authority: provider.wallet.publicKey,
      })
      .rpc();

    return res.status(200).json({ success: true, tx });
  } catch (error) {
    console.error('Verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 