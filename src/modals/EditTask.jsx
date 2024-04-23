import React, { useState } from 'react'
import '../css files/edittask.css'
const EditTask = ({ setIsediting,carddata,setCarddata,dataforedit,setDataforedit,updateCardData,Index}) => {

const[getdata,setGetdata]=useState({})
  //FUNCTION
   const handlecancel=()=>{
        setIsediting(false)
   }
   const handleedit=()=>{
    console.log('afteredit',dataforedit)
      updateCardData(Index,dataforedit)
      setIsediting(false)
   }
  return (
    <>
        <div className='container-update-create'>
        <h1 className='update-head'>Update Task</h1>
        <div className="update-inputs">
        <label htmlFor="">Task Name:</label>
         <input type="text" name='taskname' value={dataforedit.taskname} className='task-update-para' onChange={(e)=>setDataforedit({...dataforedit,taskname:e.target.value})}  />
         <label htmlFor="" >Description:</label>
         <input type="text" name='description' value={dataforedit.description}  className='update-para' onChange={(e)=>setDataforedit({...dataforedit,description:e.target.value})}  />
        </div>
         <div className="update-buttons">
         <button className='update-task' onClick={handleedit}>Update</button>
         <button className='cancel-task' onClick={handlecancel} >Cancel</button>
         </div>
         <div className="update-close-container">
            <span  className='update-close-button' onClick={()=>setIsediting(false)}>&times;</span>
         </div>
    </div>
    </>
  )
}

export default EditTask