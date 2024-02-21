  import React from 'react'
  import { FaCoins } from "react-icons/fa6";
import EarnCoins from './EarnCoins';

  export default function Jobcard(props) {
    return (
      <div className='mx-40 mb-4'>
          <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
              <div className='flex flex-col items-start gap-4'>
          
              <h1 className='text-lg font-semibold'>{props.role_name} - {props.company}</h1>
              
              <p className='font-normal  '>Type-{props.type} &#x2022; Experience-{props.experience} &#x2022; Location-{props.location}</p>
              
              </div>
              <div className='flex flex-col items-center gap-4'>
              <img className='w-[80px] h-[80px] rounded-full object-contain' src={props.logo} alt='logo' />
                  <button className='bg-blue-800 p-3 border flex items-center gap-2 border-white rounded-lg text-white hover:scale-105 ' onClick={props.handleApply}>Apply using 50 Coins <FaCoins className='text-golden' /></button>
                  
              </div>
          </div>
      </div>
    )
  }
