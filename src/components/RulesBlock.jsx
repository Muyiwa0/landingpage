import React from 'react'
import Image from 'next/image'
import img from '../images/draaw.png'
import { motion } from 'framer-motion'

const RulesBlock = () => {
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
            You are allowed a maximum overall account drawdown of 10%. That is,
your equity or balance must not go lower than $2.7K for a $3K account, $4.5K
for a $5K account and $22.5K for a $25K account.
            </p>
            <br />
            <p>
            Note: Equity takes into account the closed trades and the floating trades.
Without any open positions, the equity is equal to the balance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RulesBlock
