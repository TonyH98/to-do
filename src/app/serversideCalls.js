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
  


 export async function deleteToDo(id, dateId) {
    "use server"
  
      await prisma.Todo.delete({
        where: {
          id: id,
        },
      });
      redirect(`/dates/${dateId}`)
  }



  export async function getTodo(id) {
    
      const todo = await prisma.todo.findUnique({
        where: {
          id: id,
        },
      });
  
      return todo;
    
  }



  export async function createToDo(dateId, formData, date) {
    "use server";
  
    let title = formData.get("title")?.valueOf();
    let details = formData.get("details")?.valueOf();
  
    const taskDate = await prisma.TaskDate.findUnique({
      where: { id: dateId },
    });
  
   
    const formattedDate = new Date(taskDate.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
  

  
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid Title");
    }
  
    if (typeof details !== "string" || details.length === 0) {
      throw new Error("Invalid details");
    }
  
    await prisma.Todo.create({ data: { title, details, complete: false, dateId: taskDate.id } });
    
    redirect(`/dates/${formattedDate}`);
  }
  
  


export async function createDate(dateValue) {
  'use server';

  try {
    if (!dateValue) {
      throw new Error("Invalid date value");
    }

 
    const isoDateValue = new Date(dateValue).toISOString();

    const findDate = await prisma.TaskDate.findFirst({
      where: { date: isoDateValue },
    });

    if (findDate) {
      throw new Error("Date already created");
    }

    const createdDate = await prisma.TaskDate.create({
      data: {
        date: isoDateValue
      },
    });

    console.log("TaskDate created successfully:", createdDate);

    return createdDate;
  } catch (error) {
    console.error("Error creating TaskDate:", error);
    throw error;
  }
}



export async function getDate(dates){

  const isoDateValue = new Date(dates).toISOString();

  const date = await prisma.TaskDate.findFirst({
    where: { date: isoDateValue },
  });

  return date

}


export async function getTodosForDate(dateId) {
  "use server";

  try {
    if (!dateId) {
      throw new Error("Invalid dateId");
    }

    // Find the TaskDate by ID
    const taskDate = await prisma.TaskDate.findUnique({
      where: { id: dateId },
      include: { tasks: true },
    });

    if (!taskDate) {
      throw new Error(`TaskDate with ID ${dateId} not found`);
    }

    // Return the array of Todos for the specified date
    return taskDate.tasks;
  } catch (error) {
    console.error(`Error fetching Todos for date with ID ${dateId}:`, error);
    throw error;
  }
}