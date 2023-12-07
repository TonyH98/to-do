
import { prisma } from "./db"
import Link from "next/link"
import ToDoItem from "@/components/ToDoItem"

function getTodos(){
  return prisma.Todo.findMany()
}

export default async function Home() {

  
const todos = await getTodos()

  return (
    <main >
      <h1>To Do List</h1>
      
      <Link href="/form">New</Link>
     {todos.map(todo => (
      <li>
        <input
        type="checkbox"
        />
        {todo.title}
      </li>
     ))}
    </main>
  )
}

