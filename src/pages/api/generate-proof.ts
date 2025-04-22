import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId } = req.body;

    // This is where we would integrate with Replit's AI agent
    // For now, we'll simulate the process
    const { stdout, stderr } = await execAsync('python3 src/scripts/generate_proof.py', {
      env: {
        ...process.env,
        USER_ID: userId,
      },
    });

    if (stderr) {
      console.error('Proof generation error:', stderr);
      throw new Error('Failed to generate proof');
    }

    // Parse the output from the Python script
    const proof = JSON.parse(stdout);

    return res.status(200).json({
      success: true,
      proof,
    });
  } catch (error) {
    console.error('Proof generation error:', error);
    return res.status(500).json({
      error: 'Failed to generate proof',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
} 