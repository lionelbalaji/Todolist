import React, { useEffect, useState } from 'react'
import CreateTask from '../modals/CreateTask'
import EditTask from '../modals/EditTask'
import Card from './Card'
import '../css files/todolist.css'
const ToDoList = () => {
const[showcreatetask,setShowcreatetask]=useState(false)
const[carddata,setCarddata]=useState([])
const [dataforedit,setDataforedit]=useState({})
const[Isediting,setIsediting]=useState(false)
const [Index,setIndex]=useState(null)
  const handlecreatetask=()=>{
        setShowcreatetask(true)
  }
  
  const handletaskclose=()=>{
    setShowcreatetask(false)
  }
  const updateCardData=(index,newdata)=>{
    const updatecarddata=[...carddata]
    updatecarddata[index]=newdata
    console.log('endedit',updatecarddata)
    setCarddata(updatecarddata)
}
  return (
    <div>
      <div className="container">
           <h1>Ninja's ToDo List</h1>
           <button className='create-task'  onClick={handlecreatetask}>Create Task</button>
      </div>
     {
      showcreatetask&&
      <div className="task-container">
            <CreateTask handletaskclose={handletaskclose}
                        setCarddata={setCarddata}
                        dataforedit={dataforedit}
                        carddata={carddata}
                       
            />
      </div>
     }
    <div className="card-task">
    <Card carddata={carddata} setCarddata={setCarddata} 
    setShowcreatetask={setShowcreatetask} 
    dataforedit={dataforedit} 
    setDataforedit={setDataforedit} 
    setIsediting={setIsediting}
    setIndex={setIndex}
    />
    
    </div>
    {
      Isediting&&
      <div className="edit-task">
        <EditTask
        setIsediting={setIsediting}
        carddata={carddata}
        setCarddata={setCarddata}
        dataforedit={dataforedit}
        setDataforedit={setDataforedit}
        updateCardData={updateCardData}
        Index={Index}
        />
      </div>
    }
      
    </div>
  )
}

export default ToDoList
