import Image from 'next/future/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { useRouter } from 'next/router'
import logo from '../images/logo.png'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Footer() {
  const router = useRouter()
  return (
    <footer className="bg-white">
      <Container>
        <div className="lg:py-15 mx-auto grid max-w-[425px] grid-cols-1 pt-14 pb-8 md:max-w-screen-2xl md:grid-cols-3 md:gap-10 lg:gap-20">
          <div className="flex   flex-col text-gray-900">
            <Link href="/">
              <span className="h-12 w-28 pl-2">
                <Image src={logo} alt="FT9ja Logo" className="cursor-pointer" />
              </span>
            </Link>
            <div className="ml-2 pt-3">
              <p className="mt-1 text-justify text-sm">
                We are Nigeria&apos;s 1st next-generational proprietary trading
                firm. Our aim is to scout for talented but undercapitalized
                Financial-asset Traders in Nigeria (FT9ja) and empower them.
                They trade with our funds, and we split the profit. It’s really
                a win-win! We want to see retail Traders succeed. Trade with
                peace of mind by trading with our money. Get rid of the fear of
                losing your money as well as the problems of trading a small
                account size.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-10 md:py-0">
            <h1 className="mb-4 text-center text-2xl font-bold md:text-left">
              Contact Us
            </h1>
            <div>
              <p className="text-center md:text-left">
                <span className="font-bold">Email: </span>
                <a className="text-[#28a745]" href="mailto:info@ft9ja.com">
                  info@ft9ja.com
                </a>
              </p>
              <p className="pt-3 text-center md:text-left">
                {' '}
                <span className="font-bold">Whatsapp Number: </span>
                <span className="text-[#28a745]"><a href="https://api.whatsapp.com/send?phone=2348138462394">+2348138462394</a></span>
                
              </p>
              <p className="text-center text-sm md:text-left">
                Mon to Fri - 9am to 5pm WAT
              </p>
              <p className="pt-3 text-center md:text-left">
                Abuja: 18, Queen Elizabeth Street, Asokoro
              </p>
              <p className="text-center md:text-left">
                <a
                  className="text-sm text-[#28a745]"
                  href="https://calendly.com/ft9ja"
                >
                  (Appointments only)
                </a>
              </p>
              <p className="pt-3 text-center md:text-left">
                Lagos: 362 Herbert Macaulay Way, Yaba
              </p>
              <p className="text-center md:text-left">
                <a
                  className="text-sm  text-[#28a745]"
                  href="https://calendly.com/ft9ja-lagos"
                >
                  (Appointments only)
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-8 text-center text-2xl font-bold md:text-left">
              Apply Online
            </h1>
            <div className="flex justify-center flex-col sm:flex-row md:flex-col lg:flex-row md:text-right">
              <Link href="https://temp-app-pockettailwind.herokuapp.com/#pricing">
                <a className="sm:mr-2 lg:mr-2 lg:mb-0 md:mr-0 rounded-xl sm:mb-0 mb-2 md:mb-2 border-[1px] border-black bg-black py-3 px-6 text-center text-base text-white duration-300 hover:border-[1px] hover:bg-white hover:text-black">
                  Start Trading
                </a>
              </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <a
                  target="_blank"
                  className="flex cursor-pointer items-center py-3 rounded-md border-[1px] border-slate-300 px-2"
                >
                  <PlayIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2 text-center">Why FT9ja?</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 px-5 pb-8 md:px-10 md:pt-6">
          <div className="flex pt-5 md:py-5">
            <a
              href="https://facebook.com/FT9ja-101059375510372/"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <ImFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ft9ja.official/"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <GrInstagram className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/ft9ja_official"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <ImTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCM3RtiMpxAQ3pNUnvUP9xcw"
              className="mx-2 rounded-full border-[1px] border-black bg-black p-2 text-white duration-300 hover:bg-white hover:text-black"
            >
              <ImYoutube className="text-2xl" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            All right reserved &copy; 2022 FT9ja -{' '}
             <Link
              className="duration-200 hover:underline"
              href="/terms"
            >
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link
              className="duration-200 hover:underline"
              href="/privacy"
            >
              Privacy
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
