"use client"

import { useState } from "react"
import Link from "next/link"
import Calendar from "react-calendar"
import { createDate } from "@/app/serversideCalls"

function myCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  }

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '-');

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md">
        <h1 className="text-3xl mb-4">Choose a Date</h1>
        <Calendar
          onChange={onChange}
          value={date}
          className="border p-4 rounded-md shadow-md"
        />

        <Link href={`/dates/${formattedDate}`} onClick={() => createDate(formattedDate)}>
        <p className="mt-2">Selected Date: {formattedDate}</p>
        </Link>
      </div>
    </div>
  );
}

export default myCalendar;