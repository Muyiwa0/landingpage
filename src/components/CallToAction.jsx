import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import pattern from '@/images/pattern.png'
import pattern2 from '@/images/Group-2.png'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative flex h-[50vh] flex-col items-center justify-center overflow-hidden bg-gray-900 sm:h-[500px] "
    >
      <Image
        src={pattern}
        width={1700}
        height={2000}
        priority
        alt=""
        className="opacity-25"
      />
      <div className="absolute top-1/2 left-20 hidden -translate-y-1/2 sm:left-1/2 sm:block sm:-translate-x-1/2">
        <CircleBackground color="#f77e27" className="animate-spin-slower" />
      </div>
      <Container className="absolute ">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Take your trading to the next level today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            It takes 1 minute to sign up. Sign up for a funding model, choose an
            Account Size, and receive your Trading Account details within 24
            hours.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/#pricing">
              <a className="rounded-md bg-[#28a745] py-2 px-8 text-white duration-300 hover:bg-black ">
                Trade Now
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
