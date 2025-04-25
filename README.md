# Zypher - Zero-Knowledge Identity Verification Protocol

Zypher is a next-generation identity verification protocol that leverages zero-knowledge proofs to combat AI-generated synthetic fraud. Our solution provides a privacy-preserving, mathematically verifiable way to authenticate identity claims without exposing sensitive personal data.

## Features

- **Privacy-First**: Verify claims without exposing sensitive personal data
- **AI-Resistant**: Protect against synthetic identity fraud
- **Decentralized**: Built on Solana with zero-knowledge proofs
- **User-Friendly**: Modern, intuitive interface with AI assistance
- **Multi-Chain**: Support for multiple blockchain networks

## Problem Statement

With the rise of AI-generated synthetic fraud:
- 80% of financial institutions still rely on document-based verification
- Synthetic identity fraud causes $20B-$40B in annual losses
- Current systems can't reliably detect AI-generated documents
- Traditional KYC exposes sensitive user data to breaches

## Solution

Zypher provides:
- Zero-knowledge proof-based verification
- Privacy-preserving identity claims
- Tamper-proof verification trails
- Decentralized attestation system
- Protection against AI-generated synthetic fraud

## Tech Stack

### Frontend
- Next.js 14 (React)
- TypeScript
- Tailwind CSS
- Privy (Authentication)
- Solana Wallet Adapter

### Zero-Knowledge Stack
- Circom + snarkjs
- Groth16 proving system
- zk-kit (Sismo)

### Backend
- Node.js + Express
- PostgreSQL
- Walrus (Move-based storage)
- Render Network (DePIN)

### Solana Integration
- Anchor Framework
- Solana Blinks
- Wormhole SDK (Cross-chain)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Solana CLI tools
- Privy account and app ID

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zypher.git
   cd zypher
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
   NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
   NEXT_PUBLIC_PROGRAM_ID=your_program_id
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Project Structure

```
src/
├── components/     # React components
├── pages/         # Next.js pages
├── api/           # API routes
├── circuits/      # Zero-knowledge circuits
├── contracts/     # Smart contracts
├── lib/           # Utility functions
├── styles/        # Global styles
└── utils/         # Helper functions
```

### Building the Project

```bash
npm run build
# or
yarn build
```

### Running Tests

```bash
npm run test
# or
yarn test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - See [LICENSE](LICENSE) file for details

## Contact

- Rishi Kanaparti - [@rishikanaparti](https://twitter.com/rishikanaparti)
- Ashvath Sureshkumar - [@ashvathsuresh](https://twitter.com/ashvathsuresh)
