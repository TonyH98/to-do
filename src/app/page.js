
import { prisma } from "./db"
import Link from "next/link"
import ToDoItem from "@/components/ToDoItem"



function getTodos(){

  return prisma.Todo.findMany()
}

async function toggleToDo(id , complete){
  "use server"

  await prisma.Todo.update({where: {id}, data:{complete}})
}


async function deleteToDo(id) {
  "use server"

    await prisma.Todo.delete({
      where: {
        id: id,
      },
    });



}



export default async function Home() {

  
const todos = await getTodos()

  return (
    <main >
      <h1>To Do List</h1>
      
      <Link href="/form">New</Link>
     {todos.map(todo => (
      <ToDoItem
       todo={todo} 
       toggleToDo={toggleToDo} 
       deleteToDo={deleteToDo} 
   />
     ))}
    </main>
  )
}

