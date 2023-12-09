"use client"

import {prisma} from "../../db"
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
      <h1>
        Details about product {productId}
      </h1>
    );
  }
  