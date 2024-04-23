import React, { useEffect, useState } from 'react'
import '../css files/createtask.css'
import { v4 as uuidv4 } from 'uuid'
const CreateTask = ({handletaskclose,setCarddata,dataforedit,carddata}) => {
    //STATES
    const[taskdata,setTaskData]=useState({
        taskname:'',
        description:''
    })
    // const[Isediting,setIsediting]=useState(false)
     const handlenewdata=(e)=>{
      const {name,value}=e.target
      setTaskData((prevdata)=>({...prevdata, id:uuidv4(),[name]:value}))
     }
    const handletaskdata=()=>{
        setCarddata((prevdata)=>[...prevdata,taskdata])
        console.log(taskdata)
        setTaskData({
          taskname:'',
          description:''
        })
        localStorage.setItem('data',JSON.stringify(carddata))
    handletaskclose()
    }
    // const handletaskEdit=(e)=>{
    //   if(dataforedit&&Isediting===true){
    //     const{name,value}=e.target
    //    const updatedtask=carddata.map((item)=>{
    //       if(item.id===dataforedit.id){
    //        return {...item,[name]:value}
    //       }
    //       else{
    //         return item
    //       }
    //   })
    //   console.log('updatedcarddta:',updatedtask)
    //    setCarddata(updatedtask)
    //   }
    //   setIsediting(false)
    //   setTaskData({
    //     taskname:'',
    //     description:''
    // }) 
    // handletaskclose()
    // }
    //  useEffect(()=>{
    //      if(dataforedit&&Isediting===true){
    //        setTaskData(dataforedit)
    //      }
    //      else{
    //       setTaskData({
    //         taskname:'',
    //         description:''
    //     }) 
    //      setIsediting(false)
    //      }
    //  },[dataforedit])
    // useEffect(()=>{console.log('dataforedit',dataforedit)},[])



  return (
    <>
    <div className='container-create'>
        <h1 className='create-head'>Create Task</h1>
        <div className="inputs">
        <label htmlFor="">Task Name:</label>
         <input type="text" name='taskname' placeholder='CreateTaskName' value={taskdata.taskname} className='task-para'  onChange={handlenewdata}/>
         <label htmlFor="" >Description:</label>
         <input type="text" name='description' placeholder='CreateTaskDescription' value={ taskdata.description} className='para'  onChange={handlenewdata}/>
        </div>
         <div className="buttons">
         <button className='create-task' onClick={handletaskdata}>Create</button>
         <button className='cancel-task' onClick={handletaskclose}>Cancel</button>
         </div>
         <div className="close-container">
            <span onClick={handletaskclose} className='close-button'>&times;</span>
         </div>
    </div>
    </>
  )
}

export default CreateTask;


