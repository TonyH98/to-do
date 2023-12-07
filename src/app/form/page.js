import Link from "next/link"
import { prisma } from "../db"
import {redirect} from "next/navigation"


async function createToDo(data){
    "use server"
    const title = data.get("title")?.valueOf()

    if(typeof title !== "string" || title.length === 0){
        throw new Error("Invalid Title")
    }

    await prisma.Todo.create({data: {title, complete: false}})
    redirect("/")
}

export default function page(){
    return(
        <>
        <header>
            <h1>New</h1>
            <form action={createToDo}>
                <input 
                type="text"
                name="title"
                />

                <div>
                    <Link href="..">Cancel</Link>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </header>

        </>
    )
}