import React from 'react'
import Image from 'next/image'
import img from '../images/tradingdays.svg'
// import { motion } from 'framer-motion'

const RulesBlock2 = () => {
  // const Animations = {
  //   initial: 'initial',
  //   animate: 'animate',
  //   variants: {
  //     initial: {
  //       opacity: 0,
  //     },
  //     animate: {
  //       opacity: 1,
  //       transition: { duration: 0.8 },
  //     },
  //   },
  // }
  return (
    <div>
      <div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 items-center md:grid-cols-2">
          <div className="p-12 lg:w-96 mx-auto">
            <Image src={img} alt="rules block" loading='lazy'/>
          </div>
          <div className='flex flex-col'>
            <div className='p-3 mb-1'>
              <p className='font-semibold mb-2'>
                FT9ja Classic
              </p>
              <p className=''>
                You are required to open and close trading positions for 2 or more
                days in a trading week. And at least 10 separate days in a trading
                month
              </p>
            </div>

            <div className='p-3 mb-1'>
              <p className='font-semibold mb-2'>
                FT9ja Challenge
              </p>
              <p className=''>
                You are required to open and close trading positions for 2 or more
                days in a trading week. And at least 6 separate days in each
                phase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RulesBlock2
