"use client"

import Link from "next/link"
import { getDate , getTodosForDate} from "@/app/serversideCalls";
import { useState, useEffect } from 'react';


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

  console.log(todo)

  return (
    <main className="ml-3 mt-4">
      <div className="flex flex-row items-center justify-between mb-5">
        <div>
          <h1 className="text-xl">To Do List</h1>
          <button className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500 ml-auto mr-10 text-lg">
            <Link href={`/form/${date.id}`}>
              New
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}