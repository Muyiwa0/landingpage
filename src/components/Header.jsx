import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'
import logo from '../images/logo.png'
import Image from 'next/future/image'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Header() {
  const router = useRouter()
  return (
    <header className="bg-white">
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <span className="h-12 w-20">
                <Image src={logo} alt="FT9ja Logo" className="cursor-pointer" />
              </span>
            </Link>
            <div className="hidden justify-between lg:flex">
              <Link href="/how-it-works">
                <a
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '/how-it-works' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  How it works
                </a>
              </Link>
              <Link href="https://temp-app-pockettailwind.herokuapp.com/#pricing">
                <a
                  className={`mx-1 rounded-lg p-3 duration-300 hover:bg-slate-200`}
                >
                  Pricing
                </a>
              </Link>
              <Link href="/support">
                <a
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '/support' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  Support/FAQs
                </a>
              </Link>
              <Link href="https://www.community.ft9ja.com/">
                <a
                  target="_blank"
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '#' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  Community
                </a>
              </Link>
              <Link href="https://ft9ja.netlify.app/">
                <a
                  target="_blank"
                  className={`mx-1 rounded-lg p-3 duration-300 hover:bg-slate-200`}
                >
                  Apps
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '/contact' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-white px-6 pb-6 pt-16 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="mt-8 flex flex-col gap-4">
                            <Link href="/how-it-works">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/how-it-works'
                                    ? 'bg-slate-200'
                                    : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                How it works
                              </a>
                            </Link>
                            <Link href="https://temp-app-pockettailwind.herokuapp.com/#pricing">
                              <a
                                className={`rounded-lg p-3 duration-300 hover:bg-slate-200`}
                              >
                                Pricing
                              </a>
                            </Link>
                            <Link href="/support">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/support'
                                    ? 'bg-slate-200'
                                    : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                Support/FAQs
                              </a>
                            </Link>
                            <Link href="https://www.community.ft9ja.com/">
                              <a
                                target="_blank"
                                className={`rounded-lg p-3 duration-300 hover:bg-slate-200`}
                              >
                                Community
                              </a>
                            </Link>
                            <Link href="https://ft9ja.netlify.app/">
                              <a
                                target="_blank"
                                className={`rounded-lg p-3 duration-300 hover:bg-slate-200`}
                              >
                                Apps
                              </a>
                            </Link>
                            <Link href="/contact">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/contact'
                                    ? 'bg-slate-200'
                                    : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                Contact
                              </a>
                            </Link>
                            <Link href="/login">
                              <a
                                className={`mx-1 rounded-lg p-3 ${
                                  router.pathname === '/login'
                                    ? 'bg-slate-200'
                                    : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                Login
                              </a>
                            </Link>
                            <Link href="/register">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/register'
                                    ? 'bg-slate-200'
                                    : ''
                                } border-[1px] border-black bg-black text-white duration-300 hover:bg-white hover:text-black`}
                              >
                                Register
                              </a>
                            </Link>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Link href="/login">
              <a
                className={`mx-1 hidden rounded-lg p-3 lg:block ${
                  router.pathname === '/login' ? 'bg-slate-200' : ''
                } duration-300 hover:bg-slate-200`}
              >
                Login
              </a>
            </Link>
            <Link href="/register">
              <a
                className={`hidden rounded-lg p-3 lg:block ${
                  router.pathname === '/register' ? 'bg-slate-200' : ''
                } border-[1px] border-black bg-black text-white duration-300 hover:bg-white hover:text-black`}
              >
                Register
              </a>
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  )
}
