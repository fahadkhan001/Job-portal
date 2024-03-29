import {useState} from 'react'
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userslice.js'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";
import Oauth from '../components/Oauth';


export default function Login()  {
  const [formData,setFormData] = useState({})
  const {loading,error} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
}
  

  return (
    <div className='text-white h-[80vh] flex justify-center items-center  '>
    <div className='p-3 max-w-lg shadow-lg hover:shadow-white mx-auto border-[1.5px] items-center justify-center  rounded-lg border-black mt-3  hover:shadow-lg hover:scale-105 transition-shadow overflow-hidden  w-full sm:w-[500px] h-[500px] '>
    <h1 className='font-semibold text-white text-center flex flex-col my-7 text-3xl'><span className='text-yellow-500 font-bold'> Anchors Portal</span>Sign-In</h1>
    
    <form  onSubmit={handleSubmit} className='flex flex-col gap-4  items-center'>
    
    <div className='flex flex-col gap-2 items-center' >
  
    <div className='flex items-center'>
    <input className='border rounded-lg p-3 w-[450px] text-black' id='email' type='email' placeholder='email' onChange={handleChange} />
    <FaEnvelope className=' text-black relative right-8' />
    </div>
    
    <div className='flex  items-center'>
    <input className='border rounded-lg p-3 w-[450px] text-black' id='password' type='password' placeholder='password' onChange={handleChange} />
    <FaLock className='relative text-black right-8  ' />
    </div>
    </div>


    <button disabled={loading}  className='bg-yellow-500 w-[450px] font-semibold p-3 border rounded-lg uppercase hover:opacity-95  disabled:opacity-80'>{loading ? "Loading..." :"Login"}</button>
    <Oauth />
    </form>
    <div className='flex  gap-2 mt-2 '>
    <p >Dont have and account?</p>
    <Link to={'/sign-up'}>
    <span className='text-blue-700 '>Sign Up</span>
    </Link>
     </div>
     
     </div>
    </div>
  )
}

