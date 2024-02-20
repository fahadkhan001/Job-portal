import React, { useState } from 'react'
import { FaCoins } from "react-icons/fa6";
import {Form, Input, Modal, Select, Table, message} from 'antd'
import { useSelector } from 'react-redux';

const EarnCoins = () => {
    const [totalcoins, setTotalcoins] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [formData,setFormData] = useState({
      name:' ',
      mobile: ' ',

    })
    const {currentUser}= useSelector((state)=>state.user)

 const handleSubmit =async(e)=>{
  e.preventDefault(); 
try {
  const res = await fetch('/api/profile/profile-register',{
    method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
  })
  const data =await res.json()
  console.log(data)
} catch (error) {
  console.log(error.message)
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
        <div className='flex justify-center items-center mt-2 font-mono text-xl p-2 border border-white w-[150px] font-extrabold'>{totalcoins}</div>
        <div className='flex justify-center bg-slate-500 w-[800px] rounded-xl  p-2 items-center'>
        
        <form className=' flex flex-col gap-3 rounded-lg  w-[500px]' onSubmit={handleSubmit}>
        <label className='flex flex-col gap-2 text-black'>
        Name 
        <input  name='name' id='  ' className='text-black rounded-lg p-2' type='text' placeholder='Enter Name' onChange={handleChange}  />
        Mobile
        <input name='mobile' id='mobile'  className='text-black rounded-lg p-2' type='text' placeholder='Enter Mobile' onChange={handleChange} />
        Upload profile
        <input name='Profile_pic' id='Profile_pic'  className='text-black border rounded-lg p-2' type='file' placeholder='Profile_pic' onChange={handleChange}/>
        Linkedin Link
        <input name='Linkedin' id='Linkedin'  className='text-black  rounded-lg p-2' type='text' placeholder='Enter Linkedin' onChange={handleChange}/>
        Github Link
        <input name='Github' id='Github'  className='text-black  rounded-lg p-2' type='text' placeholder='Enter Github'onChange={handleChange} />
        
        Upload Resume
        <input name='Resume' id='Resume' className='text-black border  rounded-lg p-2' type='FILE' placeholder='Upload Resume'onChange={handleChange} />
      
        School/College
        <select name='schoolcollegetype' id='schoolcollegetype' className='ml-2' onChange={handleChange}  >
        <option className='text-black ml-2'>School</option>
        <option className='text-black'>College</option>
        </select>

        School/College Name
        <input name='schoolcollegename' id='schoolcollegename'  className='text-black  rounded-lg p-2' type='text' placeholder='collegename'onChange={handleChange} />
        
        Start Date
        <input name='schoolcollegestartdate' id='schoolcollegestartdate'  className='text-black  rounded-lg p-2' type='date' placeholder='startDate'onChange={handleChange} />
       
        End Date
        <input  name='schoolcollegeenddate' id='schoolcollegeenddate' className='text-black  rounded-lg p-2' type='date' placeholder='endDate'onChange={handleChange} />
       
        Project Name
        <input name='projectname'  id='projectname' className='text-black  rounded-lg p-2' type='text' placeholder='projectname' onChange={handleChange}/>
        
        Project Description
        <input name='projectdescription' id='projectdescription'  className='text-black  rounded-lg p-2' type='text' placeholder='projectDescription'onChange={handleChange} />
        
        Solo Project / Group Project
        
        <select name='sologroupproject' id='sologroupproject' onChange={handleChange} >
        <option>Group Project</option>
        <option>Solo Project</option>
       
        </select>
        
        Project Link
        <input name='projectlink' id='projectlink'  className='text-black  rounded-lg p-2' type='text' placeholder='projectLink' onChange={handleChange}  />
        
        Type ( Internship / Job )
        <select name='internship' id='internship' onChange={handleChange}  >
        <option>Internship</option>
        <option>Job</option>
        </select>

       
        Company Name
        <input name='companyname' id='companyname'  className='text-black  rounded-lg p-2' type='text' placeholder='companyname'onChange={handleChange}  />
        Company Website link
        <input  name='companyLink' id='companyLink' className='text-black  rounded-lg p-2' type='text' placeholder='companyLink'onChange={handleChange}  />
        Role
        <input  name='role' id='role' className='text-black  rounded-lg p-2' type='text' placeholder='role'onChange={handleChange}  />
        Start Date
        <input  name='startdate' id='startdate' className='text-black  rounded-lg p-2' type='date' placeholder='startDateJob'onChange={handleChange}  />
       End
        <input  name='enddate' id='enddate' className='text-black  rounded-lg p-2' type='date' placeholder='endDateJob'onChange={handleChange}  />
       Cover Letter
        <input  name='coverletter' id='coverletter' className='text-black  rounded-lg p-2' type='text' placeholder='coverletter'onChange={handleChange}  />
        </label>
        <button className='border rounded-lg border-black text-xl font-bold font-sherif p-3 bg-golden text-black' >Submit</button>
        
        </form>
        
        </div>
        
    
    </div>
  )
}

export default EarnCoins
