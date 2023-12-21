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

  //  const handleDelete = async () => {
  //   try {
  //     await deleteToDo(todo.id);
     
  //   } catch (error) {
  //     console.error('Error deleting todo:', error);
  //   }
  // };


    return (
      <div>
       {productId}
      </div>
    );
  }
  
  