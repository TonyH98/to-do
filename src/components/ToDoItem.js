"use client"

import { useState } from "react";
import Edit from "@/Modals/edit";

import Link from "next/link";

export default function ToDoItem({ todo, toggleToDo, deleteToDo }) {

let [modal , setModal] = useState(false)

console.log(modal)

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todo.complete}
        onChange={(e) => toggleToDo(todo.id, e.target.checked)}
      />

      <Link href={`/items/${todo.id}`}>
     
          <h1>{todo.title}</h1>
    
      </Link>

      <button onClick={() => deleteToDo(todo.id)}>Delete</button>
      <button onClick={() => setModal(!modal)}>Edit</button>

      <Edit open={modal} onClose={() => {setModal(false);}} todo={todo}/>
    </div>
  );
}
