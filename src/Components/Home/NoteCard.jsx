import { useEffect, useState } from "react"
import Card from "./Card"
import { FaNoteSticky } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const NoteCard = ({search}) => {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:5000/notes')
                let data = await response.json()
                setNotes(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchdata()
    }, [])

    const addNew = () => {
       navigate('/new-note')
    }

    return(
        <>
            <div className="note-container">
                <div style={{fontWeight: 'bold', fontSize: '1rem'}}>My Notes</div>
                <div className="card-container">
                    {
                        notes.filter((note) => {return search === '' ? note : note.title.includes(search)}).map(note => (
                        <Card key={note.id} note={note}/>
                    )
                )}
                <div className="new" onClick={addNew}>
                    <FaNoteSticky size={30} />
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem'}}>New Note</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default NoteCard