"use client"

import Link from "next/link"
import { createToDo } from "../serversideCalls"
import { useState } from "react"


export default function page(){

    let [details , setDetails] = useState(0)

    const handleDetailsChange = (event) => {
        const details = event.target.value;
        setDetails(details.length);
      };
    
   
    return(
        <>
        <header className="ml-10 mt-5">
            <h1 className="mb-10">New Item:</h1>
            <form action={createToDo} className="flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-3">
                <label htmlFor="title" className="flex flex-col gap-y-1.5"> Title:
                <input 
                type="text"
                name="title"
                className="text-black w-1/3 h-10 text-lg"
                />
                </label>

                <label htmlFor="details" className="flex flex-col gap-y-1.5">Details:
                <textarea 
                name="details"
                className="text-black w-1/3 h-10 text-lg"
                onChange={handleDetailsChange}
                maxLength="300"
                />
                </label>

                <p className={`${details >= 300 ? 'text-red-700' : null}`}>
                        {details}/300 characters
                </p>
               
                </div>

                <div className="flex flex-row gap-x-4 mt-4">

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