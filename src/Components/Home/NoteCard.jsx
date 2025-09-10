import { useEffect, useState } from "react"
import Card from "./Card"

const NoteCard = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:5000/notes')
                let data = await response.json()
                setNotes(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
            
        }

        fetchdata()
    }, [])

    return(
        <>
            <div className="note-container">
                <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>My notes</div>
                <div className="card-container">
                    {
                        notes.map(note => (
                        <Card key={note.id} note={note}/>
                    )
                )}
                </div>
            </div>
        </>
    )
}

export default NoteCard