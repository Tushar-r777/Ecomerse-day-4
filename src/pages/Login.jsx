import React from 'react'
import { Link } from 'react-router'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'

const Login = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form className="flex flex-col gap-2">
          <Input label="Email Address" placeholder='Enter Your Email address'/>
          <Input label="Password" placeholder='Enter a password'/>
          <div className="flex items-center justify-between flex-wrap">
            <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
              <input type="checkbox" id="remember-me" className="mr-2" />
              Remember me
            </label>
            <Link className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</Link>
            <p className="text-gray-900 mt-4"> Don't have an account? <Link className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</Link></p>
          </div>
          <Button>Login</Button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
