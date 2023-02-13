import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'

const Support = () => {
  const supportLinks = [
    {
      id: 1,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What is FT9ja?',
          link: '/articles/what-is-ft9ja',
        },
        {
          id: 2,
          title: 'Why FT9ja?  ',
          link: '/articles/why-ft9ja',
        },
        {
          id: 3,
          title: 'How do I register?',
          link: '/articles/how-do-i-register',
        },
        {
          id: 4,
          title: 'How do I pay the one-time fee?',
          link: '/articles/how-do-i-pay',
        },
        {
          id: 5,
          title: 'What happens after purchasing an account size?',
          link: '/articles/what-happens-after-purchasing',
        },
      ],
    },
    {
      id: 2,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'Are you a Broker?',
          link: '/articles/are-you-a-broker',
        },
        {
          id: 2,
          title: 'Is this an investment offer?',
          link: '/articles/investments',
        },
        {
          id: 3,
          title: 'Will I be responsible for losses?',

          link: '/articles/will-i-be-responsible-for-losses/',
        },
        {
          id: 4,
          title: 'Which Brokers do you offer?',
          link: '/articles/which-brokers-do-you-offer',
        },
        {
          id: 5,
          title: 'What is the Zuma Account?          ',
          link: '/articles/what-is-the-zuma-account',
        },
        {
          id: 6,
          title: 'What is the Aso Account?',
          link: '/articles/what-is-the-aso-account',
        },
        {
          id: 7,
          title: 'What is the Challenge Account?',
          link: '/articles/what-is-the-challenge-account',
        },
        {
          id: 8,
          title: 'What is the Verification Account?',
          link: '/articles/what-is-the-verification-account',
        },
        {
          id: 9,
          title: 'What is Talent Bonus?',
          link: '/articles/what-is-talent-bonus',
        },
        {
          id: 10,
          title: 'Free 2nd Chance Account. How do I get it?',
          link: '/articles/free-2nd-chance-account',
        },
        {
          id: 11,
          title: 'Can I request a second chance account Aso account?          ',
          link: '/articles/can-i-request-a-second-chance-account-aso-account',
        },
        {
          id: 12,
          title: 'Does the consistency rule still apply?          ',
          link: '/articles/does-the-consistency-rule-still-apply',
        },
        {
          id: 13,
          title: 'Can I get my payout any day of the week?          ',
          link: '/articles/can-i-get-my-payout-any-day-of-the-week',
        },
        {
          id: 14,
          title:
            'How long does it take for me to get my Aso account login details after passing the Zuma account and Challenge/verification account ?          ',
          link: '/articles/how-long-does-it-take-for-me-to-get-my-aso-account-login-details',
        },
        {
          id: 15,
          title:
            'Can I receive my talent bonus if I haven’t met the 25% target required to pass the Zuma account?          ',
          link: '/articles/can-i-receive-my-talent-bonus-if-i-havent-met-the-25-target-required-to-pass-the-zuma-account',
        },
        {
          id: 16,
          title:
            'Can I trade volatility indices, currency pairs and crypto on one account? Or do I have to choose one of them?          ',
          link: '/articles/can-i-trade-volatility-indices-currency-pairs-and-crypto-on-one-account-or-do-i-have-to-choose-one-of-them',
        },
        {
          id: 17,
          title: 'Does FT9ja offer direct funding?          ',
          link: '/articles/does-ft9ja-offer-direct-funding',
        },
        {
          id: 18,
          title:
            'Has my account been violated if I don’t meet the requirement of the minimum trading rule?          ',
          link: '/articles/has-my-account-been-violated',
        },
        {
          id: 19,
          title: 'What are the trading rules at FT9ja?          ',
          link: '/articles/what-are-the-trading-rules-at-ft9ja',
        },
        {
          id: 20,
          title:
            'Do I need to reach a certain percentage in profit before receiving my payout on the Aso account?         ',
          link: '/articles/do-i-need-to-reach-a-certain-percentage',
        },
        {
          id: 21,
          title:
            'Do I have to pass another evaluation stage after the Zuma account stage?            ',
          link: '/articles/do-i-have-to-pass-another-evaluation',
        },
        {
          id: 22,
          title:
            'Where can I interact with other traders on your platform?          ',
          link: '/articles/where-can-i-interact-with-other-traders',
        },
      ],
    },
    {
      id: 3,
      title: 'How it works',
      links: [
        {
          id: 1,
          title: 'How many account sizes do you offer',
          link: '/articles/how-many-account-sizes-do-you-offer',
        },
        {
          id: 2,
          title: 'Can I merge my accounts?',
          link: '/articles/can-i-merge-my-accounts',
        },
        {
          id: 3,
          title:
            'How long does it take for me to get my account login details?',
          link: '/articles/how-long-does-it-take-for-me-to-get-my-account-login-details',
        },
        {
          id: 10,
          title: 'How often do I get paid?',
          link: '/articles/how-often-do-i-get-paid',
        },
        {
          id: 4,
          title: 'What are my payment options?',
          link: '/articles/what-are-my-payment-options',
        },
        {
          id: 5,
          title: 'Are there any recurring monthly fees?',
          link: '/articles/are-there-any-recurring-monthly-fees',
        },
        {
          id: 6,
          title: 'What percentage of my Zuma account profits will I be paid?',
          link: '/articles/what-percentage-of-my-zuma-account-profits',
        },
        {
          id: 7,
          title: 'What percentage of my Aso account will I get paid?',
          link: '/articles/what-percentage-of-my-aso-account-will-i-get-paid',
        },
        {
          id: 8,
          title:
            'What percentage of my funded challenge account will I get paid?',
          link: '/articles/what-percentage-of-my-funded-challenge-account-will-i-get-paid',
        },
        {
          id: 9,
          title: 'What’s the leverage on the accounts?',
          link: '/articles/whats-the-leverage-on-the-accounts',
        },
        {
          id: 11,
          title: 'Is there a scaling plan?',
          link: '/articles/is-there-a-scaling-plan',
        },
        {
          id: 12,
          title: 'How soon can I start earning?          ',
          link: '/articles/how-soon-can-i-start-earning',
        },
        {
          id: 13,
          title: 'How can I visit your office?',
          link: '/articles/how-can-i-visit-your-office',
        },
        {
          id: 14,
          title: 'Are there any lot size rules?',
          link: '/articles/are-there-any-lot-size-rules',
        },
      ],
    },
    {
      id: 4,
      title: 'Rules',
      links: [
        {
          id: 1,
          title: 'How many days do I have to trade in a week?',
          link: '/articles/how-many-days-do-i-have-to-trade-in-a-week',
        },
        {
          id: 2,
          title: 'What’s the maximum drawdown (loss) allowed?          ',
          link: '/articles/whats-the-maximum-drawdown-loss-allowed',
        },
        {
          id: 3,
          title: 'Are signals or Expert Advisors (EA or Robots) Allowed?',
          link: '/articles/are-signals-or-expert-advisors-ea-or-robots-allowed',
        },
        {
          id: 4,
          title: 'Am I free to use my own unique trading style?',
          link: '/articles/am-i-free-to-use-my-own-unique-trading-style',
        },
        {
          id: 5,
          title: 'Can I change my trading account login details?',
          link: '/articles/can-i-change-my-trading-account-login-details',
        },
      ],
    },
    // {
    //   id: 5,
    //   title: 'Rules - FT9ja Challenge',
    //   links: [
    //     {
    //       id: 1,
    //       title: 'What to know in light of Russia’s attack on Ukraine',
    //       link: '/articles/russia-securities-sanctions',
    //     },
    //     {
    //       id: 2,
    //       title: 'Massachusetts State and Robinhood',
    //       link: '/articles/massachusetts-state-and-robinhood',
    //     },
    //     {
    //       id: 3,
    //       title: 'November 3 data security incident',
    //       link: '/articles/november-3-data-security-incident',
    //     },
    //   ],
    // },
    {
      id: 6,
      title: 'Getting Paid',
      links: [
        {
          id: 1,
          title: 'When will I be paid?',
          link: '/articles/when-will-i-be-paid',
        },
        {
          id: 2,
          title: 'How will I be paid?',
          link: '/articles/how-will-i-be-paid',
        },
        {
          id: 3,
          title: 'How much can I make?',
          link: '/articles/how-much-can-i-make',
        },
      ],
    },
    {
      id: 7,
      title: 'FT9ja Referral Program',
      links: [
        {
          id: 1,
          title: 'What is FT9ja’s Referral Program?',
          link: '/articles/what-is-ft9jas-referral-program',
        },
        {
          id: 2,
          title: 'How does it work?',
          link: '/articles/how-does-it-work',
        },
        {
          id: 3,
          title: 'What are the benefits?',
          link: '/articles/what-are-the-benefits',
        },
        {
          id: 4,
          title: 'How do I get started?',
          link: '/articles/how-do-i-get-started',
        },
      ],
    },
    {
      id: 8,
      title: 'FT9ja Hero',
      links: [
        {
          id: 1,
          title: 'What is FT9ja Hero?          ',
          link: '/articles/what-is-ft9ja-hero',
        },
        {
          id: 2,
          title: 'How does it work?',
          link: '/articles/how-does-it-work1',
        },
        {
          id: 3,
          title: 'What are the benefits?',
          link: '/articles/nwhat-are-the-benefits',
        },
        {
          id: 4,
          title: 'How do I get started?',
          link: '/articles/how-do-i-get-started',
        },
      ],
    },
    {
      id: 9,
      title: 'Further Questions?',
      links: [
        {
          id: 1,
          title: 'I need more clarification. How can I contact you?',
          link: '/articles/i-need-more-clarification-how-can-i-contact-you',
        },
        {
          id: 2,
          title:
            'I want to make FT9ja better. How do I make a suggestion or complaint??',
          link: '/articles/i-want-to-make-ft9ja-better-how-do-i-make-a-suggestion-or-complaint',
        },
        {
          id: 3,
          title: 'I want to partner with you. How should I contact you?',
          link: '/articles/i-want-to-partner-with-you-how-should-i-contact-you',
        },
      ],
    },
  ]

  const [search, setSearch] = useState('')
  const [noResult, setNoResult] = useState(false)
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setNoResult(false)
    if (search) {
      const data = supportLinks.map((item) =>
        item.links.filter((child) =>
          child.title.toLowerCase().includes(search.toLowerCase())
        )
      )
      setResult(data)
    }
  }, [search])

  useEffect(() => {
    if (search) {
      if (result) {
        setNoResult(false)
        const i = 0
        result.map((item) => (i += item.length))
        if (i === 0) setNoResult(true)
      }
    } else {
      setNoResult(false)
    }
  }, [result])

  const handleClose = () => {
    setResult('')
    setSearch('')
    setNoResult(false)
  }

  return (
    <div>
      <Head>
        <title>FT9ja - Support/FAQs</title>
        <meta
          name="description"
          content="We are Nigeria's 1st next-generational proprietary trading firm. Our aim is to scout for talented but undercapitalized Financial-asset Traders in Nigeria (FT9ja) and empower them. They trade with our funds, and we split the profit. It’s really a win-win! We want to see retail Traders succeed."
        />
      </Head>
      <Header />
      <div className="w-full" onClick={handleClose}>
        <div className="mx-auto max-w-screen-lg py-5 px-5">
          <div>
            <h1 className="text-4xl font-bold">Hello!</h1>
            <h1 className="text-4xl font-bold">How can we help?</h1>
            <div className="group relative">
              <div
                className={`${
                  result && search && 'bg-slate-100 shadow-xl'
                } mt-5 flex max-w-screen-sm items-center ${
                  search && result
                    ? 'rounded-t-2xl border-b-2 border-black'
                    : 'rounded-full'
                } bg-slate-200 py-1 text-xl group-focus-within:bg-slate-50 group-focus-within:shadow-xl`}
              >
                <span className="pl-4">
                  <BiSearch className="text-red text-2xl text-[rgb(106,114,120)]" />
                </span>
                <input
                  type="text"
                  autoComplete="off"
                  name="search"
                  onChange={handleChange}
                  value={search}
                  placeholder="Search"
                  className="w-full border-none bg-transparent text-xl focus:ring-0"
                />
                {result && search && (
                  <span className="mr-4 cursor-pointer rounded-full duration-300 ease-in-out hover:bg-slate-300">
                    <GrFormClose size={24} onClick={handleClose} />
                  </span>
                )}
              </div>
              <div className="absolute w-full">
                <div className="max-h-[385px] max-w-screen-sm overflow-hidden rounded-b-2xl bg-slate-50 shadow-xl">
                  {search &&
                    result &&
                    result.map((item) =>
                      item.map((data, index) => (
                        <Link
                          href={`${data.link}`}
                          query={data.link}
                          key={index}
                          className="w-full overflow-ellipsis"
                        >
                          <p className="cursor-pointer truncate py-2 px-4 text-lg text-gray-800 duration-200 hover:bg-slate-100 ">
                            {data.title}
                          </p>
                        </Link>
                      ))
                    )}
                  {noResult && (
                    <p className="py-2 px-4 text-lg text-gray-800">
                      No results.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 px-5 text-center sm:grid-cols-3 sm:text-left">
            {supportLinks.map(({ id, title, links }) => (
              <div key={id} className="py-8">
                <h1 className="my-4 text-xl font-bold">{title}</h1>
                {links.map(({ id, title, link }) => (
                  <div key={id} className="py-2">
                    <Link href={link}>
                      <a className="duration-300 hover:underline">{title}</a>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Support
