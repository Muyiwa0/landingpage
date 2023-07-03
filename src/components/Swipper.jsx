import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '../images/sam.png'
import img3 from '../images/sam.png'
import pattern from '@/images/pattern.png'
import { IconContext } from 'react-icons'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import Image from 'next/image'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function App() {
  const [swiperRef, setSwiperRef] = useState(0)

  const swiperlist = [
    {
      id: 0,
      img: <Image src={img1} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'Starting out with a $25,000 Zuma Account',
      // subtitle: 'A subtitle',
    },
    {
      id: 1,
      img: <Image src={img3} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'Starting out with a $25,000 Zuma Account',
      // subtitle: 'A subtitle',
    },
    {
      id: 2,
      img: <Image src={img1} className="pb-5" alt="alsdkjf" />,
      name: 'Meet Sam',
      title: 'Starting out with a $25,000 Zuma Account',
      // subtitle: 'A subtitle',
    },
  ]

  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  return (
    <>
      <div className="relative flex h-[650px] w-full flex-col items-center justify-start bg-gray-900 sm:h-[600px]">
        <Image
          src={pattern}
          width={1700}
          height={5700}
          priority
          alt=""
          className="opacity-25"
        />
        <div className="absolute mx-auto w-[100%] max-w-screen-md py-10 px-5 sm:px-10 md:py-20">
          <h1 className="pb-5 text-center text-3xl font-bold text-white sm:text-left">
            Meet Sam
          </h1>
          <div className="flex flex-col items-center px-5 sm:flex-row sm:items-start sm:px-10">
            <div className="h-40 w-40">{swiperlist[swiperRef].img}</div>
            <span className="flex flex-col pl-0 pb-10 sm:pl-10">
              <p className="pt-5 text-center text-2xl font-bold text-white sm:text-left">
                {swiperlist[swiperRef].name}
              </p>
              <p className="py-5 text-center text-white sm:text-left">
                {swiperlist[swiperRef].title}
              </p>
              <p className="text-center text-white sm:text-left">
                {swiperlist[swiperRef].subtitle}
              </p>
            </span>
          </div>
          <div style={{ marginTop: '4%' }} className="relative px-10">
            <Swiper
              onSlideChange={(swiper) => setSwiperRef(swiper.activeIndex)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              centeredSlides={true}
              spaceBetween={30}
              navigation={{ prevEl, nextEl }}
              // navigation={true}
            >
              <SwiperSlide className="text-justify text-white">
                Sam makes 25% profit within the first month =&gt; N4,375,000
                (25% of N17,500,000) Sam is on a monthly payout plan: Talent
                Bonus of N437,500 (10% of N4,375,000) is paid to Sam
              </SwiperSlide>
              <SwiperSlide className="text-justify text-white">
                Sam has now grown the Zuma Account to 25% within 1 month. As
                such, he now qualifies for the Aso Account at 80% Profit Split
                level. He makes 10% profit at the end of the first month trading
                the Aso Account=&gt; N1,750,000 (10% of N17,500,000).
              </SwiperSlide>
              <SwiperSlide className="text-justify text-white">
                Profit Split N1,400,000 (80% of N1,750,000) is paid to Sam. With
                a monthly income of around 1.4 million Naira (if consistent),
                Sam is now in the league of professional Traders in Nigeria.
              </SwiperSlide>
            </Swiper>
            <div
              ref={(node) => setPrevEl(node)}
              className="absolute bottom-[40%] left-0 -ml-1.5 h-10 w-10 cursor-pointer rounded-full bg-white duration-300 hover:opacity-80 md:-ml-6"
            >
              <span className="flex justify-center pt-[7px]">
                <GrFormPreviousLink size="1.5rem" />
              </span>
            </div>
            <div
              ref={(node) => setNextEl(node)}
              className="absolute bottom-[40%] right-0 -mr-1.5 h-10 w-10 cursor-pointer rounded-full bg-white duration-300 hover:opacity-80 md:-mr-6"
            >
              <span className="flex justify-center pt-[7px]">
                <GrFormNextLink size="1.5rem" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
