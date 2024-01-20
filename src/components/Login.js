import React, { useRef, useState } from 'react'
import Header from './Header'
import {ValidateUserData} from '../utils/Validations'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BACKGROUND_IMG } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();

    const [isSingInForm, setIsSingInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState()

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)

    const handleUserLogin = () => {

        const message = ValidateUserData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSingInForm) {
            // create user
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid:uid, email: email, displayName:displayName }))
                    
                  }).catch((error) => {
                    setErrorMessage(error.message)
                  });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + "-" + errorMessage)
            });
        } else {
            // login user
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + "-" + errorMessage)
            });
        }


    }

    const toggleSignInForm = () => {
        setIsSingInForm(!isSingInForm)
    }
  return (
    <div >
        <Header />
        <div className=' absolute'>
            <img src={BACKGROUND_IMG}
            alt='Background'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 my-36 bg-black bg-opacity-85 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSingInForm && (<input ref={name} type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-800'/>)}
            <input ref={email} type="text" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-800'/>
            <input ref={password} type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-800'/>
            <p className=' text-red-700'>{errorMessage}</p>
            <button onClick={handleUserLogin} className='p-4 my-4 bg-red-700 w-full'>{isSingInForm? "Sign In" : "Sign Up"}</button>
            <p className=' cursor-pointer' onClick={toggleSignInForm}>{isSingInForm? "New to Netflix? Sung Up Now" : "Already a user? Sung In Now"}</p>
        </form>
    </div>
  )
}

export default Login