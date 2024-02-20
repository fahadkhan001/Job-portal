import React from 'react'
import Jobcard from './Jobcard'
import jobData from '../internshipDummyData.js'
import Coins from './Coins.jsx'
const Home = () => {
  return (
    <>
    <div className='flex flex-col  items-center p-3 '>
    <div className='flex flex-col items-center justify-center mt-10 gap-10 text-white'>
      <h1 className='text-slate-200 text-5xl font-bold '> Your compass in the sea of career opportunities.</h1>
      <p className='text-xl'>Get latest job oppenings that suits best suits you!</p>
    </div>
    <Coins />
    <div className='flex flex-col  gap-5 mt-32'>
    <p className='text-white w-[130px] bg- font-bold hover:bg-yellow-700 p-3  text-xl ml-44'>Internships:</p>
    {jobData.map((job)=>(
      <Jobcard key={job.id} {...job}/>
      ))}
    
      </div>
    </div>
    </>
  )
}

export default Home