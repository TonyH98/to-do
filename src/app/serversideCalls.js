"use server"

import { prisma } from "./db"

export async function getTodos(){
    "use server"
    return prisma.Todo.findMany()
  }
  
  export async function toggleToDo(id , complete){
    "use server"
  
    await prisma.Todo.update({where: {id}, data:{complete}})
  }
  
  
 export async function deleteToDo(id) {
    "use server"
  
      await prisma.Todo.delete({
        where: {
          id: id,
        },
      });
  
  }