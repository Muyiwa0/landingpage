import React, { useState } from 'react'
import { PrimaryFeatures2 } from '@/components/PrimaryFeatures2'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { SecondFeatures } from '@/components/SecondFeatures'
import CompareModels from '@/components/CompareModels'
import { Header } from '@/components/Header'
import Rules from '@/components/Rules'
import Swipper from '@/components/Swipper'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import pattern from '@/images/pattern.png'
import Image from 'next/image'

const HowItWorks = () => {
  let [activePeriod, setActivePeriod] = useState('FT9ja Classic')
  let [prevPeriod, setPrevPeriod] = useState('FT9ja Classic')

  return (
    <>
      <Head>
        <title>FT9ja - How it works</title>
        <meta
          name="description"
          content="We believe you have what it takes to be successful. Sign up for a funding model, choose an account size, and start trading to earn as soon as 10 days. Talent Bonus: Get paid during evaluation. 2nd Chance Account: Naija happens - get a 2nd account free of charge. Flexibility: No time limit to achieve 25% profit target. Deriv Prop Firm. Synthetic Indices Prop Firm."
        />
      </Head>
      <Header />
      <div className="relative flex flex-col items-center justify-center bg-gray-900 sm:h-[170px]">
        <Image
          src={pattern}
          width={1700}
          height={1000}
          priority
          alt=""
          className="object-cover opacity-25"
        />
        <div className="absolute">
          <RadioGroup
            value={activePeriod}
            onClick={() => setPrevPeriod(activePeriod)}
            onChange={setActivePeriod}
            className="grid grid-cols-3 text-center"
          >
            <RadioGroup.Option
              value={'FT9ja Classic'}
              className={clsx(
                'cursor-pointer rounded-l-lg border border-gray-300 px-3 py-7 text-sm text-gray-200 outline-2 outline-offset-2 transition-colors hover:border-gray-400 sm:px-10'
              )}
            >
              FT9ja Classic
            </RadioGroup.Option>
            <RadioGroup.Option
              value={'FT9ja Challenge'}
              className={clsx(
                'cursor-pointer border border-gray-300 px-3 py-7 text-sm text-gray-200 outline-2 outline-offset-2 transition-colors hover:border-gray-400 sm:px-10'
              )}
            >
              FT9ja Challenge
            </RadioGroup.Option>
            <RadioGroup.Option
              value={'Compare Models'}
              className={clsx(
                'cursor-pointer rounded-r-lg  border border-gray-300 px-3 py-7 text-sm text-gray-200 outline-2 outline-offset-2 transition-colors hover:border-gray-400 sm:px-10'
              )}
            >
              Compare Models
            </RadioGroup.Option>
          </RadioGroup>
          <div
            aria-hidden="true"
            className={clsx(
              'pointer-events-none absolute inset-0 z-10 grid grid-cols-3 overflow-hidden rounded-lg bg-[#28a745] transition-all duration-300',
              activePeriod === 'FT9ja Classic'
                ? '[clip-path:inset(0_66%_0_0)]'
                : activePeriod === 'FT9ja Challenge'
                ? '[clip-path:inset(0_33%_0_33%)]'
                : '[clip-path:inset(0_0_0_calc(66%-1px))]'
            )}
          >
            {['FT9ja Classic', 'FT9ja Challenge', 'Compare Models'].map(
              (period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-7 px-3 text-center text-sm text-white sm:px-10 [&:not(:focus-visible)]:focus:outline-none',
                    period === 'FT9ja Classic'
                  )}
                >
                  {period}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {activePeriod === 'FT9ja Classic' && <PrimaryFeatures2 />}
      {activePeriod === 'FT9ja Challenge' && <SecondFeatures />}
      {activePeriod === 'Compare Models' && <CompareModels />}
      <Rules />
      <Swipper />
      <Footer />
    </>
  )
}

export default HowItWorks
