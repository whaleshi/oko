# Oko.fun - Web3 Gaming Platform

A decentralized gaming platform built with Next.js and Web3 technologies.

## Features

- 🔗 **Wallet Connection**: Connect with MetaMask, WalletConnect, and other popular wallets
- 🎮 **Coin Flip Game**: Bet ETH and try to double your tokens
- 🎨 **Modern UI**: Beautiful gradient design with Tailwind CSS
- 🔐 **Secure**: Built with industry-standard Web3 libraries

## Tech Stack

- **Framework**: Next.js 15 with Pages Router
- **Styling**: Tailwind CSS
- **Web3**: Wagmi, Viem, RainbowKit
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MetaMask or another Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oko.fun
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Get a WalletConnect Project ID:
   - Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
   - Create a new project
   - Copy the Project ID to your `.env.local` file

5. Update the configuration:
   - Edit `lib/wagmi.ts` to add your WalletConnect Project ID
   - Update contract addresses in `lib/contracts.ts`

6. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── components/           # React components
│   ├── WalletButton.tsx # Wallet connection component
│   └── CoinFlipGame.tsx # Coin flip game component
├── lib/                 # Utility libraries
│   ├── wagmi.ts        # Wagmi configuration
│   └── contracts.ts    # Smart contract ABIs and addresses
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper with providers
│   ├── index.tsx      # Home page
│   └── game.tsx       # Game page
├── styles/             # CSS styles
│   └── globals.css    # Global styles with Tailwind
└── public/            # Static assets
```

## Smart Contract Integration

The application includes a coin flip game that interacts with smart contracts. To deploy your own contract:

1. Create a simple coin flip contract with these functions:
   - `flipCoin()` - payable function to play the game
   - `getBalance()` - view function to check contract balance
   - `withdraw()` - owner function to withdraw funds

2. Update the contract address and ABI in `lib/contracts.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Heroku
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License.

## Security

- Never commit private keys or sensitive data
- Always validate user inputs
- Use proper error handling for Web3 interactions
- Test thoroughly on testnets before mainnet deployment

## Support

For questions and support, please open an issue in the GitHub repository.