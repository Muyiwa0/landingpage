import { RadioGroup } from '@headlessui/react'
import React, { useState } from 'react'
import clsx from 'clsx'
import RulesBlock from './RulesBlock'
import RulesBlock1 from './RulesBlock1'
import RulesBlock2 from './RulesBlock2'

import SecondRulesBlock from './SecondRulesBlock'

const Rules = () => {
  let [activePeriod, setActivePeriod] = useState('Daily Drawdown')

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="justify-center pt-10">
          <div className="">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2 md:grid-cols-4"
            >
              <RadioGroup.Option
                value={'Daily Drawdown'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Daily Drawdown'
                      ? 'bg-black text-white'
                      : 'text-black'
                  } rounded-tl-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300  hover:border-gray-400 hover:bg-black hover:text-white sm:px-2 md:rounded-l-lg`
                )}
              >
                Daily Drawdown
              </RadioGroup.Option>
              <RadioGroup.Option
                value={'Account Drawdown'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Account Drawdown'
                      ? 'bg-black text-white'
                      : 'text-black'
                  }  rounded-tr-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300 hover:border-gray-400  hover:bg-black hover:text-white sm:px-2 md:rounded-tr-none`
                )}
              >
                Account Drawdown
              </RadioGroup.Option>
              <RadioGroup.Option
                value={'Minimum Trading Days'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Minimum Trading Days'
                      ? 'bg-black text-white'
                      : 'text-black'
                  }  rounded-bl-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300  hover:border-gray-400 hover:bg-black hover:text-white sm:px-2 md:rounded-bl-none`
                )}
              >
                Minimum Trading Days
              </RadioGroup.Option>
              <RadioGroup.Option
                value={'Other things to note'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Other things to note'
                      ? 'bg-black text-white'
                      : 'text-black'
                  } rounded-br-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300 hover:border-gray-400  hover:bg-black hover:text-white sm:px-2 md:rounded-r-lg`
                )}
              >
                Other things to note
              </RadioGroup.Option>
            </RadioGroup>
            <div></div>
          </div>
        </div>
        <div className="py-5 md:py-14">
          {activePeriod === 'Daily Drawdown' && <RulesBlock1 />}
          {activePeriod === 'Account Drawdown' && <RulesBlock />}
          {activePeriod === 'Minimum Trading Days' && <RulesBlock2 />}
          {activePeriod === 'Other things to note' && <SecondRulesBlock />}
        </div>
      </div>
    </div>
  )
}

export default Rules
