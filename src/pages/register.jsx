import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { useState } from 'react'
import Paystack from '@/components/Paystack'

export default function Register() {
  const [referral, setReferral] = useState()
  const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(30000)
  const [password1, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [broker, setBroker] = useState('')
  const [acc_size, setAccsize] = useState('')
  const [payout, setPayout] = useState('')
  const [referral_code, setReferralcode] = useState('')
  const [error, setError] = useState('')
  const handleChange = (e) => {
    if (e.target.value === 'Referral') setReferral('referral')
    else if (e.target.value != 'referral') setReferral('')
  }

  return (
    <>
      <Head>
        <title>Sign Up - FT9ja</title>
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
            console.log('omo')
            if (password1 !== password2) {
              setError('Passwords do not match')
            } else {
              axios
                .post(
                  'https://maindashbe.herokuapp.com/api/auth/registration/',
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
                  }
                )
                .then((res) => {
                  //console.log(res);
                  localStorage.setItem('access_token', res.data.access_token)
                  localStorage.setItem('refresh_token', res.data.refresh_token)
                  axios.defaults.headers.common[
                    'Authorization'
                  ] = `Bearer ${localStorage.getItem('access_token')}`
                  console.log('Register success')
                  window.location.href = `https://dashboard.ft9ja.com/dashboards?token=${res.data.access_token}&refresh_token=${res.data.refresh_token}`
                  // window.location.href = `http://localhost:3001/dashboards?token=${res.data.access_token}&refresh_token=${res.data.refresh_token}`
                })
                .catch((err) => {
                  console.log(err.response.data.password1)
                  setError(err.response.data.password1)
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
            <TextField
              className="col-span-full"
              label="Phone"
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
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
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
              autoComplete="password"
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
              autoComplete="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
          {error}
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
