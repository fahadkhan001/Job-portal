import React, { useEffect, useState } from 'react'
import Jobcard from './Jobcard'
import jobData from '../internshipDummyData.js'
import Coins from './Coins.jsx'
import EarnCoins from './EarnCoins.jsx'
import { useSelector } from 'react-redux'
import { message } from 'antd'
import axios from 'axios'

const Home = () => {
  const {currentUser}= useSelector((state)=>state.user)
  const [totalcoins,SetTotalCoins]=useState(0)
  const [applies,setApplied] = useState(false);
  const getallProfiles = async()=>{
    try {
      const res = await axios.post('/api/profile/getprofile',{
        userid:currentUser._id
      })
      SetTotalCoins(res.data.totalcoins)
      console.log(res.data)
      console.log(totalcoins)
    } catch (error) {
      console.log(error)
      message.error("issue in getall")
    }
  }
  useEffect(() => {
    getallProfiles()
  }, []);
  
  const handleApply = async () => {
    


    try {
      
      const res = await axios.post('/api/profile/deductCoins', {
        userid: currentUser._id,
        coinsToDeduct:50
      });
      
      const updatedCoins = totalcoins-50;
      SetTotalCoins(updatedCoins)
      setApplied(true)
      
      // Update total coins in frontend if needed
      // setTotalCoins(res.data.totalcoins);
      message.success("Applied successfully!");
      
    } catch (error) {
      console.error(error);
      message.error("Oops! You don't have sufficient balance");
    }
  };
  
//   const getTotalCoins = async () => {
//     try {
//       const res = await axios.post('/api/profile/getcoins', {
//         userid: currentUser._id,
//       });
//       SetTotalCoins(res.data.coins);
//     } catch (error) {
//       console.error(error);
//       message.error('Failed to fetch total coins');
//     }
//   };
// useEffect(()=>{
//   getTotalCoins()
// },[])

  
  return (
    <>
    <div className='flex flex-col   items-center p-3 '>
    
    <div className='flex  overscroll-y-contain  flex-col items-center justify-center mt-10 gap-10 text-white'>
      <h1 className='text-slate-200 text-5xl font-bold '> Your compass in the sea of career opportunities.</h1>
      <p className='text-xl'>Get latest job oppenings that suits best suits you!</p>
      
      <Coins  totalCoins={totalcoins} />
    </div>
    <div className='flex flex-col  gap-5 mt-32'>
    <p className='text-white w-[130px] bg- font-bold hover:bg-yellow-700 p-3  text-xl ml-44'>Internships:</p>
    {jobData.map((job)=>(
      <Jobcard key={job.id} {...job} handleApply={handleApply} totalcoins={totalcoins}/>
      ))}
    
      </div>
    </div>
    </>
  )
}

export default Home