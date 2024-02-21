import React, { useEffect, useState } from 'react'
import { FaCoins } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import axios from 'axios'
import {message} from 'antd'
import { useNavigate } from 'react-router-dom';
import Coins from './Coins';
import { get } from 'mongoose';
import Home from './Home';
const EarnCoins = () => {
    const [coins, setCoins] = useState(0);
    const [allprofiles,setAllProfiles] = useState([]);
    const [totalcoins,SetTotalCoins]=useState(0)
    const [formData,setFormData] = useState({})
    const {currentUser}= useSelector((state)=>state.user)
    const navigate = useNavigate();

   

const getallProfiles = async()=>{
  try {
    const res = await axios.post('/api/profile/getprofile',{
      userid:currentUser._id
    })
    setAllProfiles(res.data.profiles)
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



 const handleSubmit =async(values)=>{
  values.preventDefault();
  try {
console.log(currentUser._id)
const res = await axios.post('/api/profile/register',{
  ...formData, 
    userid:currentUser._id
})
  console.log(res.data)
  setCoins(res.data.coins);
    
  console.log(coins)
  } catch (error) {
    console.log(error)
  }

 }
 const handleChange = (e)=>{
  setFormData({
    ...formData,
    [e.target.id]:e.target.value,
  })
  console.log(formData)
 }


  return (
    <div className='flex flex-col items-center  text-white'>
        <h1 className='flex gap-2 items-center justify-center text-5xl font-mono mt-5 '>Earn Coins <FaCoins className='text-golden'/>   </h1>
        <div className='flex justify-center items-center mt-2 h-11 font-mono text-xl p-2 border border-white gap-3 w-[150px] font-extrabold'>{totalcoins}<FaCoins className='text-golden'/></div>

        <div className='flex justify-center bg-slate-500 w-[800px] rounded-xl  p-2 items-center'>
        
        <form className=' flex flex-col gap-3 rounded-lg  w-[500px]' onSubmit={handleSubmit}>
        <label className='flex flex-col gap-2 text-black'>
        Name 
        <input  name='name' value={formData.name} id='name' className='text-black rounded-lg p-2' type='text' placeholder='Enter Name' onChange={handleChange}  />
        Mobile
        <input name='mobile' value={formData.mobile} id='mobile'  className='text-black rounded-lg p-2' type='text' placeholder='Enter Mobile' onChange={handleChange} />
        Upload profile
        <input name='Profile_pic' value={formData.Profile_pic} id='Profile_pic'  className='text-black border rounded-lg p-2' type='file' placeholder='Profile_pic' onChange={handleChange}/>
        Linkedin Link
        <input name='Linkedin' value={formData.Linkedin} id='Linkedin'  className='text-black  rounded-lg p-2' type='text' placeholder='Enter Linkedin' onChange={handleChange}/>
        Github Link
        <input name='Github' value={formData.Github} id='Github'  className='text-black  rounded-lg p-2' type='text' placeholder='Enter Github'onChange={handleChange} />
        
        Upload Resume
        <input name='Resume' value={formData.Resume} id='Resume' className='text-black border  rounded-lg p-2' type='file' placeholder='Upload Resume'onChange={handleChange} />
      
        School/College
        <select name='schoolcollegetype' value={formData.schoolcollegetype} id='schoolcollegetype' className='ml-2' onChange={handleChange}  >
        <option className='text-black ml-2'>School</option>
        <option className='text-black'>College</option>
        </select>

        School/College Name
        <input name='schoolcollegename' value={formData.schoolcollegename} id='schoolcollegename'  className='text-black  rounded-lg p-2' type='text' placeholder='collegename'onChange={handleChange} />
        
        Start Date
        <input name='schoolcollegestartdate' value={formData.schoolcollegestartdate}   id='schoolcollegestartdate'  className='text-black  rounded-lg p-2' type='date' placeholder='startDate'onChange={handleChange} />
       
        End Date
        <input  name='schoolcollegeenddate' value={formData.schoolcollegeenddate} id='schoolcollegeenddate' className='text-black  rounded-lg p-2' type='date' placeholder='endDate'onChange={handleChange} />
       
        Project Name
        <input name='projectname' value={formData.projectname}  id='projectname' className='text-black  rounded-lg p-2' type='text' placeholder='projectname' onChange={handleChange}/>
        
        Project Description
        <input name='projectdescription' value={formData.projectdescription} id='projectdescription'  className='text-black  rounded-lg p-2' type='text' placeholder='projectDescription'onChange={handleChange} />
        
        Solo Project / Group Project
        
        <select name='sologroupproject' value={formData.sologroupproject} id='sologroupproject' onChange={handleChange} >
        <option  name='sologroupproject' value={formData.sologroupproject} id='sologroupproject' onChange={handleChange}>Group Project</option>
        <option  name='sologroupproject' value={formData.sologroupproject} id='sologroupproject' onChange={handleChange}>Solo Project</option>
       
        </select>
        
        Project Link
        <input name='projectlink' value={formData.projectlink} id='projectlink'  className='text-black  rounded-lg p-2' type='text' placeholder='projectLink' onChange={handleChange}  />
        
        Type ( Internship / Job )
        <select name='internship' value={formData.internship} id='internship' onChange={handleChange}  >
        <option name='internship' value={formData.internship} id='internship' onChange={handleChange} >Internship</option>
        <option name='internship' value={formData.internship} id='internship' onChange={handleChange} >Job</option>
        </select>

       
        Company Name
        <input name='companyname' value={formData.companyname} id='companyname'  className='text-black  rounded-lg p-2' type='text' placeholder='companyname'onChange={handleChange}  />
        Company Website link
        <input  name='companyLink' value={formData.companyLink} id='companyLink' className='text-black  rounded-lg p-2' type='text' placeholder='companyLink'onChange={handleChange}  />
        Role
        <input  name='role' value={formData.role} id='role' className='text-black  rounded-lg p-2' type='text' placeholder='role'onChange={handleChange}  />
        Start Date
        <input  name='startdate' value={formData.startdate} id='startdate' className='text-black  rounded-lg p-2' type='date' placeholder='startDateJob'onChange={handleChange}  />
       End
        <input  name='enddate' value={formData.enddate} id='enddate' className='text-black  rounded-lg p-2' type='date' placeholder='endDateJob'onChange={handleChange}  />
       Cover Letter
        <input  name='coverletter' value={formData.coverletter} id='coverletter' className='text-black  rounded-lg p-2' type='text' placeholder='coverletter'onChange={handleChange}  />
        </label>
        <button className='border rounded-lg border-black text-xl font-bold font-sherif p-3 bg-golden text-black' >Submit</button>
        
        </form>
        </div>

    
    </div>
  )
}

export default EarnCoins
