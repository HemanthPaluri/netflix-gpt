import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSingInForm, setIsSingInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSingInForm(!isSingInForm)
    }
  return (
    <div >
        <Header />
        <div className=' absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='Background'/>
        </div>
        <form className='w-3/12 absolute p-12 my-36 bg-black bg-opacity-85 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSingInForm && (<input type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-800'/>)}
            <input type="text" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-800'/>
            <input type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-800'/>
            <button className='p-4 my-4 bg-red-700 w-full'>{isSingInForm? "Sign In" : "Sign Up"}</button>
            <p className=' cursor-pointer' onClick={toggleSignInForm}>{isSingInForm? "New to Netflix? Sung Up Now" : "Already a user? Sung In Now"}</p>
        </form>
    </div>
  )
}

export default Login