import React, { useEffect, useState } from 'react'
import '../css files/card.css'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Card = ({carddata,setCarddata,setShowcreatetask,setDataforedit,dataforedit,setIsediting,setIndex}) => {
  const[cdata,setCdata]=useState([])
  const [tasktoEdit,setTasktoEdit]=useState({})
  const[carddata2,setCarddata2]=([])
  const data=[
    {taskname:'run',description:'jogging'},
    {taskname:'gym',description:'workout'},
    {taskname:'walk',description:'morning routine'},
    {taskname:'walk',description:'morning routine'},
    {taskname:'walk',description:'morning routine'}
]   
  const colordata=['aqua','blueviolet','yellow','crimson','red','darkorchid']
 
  const handleDelete=(index)=>{
      const updateddata=[...carddata]
      updateddata.splice(index,1)
      setCarddata(updateddata)
  }
  const handleEdit=(index)=>{
    setTasktoEdit(carddata[index])
    setDataforedit(carddata[index])
    setIndex(index)
    setIsediting(true)
  }
 
 
 useEffect(()=>{
      setCdata(carddata)
      console.log(carddata)
 },[])
  return (
    <>
       <div className="card-container">
             {carddata.length>0&&
              carddata.map((dat,index)=>{
                const bordercolor=Math.floor(Math.random()*colordata.length)
                const randomcolor=colordata[bordercolor]
              return(
                <div className="card-data" key={index} style={{borderTop:`5px solid ${randomcolor}`,boxShadow:'0px 0px 5px 2px rgba(0,0,0,0.4)',}}>
                  <div className="name-desc">
                  <span>{dat.taskname}</span>
                  <p>{dat.description}</p>
                  </div>
                 <div className="buttons-2">
                 <button style={{color:`${randomcolor}`,fontSize:'20px',background:'transparent',border:'none'}} onClick={()=>handleEdit(index)}><FaRegEdit /></button>
                  <button style={{color:`${randomcolor}`,fontSize:"20px",background:'transparent',border:'none'}}  onClick={()=>handleDelete(index)}><MdDelete/></button>
                 </div>
                 </div>
              )})
             }
       </div>
    </>
  )
}

export default Card
