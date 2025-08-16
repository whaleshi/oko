import { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'
import { GAME_CONTRACT_ADDRESS, GAME_CONTRACT_ABI } from '@/lib/contracts'

export const CoinFlipGame = () => {
  const { address } = useAccount()
  const [betAmount, setBetAmount] = useState('0.01')
  const [isPlaying, setIsPlaying] = useState(false)
  const [lastResult, setLastResult] = useState<boolean | null>(null)

  const { writeContract, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({
      hash,
    })

  const flipCoin = async () => {
    if (!address) return
    
    try {
      setIsPlaying(true)
      await writeContract({
        address: GAME_CONTRACT_ADDRESS as `0x${string}`,
        abi: GAME_CONTRACT_ABI,
        functionName: 'flipCoin',
        value: parseEther(betAmount),
      })
    } catch (error) {
      console.error('Error flipping coin:', error)
      setIsPlaying(false)
    }
  }

  if (isConfirmed) {
    setTimeout(() => {
      setIsPlaying(false)
      setLastResult(Math.random() > 0.5) // Simulate result for demo
    }, 1000)
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        🪙 Coin Flip Game
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-white mb-2">
            Bet Amount (ETH):
          </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            className="w-full px-3 py-2 bg-white/20 text-white rounded border border-white/30 focus:border-purple-400 focus:outline-none"
            disabled={isPlaying || isPending || isConfirming}
          />
        </div>

        <button
          onClick={flipCoin}
          disabled={!address || isPlaying || isPending || isConfirming}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPlaying || isPending || isConfirming ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {isPending ? 'Confirm in wallet...' : isConfirming ? 'Flipping...' : 'Playing...'}
            </span>
          ) : (
            `Flip Coin (${betAmount} ETH)`
          )}
        </button>

        {lastResult !== null && (
          <div className="text-center">
            <div className="text-4xl mb-2">
              {lastResult ? '🎉' : '😢'}
            </div>
            <p className="text-white text-lg">
              {lastResult ? 'You Won!' : 'You Lost!'}
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-2 rounded">
            Error: {error.message}
          </div>
        )}
      </div>
    </div>
  )
}