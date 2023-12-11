"use client"

import Link from "next/link"
import ToDoItem from "@/components/ToDoItem"
import { getTodos, toggleToDo, deleteToDo, changeDetails  } from "./serversideCalls"
import { useState, useEffect } from 'react';


export default function Home() {

  const [todos , setTodos] = useState([])

 

  useEffect(() => {
    async function fetchData() {
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    }

    fetchData();
  }, []); 


  const handleToggle = async (id, complete) => {
    await toggleToDo(id, complete);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleDelete = async (id) => {
    await deleteToDo(id);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  return (
    <main >
      <h1>To Do List</h1>
      
      <Link href="/form">New</Link>
     {todos.map(todo => (
      <ToDoItem
       todo={todo} 
       toggleToDo={handleToggle} 
       deleteToDo={handleDelete} 
       changeDetails={changeDetails}
   />
     ))}
    </main>
  )
}




