import Head from 'next/head'
import { Navbar } from '@/components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Oko.fun</title>
        <meta name="description" content="Learn about Oko.fun's mission to revolutionize gaming through blockchain technology" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#0E0E0E] pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">About Oko.fun</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building the future of gaming where players have true ownership, real rewards, and unlimited possibilities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To create a gaming ecosystem where every player can earn, own, and trade digital assets with complete freedom. 
                We believe gaming should be more than entertainment—it should be an opportunity to build real value and connect 
                with communities worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">🎯 Our Vision</h3>
                <p className="text-gray-300">
                  A world where gaming creates real economic opportunities, where digital ownership is truly decentralized, 
                  and where players shape the future of their favorite games.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">⚡ Our Values</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Player empowerment first</li>
                  <li>• Transparent and fair systems</li>
                  <li>• Innovation through technology</li>
                  <li>• Community-driven development</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Why Web3 Gaming?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🔗</div>
                  <h4 className="text-lg font-semibold text-white mb-2">True Ownership</h4>
                  <p className="text-gray-300 text-sm">Your items exist on the blockchain, not just in one game</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">💎</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Real Value</h4>
                  <p className="text-gray-300 text-sm">Digital assets with actual economic value and utility</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🌐</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Interoperability</h4>
                  <p className="text-gray-300 text-sm">Use your assets across multiple games and platforms</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Join the Revolution</h2>
              <p className="text-gray-300 mb-6">
                Be part of the next generation of gaming. Connect your wallet and start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/game" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Start Playing
                </a>
                <a href="#" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition">
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}