import { useRef } from "react"
import { useEffect, useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { FaPencil } from "react-icons/fa6"
import { useNavigate, useParams } from "react-router-dom"

const SingleNote = () => {
    const { id } = useParams()
    const textareaRef = useRef(null)
    const [note, setNote] = useState({})
    const [trash, setTrash] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const textarea = textareaRef.current
        if(textarea){
            textarea.style.height = "auto"
            textarea.style.height = textarea.scrollHeight + "px"
        }
    }, [note])

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await fetch(`http://localhost:5000/notes/${id}`)
                const data = await response.json()
                setNote(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchNote()
    }, [id])

    const handleEdit = async () => {
        window.confirm(`Are you sure you want to move note ${note.id} to trash`)
        try {
            const response = await fetch(`http://localhost:5000/notes/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({trash, setTrash})
            })
            const data = await response.json()
            navigate('/trash')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section>
            <div className="note-head">
                <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Note #{note.id}</div>  
                    <div style={{display: 'flex', gap: '.5rem'}}>
                        <button className="btn edit"><FaPencil size={13}/><span>Edit</span></button>  
                        <button className="btn trash" onClick={handleEdit}><FaTrash size={13}/><span>Trash</span></button>  
                    </div>
             </div>
            <form className="new-container">
                <div style={{display: 'flex'}}>
                    <p className="type">{note.type}</p>
                </div>
                <textarea
                    type="text" 
                    className="title" 
                    value={note.title}
                    // onChange={(e) => setTitle(e.target.value)}
                    ref={textareaRef}
                    placeholder="Title goes here..."
                />

                <textarea
                    type="text" 
                    className="body" 
                    value={note.body}
                    // onChange={(e) => setBody(e.target.value)}
                    ref={textareaRef}
                    placeholder="Your note goes here..."
                />
                </form>
        </section>
    )
}

export default SingleNote