"use client"

import { getTodo } from "@/app/serversideCalls";
import { useState, useEffect } from 'react';
 
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

  console.log(todo)


    return (
      <div>
        <h1>Todo: {todo.title}</h1>
        <p>Details: {todo.details}</p>
        <span>Status: {!todo.complete ? "Not Complete" : "Complete"}</span>
      </div>
    );
  }
  