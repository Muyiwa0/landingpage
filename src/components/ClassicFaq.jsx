import Link from 'next/link'
import { Container } from '@/components/Container'
import { Disclosure, Transition } from '@headlessui/react'
import { BiMinus } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { useRef } from 'react'

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
            li: 'We provide 3 Account Sizes for Traders to start with: $3,000 (N2,100,000), $5,000 (N3,500,000), and $25,000(N17,500,000).',
          },
          {
            id: 2,
            li: 'Pay the one-time fee, and you’ll receive the login details to the server via the MT4 platform within 24 hours of purchase',
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
        title: 'Minimum Trading Days: 2 days a week and 10 days a month.',
      },
    ],
  },
  {
    id: 3,
    question: 'What is a Zuma Account',
    lists: '',
    answer:
      'Every Trader starts with a ZumaRock Account. ZumaRock Accounts are the gateway to AsoRock Accounts. Although ZumaRock Accounts are demo accounts, you still get paid 5% weekly or 10% monthly on the profit you make! That"s the Talent Bonus.',
  },
  {
    id: 4,
    question: 'What is an Aso Account?',
    lists: '',
    answer: '',
    list: [
      {
        id: 1,
        title:
          'Aso Accounts are live accounts successful Zuma Account Traders are eligible for by positively growing their accounts to 25% over time (no time limits). Aso Account Traders are FT9ja Traders! They are Traders that have proven to be in the league of the best Traders in Nigeria. Aso Account Traders get paid up to 80% of the profit.',
      },
      {
        id: 2,
        title:
          'Account can be compounded to 2X of the original Account Size. For example, a $25,000 account can be compounded to up to $50,000.',
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
        title: `At FT9ja, we invest our funds into talented, profitable, and reliable Traders. We discover our AsoRock Traders by onboarding them through ZumaRock Account which is a simulated/demo trading account. Traders get paid even during the onboarding period!`,
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
    answer: 'You can choose between IC Markets, FXTM, and Deriv.',
  },
]

export function ClassicFaq() {
  const buttonRefs = useRef([])
  const openedRef = useRef(null)

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
    <div className="mx-auto grid grid-cols-1 gap-5 px-4 sm:px-6 lg:max-w-screen-md lg:px-8">
      {faqs.map(({ id, question, list, answer, lists }, idx) => (
        <Disclosure key={id}>
          {({ open }) => (
            <>
              <div key={id}>
                <Disclosure.Button
                  as="div"
                  className="text-md mb-3 w-full cursor-pointer rounded-lg text-left font-bold"
                >
                  <button
                    className="flex w-full justify-between"
                    data-value={open}
                    ref={(ref) => {
                      buttonRefs.current[idx] = ref
                    }}
                    onClick={() => clickRecent(idx)}
                  >
                    {question}
                    {open ? (
                      <span className="rounded-full border-[1px] border-slate-300 p-1.5">
                        <BiMinus />
                      </span>
                    ) : (
                      <span className="rounded-full border-[1px] border-slate-300 p-1.5">
                        <BsPlusLg />
                      </span>
                    )}
                  </button>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {open && (
                    <Disclosure.Panel
                      static
                      className="my-2 flex w-full flex-col justify-between rounded-lg text-left"
                    >
                      {answer && answer}
                      {list && (
                        <ul className="ml-3 list-item">
                          {list.map(({ id, title }) => (
                            <li className="ml-2 list-disc py-1" key={id}>
                              {title}
                            </li>
                          ))}
                        </ul>
                      )}
                      {lists &&
                        lists.map(({ id, title, line, litems }) => (
                          <div key={id}>
                            <h1 className="py-4 text-[#28a745]">{title}</h1>
                            {line && <p className="py-2">{line}</p>}
                            {litems.map(({ id, li, more }) => (
                              <>
                                <li key={id} className="py-2">
                                  {li}
                                </li>
                                {more &&
                                  more.map(({ id, text }) => (
                                    <p key={id} className="py-1 pl-6">
                                      {text}
                                    </p>
                                  ))}
                              </>
                            ))}
                          </div>
                        ))}
                    </Disclosure.Panel>
                  )}
                </Transition>
              </div>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
