"use client"

import Link from "next/link"
import { getDate , getTodosForDate, deleteToDo, changeDetails, toggleToDo} from "@/app/serversideCalls";

import { useState, useEffect } from 'react';

import ToDoItem from "@/components/ToDoItem";

export default function Dates({ params }) {
  const [date, setDate] = useState({});
  const [todo , setTodo] = useState([])
  let { dateId } = params;

  useEffect(() => {
    async function fetchData() {
      const updatedDate = await getDate(dateId);
      setDate(updatedDate);
    }

    fetchData();
  }, [dateId]);


  useEffect(() => {
    if (date.id) {
      async function fetchTodos() {
        const updatedTodo = await getTodosForDate(date.id);
        setTodo(updatedTodo);
      }

      fetchTodos();
    }
  }, [date.id]);


 

  const handleDelete = async (id) => {
    await deleteToDo(id, dateId);
    const updatedTodos = await getTodosForDate(date.id);
    setTodo(updatedTodos);
  };

  const handleChange = async (id, title, details) => {
    await changeDetails(id, title, details)
    const updatedTodos = await getTodosForDate(date.id);
    setTodo(updatedTodos);

  }

    const handleToggle = async (id, complete) => {
    await toggleToDo(id, complete);
    const updatedTodos = await getTodosForDate(date.id);
    setTodo(updatedTodos);
  };


  console.log(date)
  
  return (
    <main className="ml-3 mt-4">
      <div className="flex flex-row items-center justify-between mb-5">
      
        <h1 className="text-xl">To Do List</h1>
        <button className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500 mr-8 text-lg">
          <Link href={`/form/${date.id}`}>
            New
          </Link>
        </button>


      </div>


       <div className="flex flex-col gap-y-8">
     {todo.map(todo => (
       <ToDoItem
       todo={todo} 
       toggleToDo={handleToggle} 
       deleteToDo={handleDelete} 
       changeDetails={handleChange}
       />
       ))}
        </div> 
        
    </main>
  );
}