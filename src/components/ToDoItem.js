"use client"

import { useState } from "react";
import Edit from "@/Modals/edit";

import Link from "next/link";

export default function ToDoItem({ changeDetails, todo, toggleToDo, deleteToDo }) {

let [modal , setModal] = useState(false)



  return (
    <div>

      <div className="flex flex-row gap-x-2">
      <input
        type="checkbox"
        defaultChecked={todo.complete}
        onChange={(e) => toggleToDo(todo.id, e.target.checked)}
      />

      <Link href={`/items/${todo.id}`}>
     
          <h1>{todo.title}</h1>
    
      </Link>

      </div>

      <div className="flex flex-row gap-x-4 mt-3">

      <button className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500" 
      onClick={() => deleteToDo(todo.id)}>Delete
      </button>

      <button className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500"
       onClick={() => setModal(!modal)}>Edit
       </button>

      </div>

      <Edit changeDetails={changeDetails} open={modal} onClose={() => {setModal(false);}} todo={todo}/>
    </div>
  );
}
