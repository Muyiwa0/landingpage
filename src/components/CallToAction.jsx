import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 hidden -translate-y-1/2 sm:left-1/2 sm:block sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
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
            <Link href="https://temp-app-pockettailwind.herokuapp.com/#pricing">
              <a className="rounded-md bg-white py-2 px-8 text-black duration-300 hover:bg-black hover:text-white">
                Trade Now
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
