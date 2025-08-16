import Link from 'next/link'
import Image from 'next/image'



export const Navbar = () => {

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="h-14 md:h-20">
        <div 
          className="w-full md:max-w-[1440px] md:mx-auto h-full flex justify-between items-center"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <div className="flex items-center gap-2">
            <Link href="/">
              <LogoIcon />
            </Link>
            <span className="text-[18px] text-white f7001">OKX.FUN</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.open('https://t.me/okxfun', '_blank')}
            >
              <Image src="/tg.png" alt="Telegram" width={32} height={32} />
            </button>
            <button
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.open('https://x.com/XLayerOfficial', '_blank')}
            >
              <Image src="/x.png" alt="X" width={32} height={32} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const LogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" fill="none">
    <path d="M28.0186 5.63629C29.5415 4.11354 32.0102 4.11353 33.5332 5.63629C35.0562 7.1593 35.0561 9.62886 33.5332 11.1519L30.2715 14.4136C33.5688 15.4327 36.3664 17.5849 38.207 20.4078C39.3832 22.212 38.8744 24.6279 37.0703 25.8043C35.2662 26.9805 32.8503 26.4715 31.6738 24.6675C30.4495 22.79 28.3411 21.5621 25.9492 21.5621C22.1803 21.5624 19.1251 24.6183 19.125 28.3873C19.125 32.1564 22.1802 35.2121 25.9492 35.2125C28.3412 35.2125 30.4496 33.9847 31.6738 32.107C32.8503 30.3032 35.2662 29.7942 37.0703 30.9703C38.8745 32.1467 39.3833 34.5635 38.207 36.3677C35.604 40.3598 31.0871 43.0123 25.9492 43.0123C21.9109 43.0121 18.2549 41.3755 15.6084 38.7291L3.19824 26.3189C1.67575 24.796 1.67578 22.3272 3.19824 20.8043C4.72127 19.2812 7.19082 19.2813 8.71387 20.8043L11.3242 23.4146V10.8375C11.3243 8.68372 13.0709 6.93722 15.2246 6.93707C17.3785 6.93707 19.1249 8.68363 19.125 10.8375V14.5298L28.0186 5.63629Z" fill="#FFFFFF" />
  </svg>
)

