import Link from 'next/link'
import { Container } from '@/components/Container'
import { Disclosure, Transition, RadioGroup } from '@headlessui/react'
import { BiMinus } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { useRef, useState } from 'react'
import { ChallengeFaq } from '@/components/ChallengeFaq'
import { ClassicFaq } from '@/components/ClassicFaq'
import clsx from 'clsx'
const faqs = [
  {
    id: 1,
    question: 'How does this work',
    list: '',
    lists: [
      {
        id: 1,
        title: 'STEP 1: Sign up at FT9ja.com',
        line: '',
        litems: [
          {
            id: 1,
            li: 'We provide 3 Account Sizes for Traders to start with: $5,000 (N3,500,000), $7,000 (N7,000,000), and $25,000(N17,500,000).',
          },
          {
            id: 2,
            li: 'Pay the one-time fee, and you’ll receive the login details to the server via the MT5 platform within 24 hours of purchase',
          },
          {
            id: 3,
            li: 'This account, the ZumaRock Account, is the account you’ll begin trading with.',
          },
        ],
      },
      {
        id: 2,
        title: 'STEP 2: Start Trading',
        line: 'FT9ja Challenge',
        litems: [
          {
            id: 1,
            li: '4 weeks trading period',
          },
          {
            id: 2,
            li: '10% profit target',
          },
        ],
      },
      {
        id: 3,
        title: '',
        line: 'Verification',
        litems: [
          {
            id: 1,
            li: '8 weeks trading period',
          },
          {
            id: 2,
            li: '5% profit target',
          },
        ],
      },
      {
        id: 4,
        title: 'STEP 3: Get Paid Bi-Weekly or Monthly',
        line: 'You choose your medium of getting paid: bank account or Paypal. You choose between Bi-weekly or monthly payouts. It is as simple as this getting paid with FT9ja',
        litems: [],
      },
    ],
    answer: '',
  },
  {
    id: 2,
    question: 'What are the rules?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title: 'Maximum Daily Drawdown limit: 5%.',
      },
      {
        id: 2,
        title: 'Account DrawDown Limit: 10%.',
      },
      {
        id: 3,
        title: 'Minimum Trading Days: 2 days per week and 6 days in each phase',
      },
    ],
  },
  {
    id: 4,
    question: 'What is the Aso Account?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title:
          'When you excel in the Challenge and Verification stage, you become our AsoRock Trader. Aso Account Traders are FT9ja Traders! They are Traders that have proven to be in the league of the best Traders in Nigeria. Aso Account Traders get paid 80% of the profit.',
      },
      {
        id: 2,
        title:
          'Account can be compounded to 2X of the original Account Size. For example, a $25,000 account can be compounded up to $50,000.',
      },
    ],
  },
  {
    id: 5,
    question: 'Are you a Broker?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title: `No, we are not.`,
      },
      {
        id: 2,
        title: `We have accounts with third-party Brokers which we give our Traders access to.`,
      },
    ],
  },
  {
    id: 6,
    question: 'Is this an investment offer?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title: `No. You are not “investing” any money into our company or into any trading account.`,
      },
      {
        id: 2,
        title: `At FT9ja, we invest our funds into talented, profitable, and reliable Traders. We discover our AsoRock Traders by
        onboarding them through ZumaRock Account which is a simulated/demo trading account. Traders get paid even during
        the onboarding period!`,
      },
    ],
  },
  {
    id: 7,
    list: '',
    question: 'Will I be responsible for losses?',
    lists: '',
    answer: 'No! We cover the losses.',
  },
  {
    id: 8,
    list: '',
    question: 'Which Brokers do you offer?',
    lists: '',
    answer: 'You can choose between IC Markets and FXTM',
  },
]

export function Faqs() {
  const buttonRefs = useRef([])
  const openedRef = useRef(null)
  let [activePeriod, setActivePeriod] = useState('Classic')
  let [prevPeriod, setPrevPeriod] = useState('Classic')
  const clickRecent = (index) => {
    const clickedButton = buttonRefs.current[index]
    if (clickedButton === openedRef.current) {
      openedRef.current = null
      return
    }
    if (Boolean(openedRef.current?.getAttribute('data-value'))) {
      openedRef.current?.click()
    }
    openedRef.current = clickedButton
  }

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto pb-10 text-center lg:max-w-screen-md">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else,{' '}
            <Link
              target={'_blank'}
              href="/contact"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <RadioGroup
                value={activePeriod}
                onClick={() => setPrevPeriod(activePeriod)}
                onChange={setActivePeriod}
                className="grid grid-cols-2"
              >
                {['Classic', 'Challenge'].map((period) => (
                  <RadioGroup.Option
                    key={period}
                    value={period}
                    className={clsx(
                      'cursor-pointer border border-gray-300 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-center text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                      period === 'Classic'
                        ? 'rounded-l-lg'
                        : period === 'Challenge'
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
                  'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-[#28a745] transition-all duration-300',
                  activePeriod === 'Classic'
                    ? '[clip-path:inset(0_50%_0_0)]'
                    : '[clip-path:inset(0_0_0_calc(50%-1px))]'
                )}
              >
                {['Classic', 'Challenge'].map((period) => (
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
        </div>
      </Container>
      {activePeriod === 'Classic' && <ClassicFaq />}
      {activePeriod === 'Challenge' && <ChallengeFaq />}
    </section>
  )
}
