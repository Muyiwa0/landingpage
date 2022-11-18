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
          title: 'What You Need to Get Started',
          link: '/articles/what-you-need-to-get-started',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          link: '/articles/investments-you-can-make-on-robinhood',
        },
        {
          id: 3,
          title: 'Open My Account',
          link: '/articles/open-my-account',
        },
      ],
    },
    {
      id: 2,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'How You Need to Get Started',
          link: '/articles/what-you-need-to-get-started',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          link: '/articles/investments-you-can-make-on-robinhood',
        },
        {
          id: 3,
          title: 'Open My Account',
          link: '/articles/open-my-account',
        },
      ],
    },
    {
      id: 3,
      title: 'My account and login',
      links: [
        {
          id: 1,
          title: 'How to sign in to Robinhood from a new device',
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          link: '/articles/updating-your-notification-settings',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          link: '/articles/getting-familiar-with-your-username',
        },
      ],
    },
    {
      id: 4,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What You Need to Get Started',
          link: '/articles/what-you-need-to-get-started',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          link: '/articles/investments-you-can-make-on-robinhood',
        },
        {
          id: 3,
          title: 'Open My Account',
          link: '/articles/open-my-account',
        },
      ],
    },
    {
      id: 5,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'What to know in light of Russia’s attack on Ukraine',
          link: '/articles/russia-securities-sanctions',
        },
        {
          id: 2,
          title: 'Massachusetts State and Robinhood',
          link: '/articles/massachusetts-state-and-robinhood',
        },
        {
          id: 3,
          title: 'November 3 data security incident',
          link: '/articles/november-3-data-security-incident',
        },
      ],
    },
    {
      id: 6,
      title: 'My account and login',
      links: [
        {
          id: 1,
          title: 'How to sign in to Robinhood from a new device',
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          link: '/articles/updating-your-notification-settings',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          link: '/articles/getting-familiar-with-your-username',
        },
      ],
    },
    {
      id: 7,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What You Need to Get Started',
          link: '/articles/what-you-need-to-get-started',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          link: '/articles/investments-you-can-make-on-robinhood',
        },
        {
          id: 3,
          title: 'Open My Account',
          link: '/articles/open-my-account',
        },
      ],
    },
    {
      id: 8,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'What to know in light of Russia’s attack on Ukraine',
          link: '/articles/russia-securities-sanctions',
        },
        {
          id: 2,
          title: 'Massachusetts State and Robinhood',
          link: '/articles/massachusetts-state-and-robinhood',
        },
        {
          id: 3,
          title: 'November 3 data security incident',
          link: '/articles/november-3-data-security-incident',
        },
      ],
    },
    {
      id: 9,
      title: 'My account and login',
      links: [
        {
          id: 1,
          title: 'How to sign in to Robinhood from a new device',
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          link: '/articles/updating-your-notification-settings',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          link: '/articles/getting-familiar-with-your-username',
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
        <title>Support/FAQs - FT9ja</title>
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
