import React from 'react'
import Image from 'next/image'
import img from '../images/mini.png'
import { motion } from 'framer-motion'

const RulesBlock2 = () => {
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
            FT9ja Classic
            <br/>
You are required to open and close trading
positions for 2 or more days in a trading
week. And at least 10 separate days in a
trading month
            </p>
            <br />
            <p>
            FT9ja Challenge
            <br/>
You are required to open and close trading
positions for 2 or more days in a trading
week. And at least 6 separate days in each phase.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RulesBlock2
