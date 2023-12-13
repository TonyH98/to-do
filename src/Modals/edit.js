"use client"


import {useState , useEffect} from "react"

export default function edit({changeDetails, onClose , open, todo}){

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


const handleSubmit = async () => {


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
        <div className="fixed top-0 left-0 flex justify-center items-center mt-5 ">
        <div className="bg-black border-white border-2 w-1/3">
          <div className="">
            <button className="" onClick={onClose}>X</button>
          </div>
          <div>
          <h2 className="mb-3 mt-3">Change Todo Items</h2>
           <form action={handleSubmit}>

            <div className="flex flex-col gap-y-3">

           <input
            value={edit.title}
            className="text-black"
            name="title"
            type="text"
            onChange={handleText}
            />

            <textarea
            value={edit.details}
            className="text-black"
            name="details"
            onChange={handleText}
            />
            </div>

            <div className="flex flex-row gap-x-4 mt-4 ml-4">

            <button className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500" type="submit">Submit</button>
            <button className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500" onClick={onClose}>Cancel</button>

            </div>

           </form>
          </div>

        </div>



    </div>
    )
}