"use client"

import { useState } from "react"
import Calendar from "react-calendar"

function myCalendar(){

const [date , setDate] = useState(new Date())

const onChange = (newDate) => {
    setDate(newDate);
}


console.log(date)

return(
    <div className="flex justify-center items-center min-h-screen">
      <div className=" p-8 rounded-lg shadow-md">
        <h1 className="text-3xl mb-4">Choose a Date</h1>
        <Calendar
          onChange={onChange}
          value={date}
          className="border p-4 rounded-md shadow-md"
        />
      </div>
    </div>
)


}



export default myCalendar