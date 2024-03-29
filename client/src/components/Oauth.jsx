import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {GoogleAuthProvider,getAuth,signInWithPopup} from '@firebase/auth'
import { signInSuccess } from '../redux/user/userslice';
import { app } from '../firebase';

export default function Oauth() {
  const dispatch = useDispatch();
  const navigate =useNavigate();


  const handleGoogleClick =async()=>{
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result =await signInWithPopup(auth,provider)
        console.log(result);

        const res = await fetch('/api/auth/google',{
          method:"POST",
          headers:{
              "Content-Type":"application/json",

          },
          body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
      })
      const data = await res.json();
      console.log(data)
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
        console.log("Couldn't log in with google",error, error.message)
    }
}
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg w-[450px] uppercase hover:opacity-95 '>Countinue with Google</button>
  )
}
