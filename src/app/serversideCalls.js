"use server"

import { prisma } from "./db"
import {redirect} from "next/navigation"

export async function getTodos(){
    "use server"
    return prisma.Todo.findMany()
  }


  
  export async function toggleToDo(id , complete){
    "use server"
  
    await prisma.Todo.update({where: {id}, data:{complete}})
  }
  
  export async function changeDetails(id, title, details){
    "use server"
    await prisma.Todo.update({where: {id},  data:{title , details}})
  }
  
 export async function deleteToDo(id) {
    "use server"
  
      await prisma.Todo.delete({
        where: {
          id: id,
        },
      });
      redirect("/")
  }

  export async function getTodo(id) {
    
      const todo = await prisma.todo.findUnique({
        where: {
          id: id,
        },
      });
  
      return todo;
    
  }


 export async function createToDo(dateId, data){
    "use server"

    let title = data.get("title")?.valueOf()

    let details = data.get("details")?.valueOf()

    const taskDate = await prisma.TaskDate.findUnique({
      where: { id: dateId },
    });


    if(typeof title !== "string" || title.length === 0){
        throw new Error("Invalid Title")
    }


 if(typeof details !== "string" || details.length === 0){
        throw new Error("Invalid details")
    }

    await prisma.Todo.create({data: {title, details, complete: false, dateId: taskDate}})
    redirect("/")
}




export async function createDate(dateValue) {
  'use server';

  try {
    if (!dateValue) {
      throw new Error("Invalid date value");
    }

    // Convert date to ISO-8601 format
    const isoDateValue = new Date(dateValue).toISOString();

    const findDate = await prisma.TaskDate.findFirst({
      where: { date: isoDateValue },
    });

    if (findDate) {
      throw new Error("Date already created");
    }

    const createdDate = await prisma.TaskDate.create({
      data: {
        date: new Date(isoDateValue),
      },
    });

    console.log("TaskDate created successfully:", createdDate);

    return createdDate;
  } catch (error) {
    console.error("Error creating TaskDate:", error);
    throw error;
  }
}

