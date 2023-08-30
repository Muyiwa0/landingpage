import React from 'react'
// import { motion } from 'framer-motion'
import Image from 'next/image'
import img from '../images/cuatenotes.svg'

const SecondRulesBlock = () => {
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
            <div className='rounded-[10px] p-3 mb-1'>
              <p className='font-semibold text-xl mb-2 text-[#28A745]'>
                FT9ja Classic
              </p>
              <p className='my-1 text-gray-900 font-semibold'>1ST Payout</p>
              <p className=' mb-2 text-gray-700'>You are eligible for the first payout after trading for at least
                10 days, even if you are on the weekly plan.</p>
              <p className='my-1 text-gray-900 font-semibold'>2ND Chance Accounts</p>
              <p className='text-gray-700'>
                &apos;2nd Chance Account s&apos; are not eligible for the
                Talent Bonus.
              </p>
              <p className='my-1 text-gray-900 font-semibold'>
                Payout Date
              </p>
              <p className='text-gray-700'>
                  FT9ja processes payouts on Fridays, even if it&apos;s
                  requested before Friday.
              </p>
              <p className='my-1 text-gray-900 font-semibold'>
                Profit Split
              </p>
              <p className='text-gray-700'>
                Split percentage in Aso Account is based on when you qualify for
                Aso Account -- counted from when you place your first trade in
                the &ldquo;1st chance account&ldquo;.
              </p>
            </div>
            
            <div className='rounded-[10px] p-3 mb-1'>
              <p className='font-semibold mb-2 text-xl text-[#28A745]'>
                FT9ja Challenge
              </p>
              <p className='my-1 text-gray-900 font-semibold'>Payout Date</p>
              <p className='mb-2 text-gray-700'>FT9ja processes payouts on Fridays, even if it’s requested before Friday</p>

              <p className='my-1 text-gray-900 font-semibold'>
                One-Time Fee Refund
              </p>
              <p className='text-gray-700'>
                  FT9ja Challenge Traders are eligible for a one-time fee
                  refund. It will be paid with their 1st payout in Aso Account.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondRulesBlock
