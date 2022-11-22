import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, RadioGroup, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/Container'
import Link from 'next/link'

const plans = [
  {
    name: 'Classic',
    headings: [
      {
        id: 1,
        heading: '$3,000 (N2.1M)',
      },
      {
        id: 2,
        heading: '$5,000 (N3.5M)',
      },
      {
        id: 3,
        heading: '$25,000 (N17.5M)',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Evaluation',
        step: 'Grow your Zuma Account to 25% of your starting Account Size to qualify for Aso Account.',
        text: 'Grow your Zuma Account to 25% of your starting Account Size to qualify for Aso Account.',
        
        points: [
          {
            id: 1,
            point:
              '80% Profit Split: if you qualify for the Aso Account within 1 months of placing your first trade.',
          },
          {
            id: 2,
            point:
              '60% Profit Split: if you qualify for the Aso Account within 1-3 months.',
          },
          {
            id: 4,
            point:
              '40% Profit Split: if you qualify for the Aso Account after 3 months.',
          },
        ],
        desc: 'NOTE: 4 trading weeks is regarded as 1 month',
        
        // desc: [
        //   {
        //     id: 1,
        //     text: '80% Profit Split: if you qualify for the Aso Account within 1 months of placing your first trade.',
        //   },
        //   {
        //     id: 1,
        //     text: '60% Profit Split: if you qualify for the Aso Account within 1-3 months.',
        //   },
        //   {
        //     id: 1,
        //     text: '40% Profit Split: if you qualify for the Aso Account after 3 months.',
        //   },
        //   {
        //     id: 1,
        //     text: "NOTE: 4 trading weeks is regarded as 1 month"
        //   }
        // ],
        
      },
      {
        id: 2,
        title: 'Time limit',
        step: '',
        text: 'No time limit',
        desc: '',
      },
      {
        id: 3,
        title: 'Profit Split',
        step: '',
        text: 'Up to 80% to the trader',
        desc: 'Grow your Zuma Account to 25% of your starting Account Size to qualify for Aso Account.',
        points: [
          {
            id: 1,
            point:
              '80% Profit Split: if you qualify for the Aso Account within 3 months of placing your first trade.',
          },
          {
            id: 2,
            point:
              '65% Profit Split: if you qualify for the Aso Account within 3-6 months.',
          },
          {
            id: 4,
            point:
              '50% Profit Split: if you qualify for the Aso Account after 6 months.',
          },
        ],
      },
      {
        id: 4,
        title: 'Talent Bonus',
        step: '',
        text: '5% weekly or 10% monthly to the Trader',
        desc: 'While you earn a Profit Split on the Aso Account, you earn a Talent Bonus on the Zuma Account.',
        points: [
          {
            id: 1,
            point: 'You can choose between the weekly or monthly payout plans.',
          },
          {
            id: 2,
            point:
              'You get paid 5% of the profit at the end of the week as the Talent Bonus.',
          },
          {
            id: 3,
            point:
              'Or if you choose the monthly payout plan, you get paid 10% at the end of month.',
          },
        ],
      },
      {
        id: 5,
        title: 'Available Leverage',
        step: '',
        text: '1:100',
        desc: '100 is the maximum leverage. You can use a lower leverage.',
      },
      {
        id: 6,
        title: 'Max. Daily DrawDown',
        step: '',
        text: '5%',
        desc: `You are allowed a maximum daily drawdown of 5%. Daily drawdown is calculated using the equity at 00:00 WAT. As such, it is not fixed like Account Drawdown. Drawdown refers to the equity not balance. It takes into account the closed trades and the floating trades.`,
      },
      {
        id: 7,
        title: 'Max. Account DrawDown',
        step: '',
        text: '10%',
        desc: `You are allowed a maximum overall account drawdown of 10%. That is $2,700 for a $3,000 account, $4,500 for a $5,000 account, and $22,500 for a $25,000 account Drawdown refers to the equity not balance. It takes into account the closed trades and the floating trades.`,
      },
      {
        id: 8,
        title: 'Min. Trading Days',
        step: '',
        text: '2 days per week or 10 days per month',
        desc: 'You are required to open and close trading positions for 2 or more days in a trading week. And at least 10 seperate days in a trading month',
      },
      {
        id: 9,
        title: 'Second Change Account',
        step: '',
        text: '1 free account in case you blow your first account',
        desc: 'Bad network? ‘down NEPA’? stuck in traffic and can’t place that trade? We can relate. If you blow your first Zuma Account, just request for a Second Chance Account. It’s FREE.',
      },
      {
        id: 10,
        title: 'One-time Fee',
        step: '',
        text: [
          {
            id: 1,
            text: 'N30,000',
          },
          {
            id: 2,
            text: 'N45,000	',
          },
          {
            id: 3,
            text: 'N180,000',
          },
        ],
        desc: 'No monthly charges or other hidden fees.',
      },
    ],
    prices: [
      {
        id: 1,
        price: '$3,000',
      },
      {
        id: 2,
        price: '$5,000',
      },
      {
        id: 3,
        price: '$25,000',
      },
    ],
  },
  {
    name: 'Challenge',
    headings: [
      {
        id: 1,
        heading: '$5,000 (N3.5M)',
      },
      {
        id: 2,
        heading: '$10,000 (N7M)',
      },
      {
        id: 3,
        heading: '$25,000 (N17.5M)',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Evaluation',
        step: '2 Steps : ',
        desc: '',
        points: '',
        text: [
          {
            id: 1,
            text: 'Challenge: 10% profit target',
          },
          {
            id: 1,
            text: 'Verification: 5% profit Target',
          },
        ],
        desc: '',
      },
      {
        id: 2,
        title: 'Time limit',
        step: '   ',
        desc: '',
        text: [
          {
            id: 1,
            text: 'Challenge: 4 weeks',
          },
          {
            id: 1,
            text: 'Verification: 8 weeks',
          },
        ],
        desc: '',
      },
      {
        id: 3,
        title: 'Profit Split',
        step: '',
        text: '80% to the Trader',
        desc: '',
        points: [
          {
            id: 1,
            point:
              '80% Profit Split: if you qualify for the Aso Account within 3 months of placing your first trade.',
          },
          {
            id: 2,
            point:
              '65% Profit Split: if you qualify for the Aso Account within 3-6 months.',
          },
          {
            id: 3,
            point:
              '50% Profit Split: if you qualify for the Aso Account after 6 months.',
          },
        ],
      },
      {
        id: 5,
        title: 'Available Leverage',
        text: '1:100',
        desc: '100 is the maximum leverage. You can use a lower leverage.',
      },
      {
        id: 6,
        title: 'Max. Daily DrawDown',
        step: '',
        text: '5%',
        desc: `You are allowed a maximum daily drawdown of 5%. Daily drawdown is calculated using the equity at 00:00 WAT. As such, it is not fixed like Account Drawdown. Drawdown refers to the equity not balance. It takes into account the closed trades and the floating trades.`,
      },
      {
        id: 7,
        title: 'Max. Account DrawDown',
        step: '',
        text: '10%',
        desc: `You are allowed a maximum overall account drawdown of 10%. That is $2,700 for a $3,000 account, $4,500 for a $5,000 account, and $22,500 for a $25,000 account Drawdown refers to the equity not balance. It takes into account the closed trades and the floating trades.`,
      },
      {
        id: 8,
        title: 'Min. Trading Days',
        step: '',
        text: '2 days per week and 6 days in each phase',
        desc: '',
      },
      {
        id: 10,
        title: 'One-time Fee',
        step: '',
        text: [
          {
            id: 1,
            text: 'N29,000',
          },
          {
            id: 2,
            text: 'N49,000.	',
          },
          {
            id: 3,
            text: 'N99,000',
          },
        ],
        desc: 'No monthly charges or other hidden fees.',
      },
    ],
    prices: [
      {
        id: 1,
        price: '$5,000',
      },
      {
        id: 2,
        price: '$10,000',
      },
      {
        id: 3,
        price: '$25,000',
      },
    ],
  },
]

const compare = [
  {
    headings: [
      {
        id: 1,
        heading: '  ',
      },
      {
        id: 2,
        heading: 'FT9ja Classic',
      },
      {
        id: 3,
        heading: 'FT9ja Challenge',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Evaluation',
        point1: [
          {
            id: 1,
            text: '1-Step:',
          },
          {
            id: 2,
            text: '25% profit target',
          },
        ],
        point2: [
          {
            id: 1,
            text: '2-Steps:',
          },
          {
            id: 2,
            text: 'Challenge: 10% profit target',
          },
          {
            id: 3,
            text: 'Evaluation: 5% profit target',
          },
        ],
      },
      {
        id: 2,
        title: 'Profit Split',
        point1: 'Up to 80%',
        point2: 'Up to 80%',
      },
      {
        id: 3,
        title: 'Talent Bonus',
        point1: 'Up to 10%',
        point2: 'No',
      },
      {
        id: 4,
        title: 'Time limit',
        point1: 'No time limit',
        point2: [
          {
            id: 1,
            text: 'Challenge: 1 month',
          },
          {
            id: 2,
            text: 'Verification: 2 month',
          },
        ],
      },
      {
        id: 5,
        title: 'Free 2nd Chance Account',
        point1: 'Yes',
        point2: 'No',
      },
      {
        id: 6,
        title: 'Brokers',
        point1: 'ICMarkets, FXTM, Deriv',
        point2: 'ICMarkets, FXTM',
      },
      {
        id: 7,
        title: 'Payout Frequency',
        point1: 'Weekly or Monthly',
        point2: 'Bi-Weekly or Monthly',
      },
      {
        id: 8,
        title: 'Daily Drawn',
        point1: '5%',
        point2: '5%',
      },
      {
        id: 9,
        title: 'Account Drawn',
        point1: '10%',
        point2: '10%',
      },
      {
        id: 10,
        title: 'Minimum Trading days',
        point1: [
          {
            id: 1,
            text: '10 days',
          },
          {
            id: 2,
            text: '- Minimum of 2 days per week',
          },
        ],
        point2: [
          {
            id: 1,
            text: '6 days in each phase',
          },
          {
            id: 2,
            text: '- Minimum of 2 days per week',
          },
        ],
      },
    ],
    buttons: [
      {
        id: 1,
        title: '',
        button1: 'Select Classic',
        button2: 'Select Challenge',
      },
    ],
  },
]

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

function Collapsible({ id, title, text, step, desc, points }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <tr key={id}>
        <td className="border-r-[1px] border-gray-200 px-8 py-4 text-sm font-medium text-gray-800">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md bg-slate-200 px-6 py-2 duration-200 hover:bg-slate-300"
          >
            {title}
          </button>
        </td>
        {typeof text !== 'object' ? (
          <td
            colSpan="3"
            className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-800"
          >
            {text}
          </td>
        ) : !step ? (
          text.map(({ id, text }) => (
            <td
              key={id}
              className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800"
            >
              {text}
            </td>
          ))
        ) : (
          <td
            key={id}
            colSpan="3"
            className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800"
          >
            <p className="font-bold">{step}</p>
            {text.map(({ id, text }) => (
              <p key={id}>{text}</p>
            ))}
          </td>
        )}
      </tr>
      <tr key={id} className={`${isOpen ? '' : 'hidden'} bg-slate-100`}>
        <td colSpan="4" className="whitespace-pre-wrap py-3 px-6">
          <div className="py-2">
            <p className="">{desc}</p>
            {points &&
              points.map(({ id, point }) => (
                <li key={id} className="py-1">
                  {point}
                </li>
              ))}
          </div>
        </td>
      </tr>
    </>
  )
}

function Plan({ plan }) {
  return (
    <motion.section
      {...Animations}
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-gray-900/5'
      )}
    >
      {plan?.map(({ name, headings, features, prices }) => (
        <div key={name} className="overflow-hidden rounded-lg border">
          <table className="block min-w-full divide-y divide-gray-200 overflow-x-auto whitespace-nowrap lg:inline-table lg:overflow-x-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-bold uppercase "
                ></th>
                {headings.map(({ id, heading }) => (
                  <th
                    key={id}
                    scope="col"
                    className="px-6 py-3 text-center font-bold uppercase "
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map(({ id, title, text, step, desc, points }) => (
                console.log(title),
                <>
                  {desc ? (
                    <>
                      <Collapsible
                        id={id}
                        title={title}
                        text={text}
                        step={step}
                        desc={desc}
                        points={points}
                      />
                    </>
                  ) : (
                    <tr key={id}>
                      <td className="border-r-[1px] border-gray-200 px-8 py-4 text-sm font-medium text-gray-800">
                        {title}
                      </td>
                      {typeof text !== 'object' ? (
                        <td
                          colSpan="3"
                          className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-800"
                        >
                          {text}
                        </td>
                      ) : !step ? (
                        text.map(({ id, text }) => (
                          <td
                            key={id}
                            className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800"
                          >
                            {text}
                          </td>
                        ))
                      ) : (
                        <td
                          key={id}
                          colSpan="3"
                          className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800"
                        >
                          <p className="font-bold">{step}</p>
                          {text.map(({ id, text }) => (
                            <p key={id}>{text}</p>
                          ))}
                        </td>
                      )}
                    </tr>
                  )}
                </>
              ))}
              <tr>
                <td></td>
                {prices.map(({ id, price }) => (
                  <td
                    key={id}
                    className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800"
                  >
                    <Link href="/register">
                      <a className="rounded-md border-[1px] border-black bg-black px-6 py-3 text-white duration-300 hover:bg-white hover:text-black">
                        Trade with {price}
                      </a>
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </motion.section>
  )
}

function Compare() {
  return (
    <motion.section
      {...Animations}
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-gray-900/5'
      )}
    >
      {compare.map(({ id, headings, features, buttons }) => (
        <div key={id} className="overflow-hidden rounded-lg border">
          <table className="block min-w-full divide-y divide-gray-200 overflow-x-auto md:inline-table md:overflow-x-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                {headings.map(({ id, heading }) => (
                  <th
                    key={id}
                    scope="col"
                    className="px-6 py-3 text-center font-bold uppercase "
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map(({ id, title, point1, point2 }) => (
                <tr key={id}>
                  <td className="border-r-[1px] border-gray-200 px-8 py-4 text-sm font-bold text-gray-800">
                    {title}
                  </td>
                  <td className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800">
                    {typeof point1 === 'object' ? (
                      point1.map((item) => <p key={item.id}>{item.text}</p>)
                    ) : (
                      <p>{point1}</p>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-800">
                    {typeof point2 === 'object' ? (
                      point2.map((item) => <p key={item.id}>{item.text}</p>)
                    ) : (
                      <p>{point2}</p>
                    )}
                  </td>
                </tr>
              ))}
              {buttons.map(({ id, title, button1, button2 }) => (
                <tr key={id}>
                  <td className="border-r-[1px] border-gray-200 px-8 py-4 text-sm font-bold text-gray-800">
                    {title}
                  </td>
                  <td className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800">
                    <Link href="/register">
                      <a className="rounded-md border-[1px] border-black bg-black px-8 py-3 text-white duration-300 hover:bg-white hover:text-black">
                        {button1}
                      </a>
                    </Link>
                  </td>
                  <td className="whitespace-nowrap border-r-[1px] border-gray-200 px-6 py-4 text-center text-sm text-gray-800">
                    <Link href="/register">
                      <a className="rounded-md border-[1px] border-black bg-black px-8 py-3 text-white duration-300 hover:bg-white hover:text-black">
                        {button2}
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </motion.section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Classic')
  const [plan, setPlan] = useState()

  useEffect(() => {
    console.log('Inside UseEffect')
    if (activePeriod !== 'Compare') {
      console.log('Value changed')
      const data = plans.filter((item) => item.name === activePeriod)
      setPlan(data)
    }
  }, [activePeriod])

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Greatness Awaits! Start Now.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Choose between the revolutionary FT9ja Classic and the Traditional
            Challenge Funding Model. Select an Account Size and start trading
            within 24 hours.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-3"
            >
              {['Classic', 'Challenge', 'Compare'].map((period) => (
                <RadioGroup.Option
                  key={period}
                  value={period}
                  className={clsx(
                    'cursor-pointer border border-gray-300 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                    period === 'Classic'
                      ? 'rounded-l-lg'
                      : period === 'Compare'
                      ? 'rounded-r-lg'
                      : ''
                  )}
                >
                  {period}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-3 overflow-hidden rounded-lg bg-[#28a745] transition-all duration-300',
                activePeriod === 'Classic'
                  ? '[clip-path:inset(0_66%_0_0)]'
                  : activePeriod === 'Challenge'
                  ? '[clip-path:inset(0_33%_0_33%)]'
                  : '[clip-path:inset(0_0_0_calc(66%-1px))]'
              )}
            >
              {['Classic', 'Challenge', 'Compare'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'Challenge' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-screen-lg items-start sm:mt-20">
          {activePeriod === 'Classic' && (
            <Plan plan={plan} activePeriod={activePeriod} />
          )}
          {activePeriod === 'Challenge' && (
            <Plan plan={plan} activePeriod={activePeriod} />
          )}
          {activePeriod === 'Compare' && <Compare />}
        </div>
      </Container>
    </section>
  )
}
