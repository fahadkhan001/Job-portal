import React from 'react'
import { FaCoins } from "react-icons/fa6";

const Coins = ({totalCoins, coins}) => {
  console.log(totalCoins)
  console.log(coins)
  return (
    <div  className='h-[50px] w-[500px] p-3 bg-white'>
        <div className=' text-black gap-[100px] flex items-center  font-bold text-lg'>
        Coins- {totalCoins}  <FaCoins className='text-yellow-500' />
       
        </div>
    </div>
  )
}

export default Coins