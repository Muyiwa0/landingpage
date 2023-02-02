import { useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28a745" />
            <stop offset="1" stopColor="#28a745" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#28a745" />
            <stop offset="1" stopColor="#28a745" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef()
  let pathRef = useRef()
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points = []

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width
    let y =
      paddingY +
      (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#28a745" />
          <stop offset="100%" stopColor="#28a745" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        transition={{ duration: 1 }}
        {...(isInView
          ? { stroke: '#28a745', animate: { pathLength: 1, opacity: 1 } }
          : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#28a745"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#28a745"
          />
        </>
      )}
    </svg>
  )
}

function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(null)
  let activePriceIndex = activePointIndex ?? prices.length - 1
  let activeValue = prices[activePriceIndex]
  let previousValue = prices[activePriceIndex - 1]
  let percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-3">
          <div className="flex justify-between gap-2 pb-2">
            <span className="border-r-2 border-gray-400 pr-2">Returns</span>
            <span className="sm:px-2">10%</span>
            <span className="sm:px-2">25%</span>
            <span className="font-bold text-[#28a745] sm:px-2">50%</span>
            <span className="sm:px-2">100%</span>
          </div>
          <div className="mt-1 flex justify-between gap-2 border-t border-gray-200 py-1">
            <span className="flex flex-col border-r-2 border-gray-400 pr-2 text-center text-sm sm:px-2">
              <span>Funding</span>
              <span className="mt-[-6px]">Model</span>
            </span>
            <span className="flex flex-col text-center text-sm sm:px-2">
              <span>FT9ja</span>
              <span className="mt-[-6px]">Classic</span>
            </span>
            <span className="flex flex-col text-center text-sm font-bold text-[#28a745] sm:px-2">
              <span>FT9ja</span>
              <span className="mt-[-6px]">Challenge</span>
            </span>
          </div>
          <div className="mt-1 flex justify-between gap-1 border-t border-gray-200 py-1 sm:gap-2">
            <div className="flex flex-col px-[1px] text-center text-sm sm:px-2">
              <span>$41</span>
              <span className="my-[-6px]">Trade with</span>
              <span>$5,000</span>
            </div>
            <div className="flex flex-col px-[1px] text-center text-sm sm:px-2">
              <span>$70</span>
              <span className="my-[-6px]">Trade with</span>
              <span>$10,000</span>
            </div>
            <div className="flex flex-col px-[1px] text-center text-sm font-bold text-[#28a745] sm:px-2">
              <span>$143</span>
              <span className="my-[-6px]">Trade with</span>
              <span>$25,000</span>
            </div>
          </div>
          <div className="mt-1 flex items-end justify-between gap-2 border-t border-gray-200 pt-1">
            <div className="flex flex-col items-center pl-4">
              <p className="pb-2 text-center font-bold">$71.5</p>
              <span className="h-12 w-14 bg-[#28a745]"></span>
            </div>
            <div className="flex flex-col justify-between">
              <p className="flex flex-col py-10 text-center font-bold text-[#28a745]">
                <span>140X more</span>{' '}
                <span className="my-[-6px]">returns</span>
              </p>
            </div>
            <div className="flex flex-col items-center pr-4">
              <p className="pb-2 text-center font-bold">$10,000</p>
              <span className="h-[120px] w-14 bg-[#28a745]"></span>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="pl-1">
              <p className="w-20 text-center text-xs">Using your own $143</p>
            </div>
            <div className="pr-2">
              <p className="w-20 text-center text-xs">
                Using FT9ja&apos;s $25k Account Size
              </p>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}

const Animations = {
  initial: 'initial',
  animate: 'animate',
  variants: {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
}

export function Hero() {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden py-20 sm:pt-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Every Trader deserves a chance to be successful
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Trade up to $50,000 of our company&apos;s capital and get paid up
              to 80% of the profit weekly or monthly. No risk for you, we take
              the losses. Join the team of our successful Traders now.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 lg:justify-start">
              <Link href="/#pricing">
                <a className="rounded-md border-[1px] border-black bg-black py-2 px-9 text-white duration-300 hover:bg-white hover:text-black">
                  Start Trading
                </a>
              </Link>

              <>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={open}
                  videoId="OXFym18nXbY"
                  onClose={() => setOpen(false)}
                />
              </>
              <Button
                // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
                onClick={() => setOpen(true)}
              >
                {/* <a
                  target="_blank"
                 
                > */}
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">Why FT9ja?</span>
                {/* </a> */}
              </Button>
            </div>
          </div>
          <div className="relative mt-10 max-h-[600px] sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 lg:max-h-[800px] xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/2 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_60%)] sm:top-16 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <motion.div
              {...Animations}
              className="-mx-4 h-[480px] px-2 pb-10 sm:h-[440px] lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-[510px] lg:px-0 lg:pt-6 xl:-bottom-32"
            >
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}
