
import { prisma } from "./db"

export default async function Home({data}) {

  
const todos = await prisma.todo.findMany()

  return (
    <main >
      
    </main>
  )
}

