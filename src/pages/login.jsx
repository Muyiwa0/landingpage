import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
// import Iframe from 'react-iframe'
import axios from 'axios'
export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  let handleuserLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('https://maindashbe-june-b18731a0e161.herokuapp.com/api/auth/login/', {
      // .post('http://localhost:8000/api/auth/login/', {
        email,
        password,
      })
      .then((res) => {
        console.log(res)
        // localStorage.setItem("access_token", res.data.access_token);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${localStorage.getItem('access_token')}`
        // axiosInstance.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${localStorage.getItem('access_token')}`

        localStorage.setItem('refresh_token', res.data.refresh_token)
        localStorage.setItem('access_token', res.data.access_token)
        window.location.href = `https://dashboard.ft9ja.com/dashboards?token=${res.data.access_token}&refresh_token=${res.data.refresh_token}`
        // window.location.href = `http://localhost:3001/dashboards?token=${res.data.access_token}&refresh_token=${res.data.refresh_token}`
        // window.location.href = `http://localhost:3001/dashboards?token=${res.data.access_token}&refresh_token=${res.data.refresh_token}`
        console.log('login success')
      })
      .catch((err) => {
        // console.log(err.response.data.non_field_errors[0])
        if(err.response.data.non_field_errors[0] === "E-mail is not verified.") {
          setError(err.response.data.non_field_errors[0])
        }else {
          setError("Invalid Email or Password, Recheck")
        }
        setLoading(false)
      })
  }

  return (
    <>
      <Head>
        <title>FT9ja - Sign In</title>
        <meta
          name="description"
          content="Select your desired account size, pay, and start trading in less than 24 hours. If you encounter any issues on this page, please let us know immediately on Whatsapp (08138462394)."
        />
      </Head>
      <AuthLayout
        title="Sign in to account"
        subtitle={
          <>
            Don’t have an account?{' '}
            <Link href="/register">
              <span className="cursor-pointer text-[#28a745]">Sign up</span>
            </Link>{' '}
            for a new account.
          </>
        }
      >
        <p className='text-red-500'>{error}</p>
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
          <Button
            type="submit"
            disabled={loading}
            color="cyan"
            className={`mt-8 w-full ${loading && 'bg-gray-800'}`}
          >
            {loading ? 'Loading...' : 'Sign in to account'}
            {loading && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="mr-2 ml-3 h-6 w-6 animate-spin fill-[#28a745] text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </Button>
        </form>
        <iframe
          src="http://localhost:3001/"
          style={{ display: 'none' }}
        ></iframe>

        <div style={{'margin-top': '20px'}}>
          Forgot password?{' '}
          <Link href="/forgot-password">
            <span className="cursor-pointer text-[#28a745]">Click here</span>
          </Link>{' '}
          to reset your password.
        </div>

      </AuthLayout>
    </>
  )
}
