import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../images/logo.png'
import emailImage from '../images/email_sent.png'
import axios from 'axios'
import { useRouter } from 'next/router';

function ConfirmEmail() {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  const router = useRouter();
  const { token } = router.query;


  React.useEffect(() => {
    // console.log(router.query)
    console.log(token)

    if (token) {

      axios
        .get('https://maindashbe-june-b18731a0e161.herokuapp.com/api/auth/confirm-email/' + token)
        // .get('http://localhost:8000/api/auth/confirm-email/'+token)
        .then((res) => {
          console.log("Email verified", res);
          setMsg("Your email has been confirmed. You will be redirected to the login page");
          setShowSuccess(true);
          window.location.href = '/login'
        })
        .catch((err) => {
          console.log(err)
          setMsg("Your email has been confirmed. You will be redirected to the login page");
          window.location.href = '/login'
          // setMsg('Sorry! There was a problem confirming your email address. Please try again.')
          setShowSuccess(true);
        })
    }

  }, [token]);


  return (
    <>
      <Head>
        <title>FT9ja</title>
        <meta
          name="description"
          content="Select your desired account size, pay, and start trading in less than 24 hours. If you encounter any issues on this page, please let us know immediately on Whatsapp (08138462394)."
        />
      </Head>

      <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <Link href="/" aria-label="Home">
            <span className="h-12 w-28  cursor-pointer self-center">
              <Image src={logo} alt="FT9ja Logo" className="cursor-pointer" loading='lazy' />
            </span>
          </Link>

          <div className="relative mt-12 sm:mt-16 self-center">
            <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900 mb-10">
              Thank you!
            </h1>
            {!showSuccess &&
              <div className='flex flex-col items-center'>
                <Image src={emailImage} alt="Email sent" className="cursor-pointer" loading='lazy' />
                <div>
                  <p className="mt-3 text-center text-lg text-gray-600">
                    A verification email has been sent to your mail. Kindly check your mail to complete your registration.
                  </p>
                </div>
              </div>
            }
            {showSuccess &&
              <>
                <div>
                  <p className="mt-3 text-center text-lg text-gray-600">
                    {msg}
                  </p>
                </div>
              </>
            }
          </div>

        </div>
      </main>

    </>
  )

}

export default ConfirmEmail;
