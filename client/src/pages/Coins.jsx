import React from 'react'
import { FaCoins } from "react-icons/fa6";

const Coins = ({coins}) => {
  return (
    <div  className='h-[50px] w-[100px] p-3 bg-white'>
        <div className='text-yellow-300 flex items-center  font-bold text-lg'>
        Coins {coins}  <FaCoins className='text-yellow-500' />
        </div>
    </div>
  )
}

export default Coins