"use client"

import { changeDetails } from "@/app/serversideCalls"
import {useState , useEffect} from "react"

export default function edit({onClose , open, todo}){


    if(!open) return null


    return(
        <div className="modal-overlay">
        <div className="modal-container2">
          <div className="modalRight2">
            <button className="closeBtn2" onClick={onClose}>X</button>
          </div>
          <div className="content">
          <h2>Change Todo Items</h2>
           
          </div>

        </div>



    </div>
    )
}