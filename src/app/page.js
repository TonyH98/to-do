"use client"

import Link from "next/link"

import MyCalendar from "@/components/Calendar"

import { useState, useEffect } from 'react';


export default function Home() {

  // const [todos , setTodos] = useState([])

 

  // useEffect(() => {
  //   async function fetchData() {
  //     const updatedTodos = await getTodos();
  //     setTodos(updatedTodos);
  //   }

  //   fetchData();
  // }, []); 


  // const handleToggle = async (id, complete) => {
  //   await toggleToDo(id, complete);
  //   const updatedTodos = await getTodos();
  //   setTodos(updatedTodos);
  // };

  // const handleDelete = async (id) => {
  //   await deleteToDo(id);
  //   const updatedTodos = await getTodos();
  //   setTodos(updatedTodos);
  // };

  // const handleChange = async (id, title, details) => {
  //   await changeDetails(id, title, details)
  //   const updatedTodos = await getTodos();
  //   setTodos(updatedTodos);

  // }

  return (
    <main className="ml-3 mt-4">

      <div className="flex flex-row items-center justify-between mb-5">

     
      

      </div>

      {/* <div className="flex flex-col gap-y-8">
     {todos.map(todo => (
       <ToDoItem
       todo={todo} 
       toggleToDo={handleToggle} 
       deleteToDo={handleDelete} 
       changeDetails={handleChange}
       />
       ))}
        </div> */}

       <MyCalendar/>
    </main>
  )
}




