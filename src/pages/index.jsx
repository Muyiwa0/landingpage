import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>FT9ja - We Fund Traders</title>
        <meta
          name="description"
          content="We are Nigeria's 1st next-generational prop trading firm. Our aim is to scout for talented but undercapitalized Financial-asset Traders in Nigeria (FT9ja) and empower them. They trade with our funds, and we split the profit. It’s really a win-win! We want to see retail Traders succeed."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
