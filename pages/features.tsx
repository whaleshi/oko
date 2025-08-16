import Head from 'next/head'
import { Navbar } from '@/components/Navbar'

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - Oko.fun</title>
        <meta name="description" content="Discover the revolutionary features of Oko.fun Web3 gaming platform" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#0E0E0E] pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">
              Platform Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for gamers, by gamers. Experience the next generation of gaming with true ownership and real rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">🎮 Play-to-Earn Gaming</h2>
              <p className="text-gray-300 text-lg mb-6">
                Turn your gaming skills into real income. Earn cryptocurrency, NFTs, and exclusive rewards just by playing your favorite games.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• Daily challenges and tournaments</li>
                <li>• Skill-based reward system</li>
                <li>• Multiple earning opportunities</li>
                <li>• Instant payouts to your wallet</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4">Earn While You Play</h3>
                <p className="text-gray-300">Join thousands of players already earning rewards</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-4">True Ownership</h3>
                <p className="text-gray-300">Your assets, your control, forever</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">🔗 NFT Integration</h2>
              <p className="text-gray-300 text-lg mb-6">
                Own unique digital assets that retain value beyond any single game. Trade, collect, and showcase your achievements.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• Rare collectible items</li>
                <li>• Cross-game compatibility</li>
                <li>• Marketplace trading</li>
                <li>• Verified authenticity</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Built on high-performance blockchain for instant transactions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Secure & Safe</h3>
              <p className="text-gray-300">Military-grade security protecting your assets and data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Community</h3>
              <p className="text-gray-300">Connect with players worldwide in our vibrant ecosystem</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}