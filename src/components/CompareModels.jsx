import React from 'react'
import clsx from 'clsx'
// import { motion } from 'framer-motion'
import Link from 'next/link'

const CompareModels = () => {

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

  // const Animations = {
  //   initial: 'initial',
  //   animate: 'animate',
  //   variants: {
  //     initial: {
  //       opacity: 0,
  //     },
  //     animate: {
  //       opacity: 1,
  //       transition: { duration: 0.8 },
  //     },
  //   },
  // }

  return (
    <div className='sm:py-15 px-5 bg-gray-900 py-20'>
      <section
        className={clsx(
          'flex flex-col overflow-hidden mx-auto max-w-screen-lg'
        )}
      >
        {compare.map(({ id, headings, features, buttons }) => (
          <div key={id} className="overflow-hidden rounded-lg border border-gray-700">
            <table className="block min-w-full divide-y divide-gray-700 overflow-x-auto md:inline-table md:overflow-x-hidden">
              <thead className="bg-gray-800 text-gray-300">
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
              <tbody className="divide-y divide-gray-700">
                {features.map(({ id, title, point1, point2 }) => (
                  <tr key={id}>
                    <td className="border-r-[1px] border-gray-700 px-8 py-4 text-sm font-bold text-gray-300">
                      {title}
                    </td>
                    <td className="whitespace-nowrap border-r-[1px] border-gray-700 px-6 py-4 text-center text-sm text-gray-300">
                      {typeof point1 === 'object' ? (
                        point1.map((item) => <p key={item.id}>{item.text}</p>)
                      ) : (
                        <p>{point1}</p>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-300">
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
                    <td className="border-r-[1px] border-gray-700 px-8 py-4 text-sm font-bold text-gray-300">
                      {title}
                    </td>
                    <td className="whitespace-nowrap border-r-[1px] border-gray-700 px-6 py-4 text-center text-sm text-gray-300">
                      <Link href="/register">
                        <a className="rounded-md border-[1px] border-black bg-black px-8 py-3 text-gray-300 duration-300 hover:bg-white hover:text-black">
                          {button1}
                        </a>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap border-r-[1px] border-gray-700 px-6 py-4 text-center text-sm text-gray-300">
                      <Link href="/register">
                        <a className="rounded-md border-[1px] border-black bg-black px-8 py-3 text-gray-300 duration-300 hover:bg-white hover:text-black">
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
      </section>
    </div>
  )
}

export default CompareModels
