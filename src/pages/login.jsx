import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import Iframe from 'react-iframe'
import axios from 'axios'
export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  let handleuserLogin = (e) => {
    e.preventDefault()
    axios
      .post('https://maindashbe.herokuapp.com/api/auth/login/', {
        email,
        password,
      })
      .then((res) => {
        console.log(res, res.data.refresh_token)
        // localStorage.setItem("access_token", res.data.access_token);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${localStorage.getItem('access_token')}`
        // axiosInstance.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${localStorage.getItem('access_token')}`
        
        localStorage.setItem('refresh_token', res.data.refresh_token)
        localStorage.setItem('access_token', res.data.access_token)
        window.location.href = `http://dashboard.ft9ja.com/dashboards?token=${res.data.access_token}&refresh_token=${res.data.refresh_token}`
        console.log('login success')
      })
      .catch((err) => {
        console.log(err)
        setError('Invalid Email or Password')
      })
  }

  return (
    <>
      <Head>
        <title>Sign In - FT9ja</title>
      </Head>
      <AuthLayout
        title="Sign in to account"
        subtitle={
          <>
            Don’t have an account?{' '}
            <Link href="/register">
              <span className="cursor-pointer text-[#28a745]">Sign up</span>
            </Link>{' '}
            for a free trial.
          </>
        }
      >
        {error}
        <form onSubmit={handleuserLogin}>
          <div className="space-y-6">
            <TextField
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" color="cyan" className="mt-8 w-full">
            Sign in to account
          </Button>
        </form>
        <iframe src="http://localhost:3001/" style={{"display":"none"}}></iframe>
      </AuthLayout>
    </>
  )
}
