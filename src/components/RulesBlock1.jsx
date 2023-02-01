import React from 'react'
import Image from 'next/image'
import img from '../images/bro.svg'
import { motion } from 'framer-motion'

const RulesBlock1 = () => {
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
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 md:grid-cols-2">
          <Image src={img} alt="rules block" />
          <div>
            <p>
              You are allowed a maximum daily drawdown of 5%.
              <br />
              This means that your trading account balance or equity should not
              go below 5% of the days starting equity. For example, your
              starting equity for the day is $5,100. 5% of $5,100 is $255 which
              means that your equity must not go below $4,845.
            </p>
            <br />
            <p>
              Note: Equity takes into account the closed trades and the floating
              trades. Without any open positions, the equity is equal to the
              balance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RulesBlock1
