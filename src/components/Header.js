import React, {useEffect} from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, USER_AVATAR } from "../utils/constants"


const Header = () => {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch();

    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            navigate('/')
          });
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
                dispatch(addUser({uid:uid, email: email, displayName:displayName }))
                navigate("/browse")
            } else {
             dispatch(removeUser())
             navigate("/")
            }
          });
        //   when component unmounts it will trigger this return (ngOnDestroy)
        return () => unsubscribe()
    }, [])
  return (
    <div className='absolute w-screen z-40 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img 
        className=' w-44'
        src={LOGO}
        alt='Logo'/>
        {user && (
            <div className=' flex p-2'>
                <img className='w-12 h-12' src={USER_AVATAR} alt="login-icon" />
                <button onClick={handleSignOut} className='bg-red-500 mx-2 py-0 px-1 rounded-md text-white'>(Sign out)</button>
            </div>
        )}
    </div>
  )
}

export default Header