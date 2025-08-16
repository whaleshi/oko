import Head from 'next/head'
import { Button } from '@heroui/react'
import { Navbar } from '@/components/Navbar'
import { GridCanvas } from '@/components/GridCanvas'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oko.fun</title>
        <meta name="description" content="X Layer 上的创新 Launchpad" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta property="og:title" content="Oko.fun" />
        <meta property="og:description" content="X Layer 上的创新 Launchpad" />
        <meta property="og:image" content="/share.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oko.fun" />
        <meta name="twitter:description" content="X Layer 上的创新 Launchpad" />
        <meta name="twitter:image" content="/share.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="h-screen bg-[#0E0E0E] overflow-hidden">
        {/* PC端：导航栏80px + 间距60px = 140px */}
        {/* H5端：导航栏56px + 间距60px = 116px */}
        <style jsx>{`
          .content-container {
            padding-top: 116px;
          }
          @media (min-width: 768px) {
            .content-container {
              padding-top: 140px;
            }
          }
        `}</style>
        <div className="flex flex-col items-center content-container">
          <GridCanvas />

          {/* 按钮组 */}
          <div className="flex flex-col" style={{ marginTop: '40px', gap: '12px' }}>
            {/* Coming soon 按钮 */}
            <Button
              radius="full"
              variant="solid"
              className="w-[280px] h-[44px] md:h-[40px] bg-white text-[#0E0E0E] text-[14px] f6001 hover:bg-white/90 active:bg-white/80 data-[pressed=true]:bg-white/80"
            >
              Coming soon
            </Button>

            {/* 助力传播 按钮 */}
            <Button
              radius="full"
              variant="solid"
              className="w-[280px] h-[44px] md:h-[40px] bg-[#9AED2C] text-[#0E0E0E] text-[14px] f600 hover:bg-[#9AED2C]/90 active:bg-[#9AED2C]/80 data-[pressed=true]:bg-[#9AED2C]/80"
            >
              助力传播
            </Button>
          </div>
        </div>

        {/* 版权信息 */}
        <footer className="fixed bottom-0 left-0 right-0 pb-[20px]">
          <div className="text-center">
            <p className="text-[11px]" style={{ color: 'rgba(255, 255, 255, 0.35)' }}>
              © oko.fun 2025
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}