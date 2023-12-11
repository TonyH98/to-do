"use client"

import { getTodo } from "@/app/serversideCalls";

import { useState, useEffect } from 'react';
import { deleteToDo } from "@/app/serversideCalls";


export default function ItemList({ params }) {

const [todo , setTodo] = useState({})



  let {productId} = params


  useEffect(() => {
    async function fetchData() {
      const updatedTodos = await getTodo(Number(productId));
      setTodo(updatedTodos);
    }

    fetchData();
  }, []); 

   const handleDelete = async () => {
    try {
      await deleteToDo(todo.id);
     
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };


    return (
      <div>
        <h1>Todo: {todo.title}</h1>
        <p>Details: {todo.details}</p>
        <span>Status: {!todo.complete ? "Not Complete" : "Complete"}</span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
  