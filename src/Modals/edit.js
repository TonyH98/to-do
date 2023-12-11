"use client"

import { changeDetails } from "@/app/serversideCalls"
import {useState , useEffect} from "react"

export default function edit({onClose , open, todo}){

let [edit , setEdit] = useState({
    title: "",
    details: ""
})

useEffect(() => {
    if(todo){
        setEdit(todo)
    }
}, [todo])

function handleText(e){
    const {name , value} = e.target
    setEdit((prev) => ({
        ...prev,
        [name]: value
    }))
}


const handleSubmit = async (e) => {
    e.preventDefault()

    try{
        await changeDetails(todo.id, edit.title, edit.details)
        onClose()
    }
    catch(error){
        console.log(error)
    }
}
    if(!open) return null


    return(
        <div className="modal-overlay">
        <div className="modal-container2">
          <div className="modalRight2">
            <button className="closeBtn2" onClick={onClose}>X</button>
          </div>
          <div className="content">
          <h2>Change Todo Items</h2>
           <form onSubmit={handleSubmit}>
           <input
            value={edit.title}
            name="title"
            type="text"
            onChange={handleText}
            />
            <input
            value={edit.details}
            name="details"
            type="text"
            onChange={handleText}
            />

            <button type="submit">Submit</button>
            <button onClick={onClose}>Cancel</button>
           </form>
          </div>

        </div>



    </div>
    )
}