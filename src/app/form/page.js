import Link from "next/link"
import { prisma } from "../db"
import {redirect} from "next/navigation"


async function createToDo(data){
    "use server"
    const title = data.get("title")?.valueOf()

    const details = data.get("details")?.valueOf()

    if(typeof title !== "string" || title.length === 0){
        throw new Error("Invalid Title")
    }


 if(typeof details !== "string" || details.length === 0){
        throw new Error("Invalid details")
    }

    await prisma.Todo.create({data: {title, details, complete: false}})
    redirect("/")
}

export default function page(){
    return(
        <>
        <header className="ml-10 mt-5">
            <h1>New Item:</h1>
            <form action={createToDo} className="flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-3">
                <label htmlFor="title" className="flex flex-col gap-y-1.2"> Title:
                <input 
                type="text"
                name="title"
                className="text-black w-1/3 h-10 text-lg"
                />
                </label>

                <label htmlFor="details" className="flex flex-col gap-y-1.2">Details:
                <textarea 
                name="details"
                className="text-black w-1/3 h-10 text-lg"
                />
                </label>

                </div>

                <div className="flex flex-row gap-x-4">

                    <button className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500">
                    <Link href="..">
                    Cancel
                    </Link>

                    </button>

                    <button type="submit"
                     className="border-solid border-white border-2 w-20 h-10 rounded-md hover:text-sky-500">Submit
                     </button>

                </div>

            </form>
        </header>

        </>
    )
}