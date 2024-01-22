import React, {useEffect} from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANG, USER_AVATAR } from "../utils/constants"
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

    const handleButtonClickGpt = () => {
      dispatch(toggleGptSearchView())

    }

    const handleLanguageChange = (e) => {
      console.log(e.target.value)
      dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className='absolute w-screen z-40 px-8 py-2 bg-gradient-to-b from-black flex justify-between md:flex-row flex-col '>
        <img 
        className=' w-44 mx-auto md:mx-0'
        src={LOGO}
        alt='Logo'/>
        {user && (
            <div className=' flex p-2 justify-between'>
              {
                showGptSearch && (
                <select onChange={handleLanguageChange} className=' bg-transparent border-red-700 border-1 rounded-lg text-white p-2 m-2'>
                  {
                    SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                  }
                </select>
                )
              }
                <button onClick={handleButtonClickGpt} className=' py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg hover:bg-opacity-75'>{showGptSearch ? "Home" : "GPT Search"}</button>
                <img className='w-12 h-12 hidden md:inline-block' src={USER_AVATAR} alt="login-icon" />
                <button onClick={handleSignOut} className='bg-red-500 px-4 mx-4 my-2 rounded-md text-white'>(Sign out)</button>
            </div>
        )}
    </div>
  )
}

export default Header