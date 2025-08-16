import Head from 'next/head'
import { useAccount, useBalance } from 'wagmi'
import { Navbar } from '@/components/Navbar'
import { WalletButton } from '@/components/WalletButton'
import { CoinFlipGame } from '@/components/CoinFlipGame'

export default function Game() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })

  return (
    <>
      <Head>
        <title>Game - Oko.fun</title>
        <meta name="description" content="Play Web3 games on Oko.fun" />
      </Head>
      <Navbar />
      
      <main className="min-h-screen bg-[#0E0E0E] pt-20">
        
        <div className="container mx-auto px-4 py-8">
          {isConnected ? (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8 text-center">
                Game Center
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CoinFlipGame />
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    NFT Raffle
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Win exclusive NFTs in our daily raffle
                  </p>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300">
                    Enter Raffle
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Staking Pool
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Stake your tokens and earn rewards
                  </p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-2 px-4 rounded hover:from-blue-600 hover:to-cyan-600 transition duration-300">
                    Stake Now
                  </button>
                </div>
              </div>
              
              <div className="mt-8 bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Your Wallet
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300">Address:</p>
                    <p className="text-white font-mono">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300">Balance:</p>
                    <p className="text-white font-mono">
                      {balance ? `${Number(balance.value) / 10**balance.decimals} ${balance.symbol}` : 'Loading...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-8">
                Connect Your Wallet
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                You need to connect your wallet to access the games
              </p>
              <WalletButton />
            </div>
          )}
        </div>
      </main>
    </>
  )
}