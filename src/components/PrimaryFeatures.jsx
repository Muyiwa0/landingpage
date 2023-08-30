import { useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { useDebouncedCallback } from 'use-debounce'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Lottie from 'react-lottie'
import axios from "axios"
const features = [
  {
    name: 'Sign up',
    description: `Signing up takes less than a minute. Choose between FT9ja Classic and the Traditional Challenge Funding Model, Select an Account Size and start trading within 24 hours`,
    icon: DeviceUserIcon,
    // screen: InviteScreen,
  },
  {
    name: 'Start Trading',
    description: `Ft9ja Traders get paid up to 80% Profit Split. What's more. FT9ja Classic Traders get paid up to 10% even during the evaluation (Talent Bonus). Always remember to trade within our guidelines    `,
    icon: DeviceNotificationIcon,
    // screen: StocksScreen,
  },
  {
    name: 'Start Earning',
    description: `You choose your medium of getting paid: bank account or paypal. You choose between weekly or monthly payouts. It is as simple as this getting paid with FT9ja!`,
    icon: DeviceTouchIcon,
    // screen: InvestScreen,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop({ data }) {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  const [lottieData, setLottieData] = useState("");

  useEffect(() => {
    axios
      .get('https://res.cloudinary.com/ddlupbcws/raw/upload/v1692021565/signup_u2bxsz.json')
      .then((res) => {
        // console.log(res)
        setLottieData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, []);


  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)

      let fileUrl = 'https://res.cloudinary.com/ddlupbcws/raw/upload/v1692021565/signup_u2bxsz.json';

      if (selectedIndex === 1) {
        fileUrl = 'https://res.cloudinary.com/ddlupbcws/raw/upload/v1692045966/starttrading_g3ojda.json';
      }
      else if (selectedIndex === 2) {
        fileUrl = 'https://res.cloudinary.com/ddlupbcws/raw/upload/v1692021603/startEarning_zedz3k.json';
      }

      axios
        .get(fileUrl)
        .then((res) => {
          setLottieData(res.data)
        });
    },
    100,
    { leading: true }
  )

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <div
                // layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800 rounded-[16px]"
              // initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6 ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#28a745" className="animate-spin-slower" />
        </div>
        <Lottie options={defaultOptions} width={400} />
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  const [lottieData, setLottieData] = useState("");

  useEffect(() => {
    axios
      .get('https://res.cloudinary.com/ddlupbcws/raw/upload/v1692021565/signup_u2bxsz.json')
      .then((res) => {
        setLottieData(res.data)
      })
  }, []);

  useEffect(() => {
    let fileUrl = 'https://res.cloudinary.com/ddlupbcws/raw/upload/v1692021565/signup_u2bxsz.json';

    if (activeIndex === 1) {
      fileUrl = 'https://res.cloudinary.com/ddlupbcws/raw/upload/v1692045966/starttrading_g3ojda.json';
    }
    else if (activeIndex === 2) {
      fileUrl = 'https://res.cloudinary.com/ddlupbcws/raw/upload/v1692021603/startEarning_zedz3k.json';
    }

    axios
      .get(fileUrl)
      .then((res) => {
        setLottieData(res.data)
      });
  }, [activeIndex]);

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className=" w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative h-[910px] transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              {/* <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame> */}
              <div className="relative mx-auto w-full max-w-[366px]">
              <Lottie options={defaultOptions} width={295} />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures({ data }) {

  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="sm:py-15 bg-gray-900 py-20"
    >
      <div>
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              How It Works?
            </h2>
            <p className="mt-2 text-lg text-gray-400">
              We believe you have what it takes to be successful. Sign up for a
              funding model, choose an account size, and start trading to earn
              as soon as 10 days.
            </p>
          </div>
        </Container>
        <div className="mt-16 md:hidden">
          <FeaturesMobile />
        </div>
        <Container className="hidden md:mt-20 md:block">
          <FeaturesDesktop props={data} />
        </Container>
      </div>
    </section>
  )
}
