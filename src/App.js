import './App.css'
import React, { useState } from 'react'

export default function App() {
  const [newList, setNewList]=useState('')
  const [lists , setLists] = useState([])

  function Addlist(){
    if (!newList) {
      alert('you do not write nothing yet')
      return
    }
    const list ={
      id: Math.floor(Math.random() * 1000),
      value: newList 
    }
    setNewList('')
    setLists(old =>[...old , list ])
  }
  function DeleteList(id){
    const wow = lists.filter(list => list.id !== id)
    setLists(wow)
  }
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input type="text" value={newList} onChange={(e)=> setNewList(e.target.value)} placeholder='your planes for the day' />
      <div><button className='enter' onClick={()=> Addlist(setNewList)}>Enter</button>
      </div>
      <div>
        {lists.map(list=>{    

          return(
            <div className='note'>
            <textarea key={list.id}>{list.value}</textarea>
            <button className='ex' onClick={()=>DeleteList(list.id)}>X</button>
            <i class="fa-solid fa-trash"></i>
            </div>
          )
        })}
      </div>
    </div>
  )
}
