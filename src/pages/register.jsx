import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { useState } from 'react'

export default function Register() {
  const [referral, setReferral] = useState()
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
        <form>
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="First Name"
              id="firstname"
              name="firstname"
              type="name"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Second Name"
              id="lastname"
              name="lastname"
              type="name"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email Address"
              id="email"
              name="email"
              type="email"
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
              required
            />
            <SelectField
              className="col-span-full"
              label="Broker"
              id="broker"
              name="broker"
              required
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
            >
              <optgroup label="FT9ja Classic">
                <option>$3000</option>
                <option>$5000</option>
                <option>$25,000</option>
              </optgroup>
              <optgroup label="FT9ja Challenge">
                <option>$5000</option>
                <option>$10000</option>
                <option>$25,000</option>
              </optgroup>
            </SelectField>

            <SelectField
              className="col-span-full"
              label="Payout"
              id="payout"
              name="payout"
              required
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
              />
            )}
            <TextField
              className="col-span-full"
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
            />
            <TextField
              className="col-span-full"
              label="Re-Password"
              id="password"
              name="password2"
              type="password"
              autoComplete="password"
              required
            />
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
