import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { useEffect, useState } from 'react'
import Paystack from '@/components/Paystack'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReCAPTCHA from "react-google-recaptcha";

const key = "6LfDA10nAAAAAD7FmUohxj2gpWgxQ5UTHq4Ql3VY"


export default function Register() {
  const [referral, setReferral] = useState()
  const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  // const [amount, setAmount] = useState("30000")
  const [password1, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [broker, setBroker] = useState('')
  const [acc_size, setAccsize] = useState('3000')
  const [payout, setPayout] = useState('')
  const [referral_code, setReferralcode] = useState('')
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState("")
  const [referral_source, setReferralSource] = useState("Google Search")
  // const [phoneError, setPhoneError] = useState("")
  const [captchaError, setCaptchaError] = useState("")
  const [ready, setReady] = useState(true)
  const handleChange = (e) => {
    if (e.target.value === 'Referral') {
      setReferral('referral')
      setReferralSource(e.target.value)
    } else {
      setReferral('')
      setReferralSource(e.target.value)
    }
  }

  // console.log(referral_source)

  // console.log(acc_size)

  // console.log(process.env.GOOGLE_RECAPTCHA_SECRET_KEY)

  const successHandler = () => {
    setReady(true)
  }

  const expiredHandler = () => {
    setReady(false)
  }

  const erroredHandler = () => {
    alert("Please check your internet connection")
  }


  return (
    <>
      <Head>
        <title>FT9ja - Register</title>
        <meta
          name="description"
          content="Select your desired account size, pay, and start trading in less than 24 hours. If you encounter any issues on this page, please let us know immediately on Whatsapp (08138462394)."
        />
      </Head>
      <AuthLayout
        title="Sign up for an account"
        subtitle={
          <>
            Already registered?{' '}
            <Link href="/login" className="">
              <span className="cursor-pointer text-[#28a745]">Sign in</span>
            </Link>{' '}
            to your account.
          </>
        }
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setEmailError("")
            setError("")
            // console.log('omo')
            if (password1 !== password2) {
              setError('Passwords do not match')
            } else {
              const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              emailPattern.test(email) !== true ? setEmailError("Incorrect email format. Email must contain @ symbol and end with .com") : ready !== true ? setCaptchaError("You need to confirm that you are not a robot") :
                axios
                  .post(
                    'https://maindashbe-june-b18731a0e161.herokuapp.com/api/auth/registration/',
                    {
                      email,
                      password1,
                      firstname,
                      lastname,
                      phone,
                      broker,
                      acc_size,
                      payout,
                      password2,
                      referral_code,
                      referral_source
                    }
                  )
                  .then((res) => {
                    console.log(res)
                    setEmailError("")
                    window.location.href = '/confimemail'
                  })
                  .catch((err) => {
                    console.log(err.response.data)
                    if (err.response.data.password1) {
                      if (password1.length < 8) {
                        setError(err.response.data.password1[0])
                      } else if (password1.length >= 8) {
                        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                        console.log(regex.test(password1))
                        setError("Password is too common, it must contain alphabets, numbers and symbols")
                      }

                    }
                    if (err.response.data.email) {
                      setEmailError('Email Already registered, Login instead')
                    }
                  })
            }
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="First Name"
              id="firstname"
              name="firstname"
              type="name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              autoComplete="given-name"
              required
            />
            <TextField
              label="Second Name"
              id="lastname"
              name="lastname"
              type="name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              autoComplete="given-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email Address"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            {emailError && <p className='text-red-500 col-span-full'>{emailError}</p>}
            <PhoneInput
              country={"ng"}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: "215%", paddingTop: "20px", paddingBottom: "20px", borderColor: "#e5e7eb", borderRadius: "8px", gridColumn: "1/-1" }}
            />
            {/* <TextField
              className="col-span-full"
              label="Phone"
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            /> */}
            <SelectField
              className="col-span-full"
              label="Broker"
              id="broker"
              name="broker"
              required
              value={broker}
              onChange={(e) => setBroker(e.target.value)}
            >
              <optgroup label="FT9ja Classic">
                <option>ICMARKETS</option>
                <option>FXTM</option>
                <option>DERIV</option>
              </optgroup>
              <optgroup label="FT9ja Challenge">
                <option>ICMARKETS</option>
                <option>FXTM</option>
              </optgroup>
            </SelectField>

            <SelectField
              className="col-span-full"
              label="Account Size"
              id="payout"
              name="payout"
              required
              value={acc_size}
              onChange={(e) => setAccsize(e.target.value)}
            >
              <optgroup label="FT9ja Classic">
                <option>3000</option>
                <option>5000</option>
                <option>25000</option>
              </optgroup>
              <optgroup label="FT9ja Challenge">
                <option>5000</option>
                <option>10000</option>
                <option>25000</option>
              </optgroup>
            </SelectField>

            <SelectField
              className="col-span-full"
              label="Payout"
              id="payout"
              name="payout"
              required
              value={payout}
              onChange={(e) => setPayout(e.target.value)}
            >
              <optgroup label="FT9ja Classic">
                <option>Weekly</option>
                <option>Monthly</option>
              </optgroup>
              <optgroup label="FT9ja Challenge">
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </optgroup>
            </SelectField>

            <SelectField
              className="col-span-full"
              label="How did you hear about us?"
              id="referral_source"
              name="referral_source"
              required
              onChange={(e) => handleChange(e)}
            >
              <option value="Google Search">Google search</option>
              <option value="Friends">Friends</option>
              <option value="Social media">Social media</option>
              <option value="Trading group">Trading group</option>
              <option value="Referral">Referral</option>
            </SelectField>

            {referral && (
              <TextField
                className="col-span-full"
                label="Referral Code"
                id="referral_code"
                name="referral_code"
                type="referral_code"
                autoComplete="referral_code"
                value={referral_code}
                onChange={(e) => setReferralcode(e.target.value)}
              />
            )}
            <TextField
              className="col-span-full"
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={password1}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              className="col-span-full"
              label="Re-Password"
              id="password"
              name="password2"
              type="password"
              autoComplete="new-password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            <div>
              {error && <p className='text-red-500'>{error}</p>}
            </div>
            <br />
            <div>
              <ReCAPTCHA
                sitekey={key}
                onChange={successHandler}
                onExpired={expiredHandler}
                onErrored={erroredHandler}
              />
            </div>
            <br />
            <div>
              {captchaError && <p className='text-red-500'>{captchaError}</p>}
            </div>
          </div>
          <Button
            type="submit"
            color="cyan"
            className="mt-8 w-full duration-200 hover:bg-gray-800 focus:bg-[#28a745] focus:text-white/80"
          >
            Get started today
          </Button>
        </form>
      </AuthLayout>
    </>
  )
}
