use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod zypher {
    use super::*;

    pub fn verify_identity(
        ctx: Context<VerifyIdentity>,
        proof_hash: [u8; 32],
        minimum_age: u8,
    ) -> Result<()> {
        let identity = &mut ctx.accounts.identity;
        identity.proof_hash = proof_hash;
        identity.minimum_age = minimum_age;
        identity.verified = true;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct VerifyIdentity<'info> {
    #[account(mut)]
    pub identity: Account<'info, Identity>,
    pub authority: Signer<'info>,
}

#[account]
pub struct Identity {
    pub proof_hash: [u8; 32],
    pub minimum_age: u8,
    pub verified: bool,
} 