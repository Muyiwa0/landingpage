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
import { useEffect, useState } from 'react'


export default function Home() {
  const [access, setAccess] = useState("")
  const [refresh, setRefresh] = useState("")
  useEffect(() => {
    setAccess(localStorage.getItem("access_token"))
    setRefresh(localStorage.getItem("refresh_token"))
  }, [])
  return (
    <>
      <Head>
        <title>FT9ja - We Fund Traders</title>
        <meta
          name="description"
          content="We are Nigeria's 1st next-generational prop trading firm. Our aim is to scout for talented but undercapitalized Financial-asset Traders in Nigeria (FT9ja) and empower them. They trade with our funds, and we split the profit. It’s really a win-win! We want to see retail Traders succeed."
        />
        <link rel="preload" as="fetch" href="../images/animations/signup.json" />
        <link rel="preload" as="fetch" href="../images/animations/signup-challenge.json" />
        <link rel="preload" as="fetch" href="../images/animations/signup-classic.json" />
        <link rel="preload" as="fetch" href="../images/animations/startEarning.json" />
        <link rel="preload" as="fetch" href="../images/animations/starttrading.json" />
        <link rel="preload" as="fetch" href="../images/animations/starttrading-challenge.json" />
      </Head>
      <Header access={access} refresh={refresh} />
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
