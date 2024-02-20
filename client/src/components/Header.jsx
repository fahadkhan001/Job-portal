import React from 'react'
import { Link,  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../assets/anschor1.avif'
const Header = () => {
  const {currentUser}= useSelector(state=>state.user)

  return (
    <header className='bg-blue-950'>
    <div className='flex flex-row items-center font-bold justify-between mx:auto p-3 '>

      <div className='flex gap-3 p-3 items-center self-center'>
        <img className='h-10 w-10 object-contain'  src={logo}  alt='logo' />
          <h1 className='font-bold text-lg sm:text-xl text-white p-3  flex flex-wrap '>
            <span className='text-2xl hover:scale-105 '>Anchors Portal</span>
            
          </h1>
      </div>
      <ul className=' flex flex-row gap-3'>
        <Link to={'/'}>
          <li className='hover:bg-yellow-500 text-white text-lg'>Home</li>
        </Link>
        <Link to={'/earn-coins'}>
        <li className='hover:bg-yellow-500 text-white text-lg'>Earn Coins</li>
        </Link>
        <Link to={'/profile'}>  
        {currentUser ? (
          <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
        ): (
          <li className=' text-gray-50 hover:bg-emerald-800' >Sign-In</li>
      )}
      </Link>

      </ul>
  </div>
    </header>
  )
}

export default Header