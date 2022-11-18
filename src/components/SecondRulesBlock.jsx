import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img from '../images/cyber-bg.png'

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
        <div className="mx-auto flex max-w-screen-sm items-center justify-center">
          <Image src={img} alt="" />
        </div>
        <div className="grid grid-cols-1">
          <div className="mx-auto max-w-screen-sm">
          
            <h1 style={{fontSize:"revert"}}>FT9ja Classic</h1>
            <p>
            <br/>
            <br/>
            1ST PAYOUT
            <br/>
            <p>You are eligible for the first payout after trading for at least 10 days, even if you are on
            the weekly plan.</p>
            <br/>

2ND CHANCE ACCOUNTS
            <br/>
'2nd Chance Accounts' are not eligible for the Talent Bonus.
<br/>
            <br/>
PAYOUT DATE
<br/>
FT9ja processes payouts on Fridays, even if it's requested before Friday.
<br/>
            <br/>
PROFIT SPLIT
<br/>
Profit Split percentage in Aso Account is based on when you qualify for Aso
Account -- counted from when you place your first trade in the "1st chance account".
<br/>
            <br/>
ONE-TIME FEE REFUND
<br/>

No one-time fee refund for FT9ja Classic Traders
            </p>
            <br />
            <p>
            <h1 style={{fontSize:"revert"}}>FT9ja Challenge</h1>
            <br/>
            <br/>
            PAYOUT DATE
<br/>
FT9ja processes payouts on Fridays, even if it's requested before Friday.
<br/>
            <br/>
            ONE-TIME FEE REFUND
<br/>

FT9ja Challenge Traders are eligible for a one-time fee refund. It will be paid with their 1st
payout in Aso Account.
            </p>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SecondRulesBlock

