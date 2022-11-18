import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Faq = () => {
  const [link, setLink] = useState('')
  const [answer, setAnswer] = useState()

  const router = useRouter()

  const supportLinks = [
    {
      id: 1,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What You Need to Get Started',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/what-you-need-to-get-started',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/investments-you-can-make-on-robinhood',
        },
        {
          id: 3,
          title: 'Open My Account',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/what-you-need-to-get-started/',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/investments-you-can-make-on-robinhood/',
        },
        {
          id: 3,
          title: 'Open My Account',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/open-my-account/',
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
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/updating-your-notification-settings',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/what-you-need-to-get-started',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/investments-you-can-make-on-robinhood',
        },
        {
          id: 3,
          title: 'Open My Account',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          title: 'What to know in light of Russias attack on Ukraine',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/russia-securities-sanctions',
        },
        {
          id: 2,
          title: 'Massachusetts State and Robinhood',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/massachusetts-state-and-robinhood',
        },
        {
          id: 3,
          title: 'November 3 data security incident',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/updating-your-notification-settings',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/what-you-need-to-get-started',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/investments-you-can-make-on-robinhood',
        },
        {
          id: 3,
          title: 'Open My Account',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          title: 'What to know in light of Russias attack on Ukraine',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/russia-securities-sanctions',
        },
        {
          id: 2,
          title: 'Massachusetts State and Robinhood',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/massachusetts-state-and-robinhood',
        },
        {
          id: 3,
          title: 'November 3 data security incident',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/updating-your-notification-settings',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          link: '/articles/getting-familiar-with-your-username',
        },
      ],
    },
  ]

  useEffect(() => {
    if (link) {
      const linkData = ''
      if (router.asPath != '/articles/[slug]') {
        localStorage.setItem('linkData', JSON.stringify(link))
        linkData = localStorage.getItem('linkData')
      } else {
        linkData = localStorage.getItem('linkData')
      }
      const data = supportLinks.map((item) =>
        item.links.filter((i) => i.link === link)
      )
      data.map((item) => item.map((i) => setAnswer(i)))
    }
  }, [link])

  useEffect(() => {
    const linkData = ''

    if (router.asPath != '/articles/[slug]') {
      localStorage.setItem('linkData', JSON.stringify(router.asPath))
      linkData = localStorage.getItem('linkData')
    } else {
      linkData = localStorage.getItem('linkData')
    }

    const data = supportLinks.map((item) =>
      item.links.filter((i) => i.link === linkData.replaceAll('"', ''))
    )
    data.map((item) => item.map((i) => setAnswer(i)))
  }, [])

  return (
    <div>
      <Header />
      <div className="w-full">
        <div className="mx-auto max-w-screen-xl md:px-10">
          <div className="flex py-10">
            <div className="hidden w-1/3 px-5 md:block">
              {supportLinks.map(({ id, title, links }) => (
                <div key={id} className="py-4">
                  <p className="py-2 font-bold">{title}</p>
                  {links.map(({ id, title, link }) => (
                    <div
                      key={id}
                      className="py-2 pl-4"
                      onClick={() => setLink(link)}
                    >
                      <Link href={`${link}`}>
                        <a>{title}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-full px-6 sm:px-10 md:w-2/3">
              {answer && (
                <div>
                  <p className="pt-3 pb-10 text-2xl font-bold md:text-4xl">
                    {answer.title}
                  </p>
                  <p>{answer.answer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faq
