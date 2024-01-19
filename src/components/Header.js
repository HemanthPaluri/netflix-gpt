import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const user = useSelector((store) => store.user)

    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            navigate('/')
          });
    }
  return (
    <div className='absolute w-screen z-40 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img 
        className=' w-44'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='Logo'/>
        {user && (
            <div className=' flex p-2'>
                <img className='w-12 h-12' src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="login-icon" />
                <button onClick={handleSignOut} className='bg-red-500 mx-2 py-0 px-1 rounded-md text-white'>(Sign out)</button>
            </div>
        )}
    </div>
  )
}

export default Header