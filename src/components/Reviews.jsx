import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'The best prop so far, FT9JA',
    body: `Ft9ja our home based Prop is really a dream come true. The amazing offers they provide for Nigerian
    traders especially synthetic indices traders is amazingly wow. Affordable purchase fees, refund
    available, 2nd chance account should in case you lose your first account. Getting paid for passing
    the evaluation which is only just one phase. I mean Ft9ja is really great and I know they would attain
    more heights in the coming years. Cheers to ft9ja and Nigerian traders. This is a big blessing to us
    here. Ft9ja all the way`,
    author: 'Lawrence',
    rating: 5,
  },
  {
    title: 'Got introduced to Mr Bassey as my',
    body: `Got introduced to Mr Bassey as my account manager. I must say he works really hard, a manager who took time out to send voicenotes just to make sure I understood the rules in details. My advice to traders read the rules if you do not understand ask Mr bassey, trust me he will put you through.`,
    author: 'Emma',
    rating: 5,
  },
  {
    title: 'FT9ja has exceeded my expectations.',
    body: `I have been trading with FT9ja for about 3 months now and So far the whole experience has been very positive and FT9ja has exceeded my expectations. I love their mode of operation because they provide a conducive environment for us their traders via an efficient support system.

    Their talent bonus and Profit split withdrawals are well processed and very promptly.

    Yes! I’ll highly recommend FT9ja to all traders who are serious about their trading but need a funded account.`,
    author: 'Okocha',
    rating: 5,
  },
  {
    title: 'FT9ja is the best prop firm I have ever used',
    body: `FT9ja is by far the best prop firm I have ever used. Their rules are so clear and easy. I would
    recommend FT9ja to as many Traders as I can any day any time! Honestly, the only time anyone
    would have issues with FT9ja is if you don’t read the rules.
    More Traders really need to know about FT9ja. I mean, which other prop firm gives you a second
    chance account when you violate a rule? no time limit to pass the evaluation? or even the ability to
    trade volatility indices? None! If you are an excellent Trader, trading with Ft9ja should be a walk in
    the park`,
    author: 'Shalom Hassan',
    rating: 5,
  },
  {
    title: `It’s a 5 star for me because they pay`,
    body: `It’s a 5 star for me because they pay you up to 80% weekly!!!`,
    author: 'Samuel Edu',
    rating: 5,
  },
  {
    title: 'Honest and Dedicated Account Manager',
    body: `I trade with ft9ja. Today I needed help from Bassey, my Account Manager, becos I had a few
    questions any my trading performance. Bassey answered my chat request. his responses were quick
    and clear and he took his time. I can tell he is a really hard worker guy and I wish every other prop
    firm have a dedicated Account Manager like FT9ja!`,
    author: 'Shade',
    rating: 5,
  },
  {
    title: 'FTMO alternative for Nigerian online Traders.',
    body: `There isn’t a brand like this in Nigeria presently that I know of. I know a couple of European prop firm
    but Ft9ja’s service is innovative, flexible, and more suitable for Naija Traders. Trust me, they are
    going blow soon. The only issue is their customer service; they don’t respond on time on weekends.
    Enjoying trading for them currently, prompt payments…would recommend them anytime and any
    day`,
    author: 'Promise',
    rating: 5,
  },
  {
    title: 'Consistent Guys',
    body: `Me and my guys thought the prop firm model can’t work in Nigeria. But FT9ja has proved us wrong
    by being consistent and transparent. A team of bold and hardworking guys.Trading naija will never
    be the same again!`,
    author: 'Nduka',
    rating: 5,
  },
  {
    title:
      'Trading with discipline. I believe trading with FT9ja has made me...',
    body: `I believe that trading with FT9ja has helped me to become more disciplined and confident in my
    trading. Because trading necessitates coaching and support, I respect the advice given at each stage.`,
    author: 'Adumu Usman',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-[#f77e27]' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Feedback from our traders
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of Traders love trading with FT9ja Prop Firm. Here&apos;s
          what some of them say.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
