import { useState, useEffect } from 'react'

export const GridCanvas = () => {
  // 5x5网格，每个格子80x80
  const cellSize = 80
  const gridSize = 5
  const gridTotalSize = cellSize * gridSize // 400px
  const containerSize = 320

  // 中心格子交替显示状态
  const [showLogo, setShowLogo] = useState(true)

  // 每3秒切换一次显示内容
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="mx-auto relative overflow-hidden"
      style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
    >
      {/* 网格容器 */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          top: 0,
          left: 0
        }}
      >
        <div
          className="grid gap-0"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
            width: `${gridTotalSize}px`,
            height: `${gridTotalSize}px`
          }}
        >
          {Array.from({ length: gridSize * gridSize }, (_, index) => {
            const row = Math.floor(index / gridSize)
            const col = index % gridSize

            // 计算到中心的距离来设置透明度
            const centerRow = (gridSize - 1) / 2
            const centerCol = (gridSize - 1) / 2
            const distance = Math.max(Math.abs(row - centerRow), Math.abs(col - centerCol))

            // 根据距离设置边框透明度 - 使用更淡的颜色
            let borderOpacity = 0.05
            if (distance === 0) borderOpacity = 0.15     // 中心格子
            else if (distance === 1) borderOpacity = 0.1 // 第一圈
            else if (distance === 2) borderOpacity = 0.05 // 边缘格子，更淡

            // 指定格子设置白色背景
            // 理解为坐标形式：22=第2行第2列, 24=第2行第4列, 33=第3行第3列, 42=第4行第2列, 44=第4行第4列
            // 转换为数组索引（从0开始）：
            // 22 -> row:1,col:1 -> index:6
            // 24 -> row:1,col:3 -> index:8  
            // 33 -> row:2,col:2 -> index:12
            // 42 -> row:3,col:1 -> index:16
            // 44 -> row:3,col:3 -> index:18
            const whiteBackgroundCells = [6, 8, 12, 16, 18]
            const hasWhiteBackground = whiteBackgroundCells.includes(index)

            // 为特定格子定义文字内容
            const getCellText = (index: number) => {
              switch (index) {
                case 6: return 'X Layer'    // 22位置
                case 8: return 'Creators'   // 24位置
                case 12: return showLogo ? null : 'OKO'  // 33位置 - 交替显示Logo或文字
                case 16: return 'Startup'   // 42位置
                case 18: return 'Memes'     // 44位置
                default: return ''
              }
            }

            const cellText = getCellText(index)
            const isCenter = index === 12  // 中心格子

            return (
              <div
                key={index}
                className={`${isCenter ? 'f7001' : 'f6001'} transition-all duration-300 hover:bg-white/10 flex items-center justify-center ${hasWhiteBackground ? 'relative z-10' : ''
                  }`}
                style={{
                  width: `${cellSize}px`,
                  height: `${cellSize}px`,
                  border: `0.5px solid rgba(255, 255, 255, ${borderOpacity})`,
                  backgroundColor: hasWhiteBackground ? '#FFFFFF' : 'transparent'
                }}
              >
                {/* 中心格子特殊处理 */}
                {isCenter ? (
                  showLogo ? (
                    <LogoIcon />
                  ) : (
                    <span
                      style={{
                        fontSize: '20px',
                        color: '#0E0E0E',
                        textAlign: 'center',
                        lineHeight: '1.2'
                      }}
                    >
                      OKO
                    </span>
                  )
                ) : (
                  cellText && (
                    <span
                      style={{
                        fontSize: '15px',
                        color: '#0E0E0E',
                        textAlign: 'center',
                        lineHeight: '1.2'
                      }}
                    >
                      {cellText}
                    </span>
                  )
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 渐变遮罩层 - 让边缘慢慢消失 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at center,
              transparent 30%,
              rgba(14, 14, 14, 0.2) 60%,
              rgba(14, 14, 14, 0.6) 80%,
              rgba(14, 14, 14, 1) 100%
            )
          `
        }}
      />
    </div>
  )
}

const LogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M28.0186 5.63629C29.5415 4.11354 32.0102 4.11353 33.5332 5.63629C35.0562 7.1593 35.0561 9.62886 33.5332 11.1519L30.2715 14.4136C33.5688 15.4327 36.3664 17.5849 38.207 20.4078C39.3832 22.212 38.8744 24.6279 37.0703 25.8043C35.2662 26.9805 32.8503 26.4715 31.6738 24.6675C30.4495 22.79 28.3411 21.5621 25.9492 21.5621C22.1803 21.5624 19.1251 24.6183 19.125 28.3873C19.125 32.1564 22.1802 35.2121 25.9492 35.2125C28.3412 35.2125 30.4496 33.9847 31.6738 32.107C32.8503 30.3032 35.2662 29.7942 37.0703 30.9703C38.8745 32.1467 39.3833 34.5635 38.207 36.3677C35.604 40.3598 31.0871 43.0123 25.9492 43.0123C21.9109 43.0121 18.2549 41.3755 15.6084 38.7291L3.19824 26.3189C1.67575 24.796 1.67578 22.3272 3.19824 20.8043C4.72127 19.2812 7.19082 19.2813 8.71387 20.8043L11.3242 23.4146V10.8375C11.3243 8.68372 13.0709 6.93722 15.2246 6.93707C17.3785 6.93707 19.1249 8.68363 19.125 10.8375V14.5298L28.0186 5.63629Z" fill="#0E0E0E" />
  </svg>
)