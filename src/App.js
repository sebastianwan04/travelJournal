import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const journalNotes = data.map(note =>{
        return(
            <Card 
                key={note.id}
                {...note}
            />
        )
    })
    
    return(
        <div>
        <Navbar />
        <main className="notes--list">
            {journalNotes}
        </main>
        </div>
    )
}