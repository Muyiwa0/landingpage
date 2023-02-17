import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img from '../images/cuatenotes.svg'

const SecondRulesBlock = () => {
  const Animations = {
    initial: 'initial',
    animate: 'animate',
    variants: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: { duration: 0.8 },
      },
    },
  }
  return (
    <div>
      <motion.div {...Animations}>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 items-center md:grid-cols-2">
          <div className="p-12 w-96 mx-auto">
            <Image src={img} alt="rules block" />
          </div>
          <div className='flex flex-col'>
            <div className='rounded-[10px] p-3 mb-1'>
              <p className='font-semibold mb-2'>
                FT9ja Classic
              </p>
              <p className='my-1'>1ST Payout</p>
              <p className=' mb-2'>You are eligible for the first payout after trading for at least
                10 days, even if you are on the weekly plan.</p>
              <p className='my-1'>2ND Chance Accounts</p>
              <p className=''>
                &apos;2nd Chance Account s&apos; are not eligible for the
                Talent Bonus.
              </p>
            </div>

            <div className='rounded-[10px] p-3 mb-1'>
              <p className='font-semibold mb-2'>
                PAYOUT DATE
              </p>
              <p className=''>
                  FT9ja processes payouts on Fridays, even if it&apos;s
                  requested before Friday.
              </p>
            </div>

            <div className='rounded-[10px] p-3 mb-1'>
              <p className='font-semibold mb-2'>
                PROFIT SPLIT
              </p>
              <p className=''>
                Split percentage in Aso Account is based on when you qualify for
                Aso Account -- counted from when you place your first trade in
                the &ldquo;1st chance account&ldquo;.
              </p>
            </div>

            <div className='rounded-[10px] p-3 mb-1'>
              <p className='font-semibold mb-2'>
                FT9ja Challenge
              </p>
              <p className='my-1'>PAYOUT DATE</p>
              <p className=' mb-2'>You are eligible for the first payout after trading for at least
                10 days, even if you are on the weekly plan.</p>
              <p className='my-1'>2ND Chance Accounts</p>
              <p className=''>
                  FT9ja processes payouts on Fridays, even if it&apos;s
                  requested before Friday.
              </p>
            </div>

            <div className='rounded-[10px] p-3 mb-1'>
              <p className='font-semibold mb-2'>
                ONE-TIME FEE REFUND
              </p>
              <p className=''>
                  FT9ja Challenge Traders are eligible for a one-time fee
                  refund. It will be paid with their 1st payout in Aso Account.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SecondRulesBlock

/**
 *  {/* <div className="mx-auto flex max-w-screen-sm items-center justify-center">
          <div className="p-12 w-96 md:w-auto mx-auto">
            <Image src={img} alt="" />
          </div>
        </div>
        <div
          style={{ marginTop: '4%' }}
          className="mx-auto grid max-w-screen-lg grid-cols-1"
        >
          <div className="mx-auto ">
            <h1 className="py-2 text-center">FT9ja Classic</h1>
            <div>
              <h1 className="pb-1 pt-3">1ST PAYOUT</h1>
              <p className="text-normal">
                You are eligible for the first payout after trading for at least
                10 days, even if you are on the weekly plan.
              </p>

              <h1 className="pb-1 pt-3">2ND CHANCE ACCOUNTS</h1>
              <p className="text-normal">
                &apos; 2nd Chance Account s&apos; are not eligible for the
                Talent Bonus.
              </p>

              <h1 className="pb-1 pt-3">PAYOUT DATE</h1>
              <p className="text-normal">
                FT9ja processes payouts on Fridays, even if it&apos;s requested
                before Friday.
              </p>

              <h1 className="pb-1 pt-3">PROFIT SPLIT</h1>
              <p className="text-normal">
                Split percentage in Aso Account is based on when you qualify for
                Aso Account -- counted from when you place your first trade in
                the &ldquo;1st chance account&ldquo;.
              </p>

              <h1 className="pb-1 pt-3">ONE-TIME FEE REFUND</h1>
              <p className="text-normal">
                No one-time fee refund for FT9ja Classic Traders
              </p>

              <p>
                <h1 className="py-5 text-center">FT9ja Challenge</h1>
                <h1 className="pb-1 pt-3">PAYOUT DATE</h1>
                <p className="text-normal">
                  FT9ja processes payouts on Fridays, even if it&apos;s
                  requested before Friday.
                </p>

                <h1 className="pb-1 pt-3">ONE-TIME FEE REFUND</h1>
                <p className="text-normal">
                  FT9ja Challenge Traders are eligible for a one-time fee
                  refund. It will be paid with their 1st payout in Aso Account.
                </p>
              </p>
            </div>
          </div>
        </div> */
