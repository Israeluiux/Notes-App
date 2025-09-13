import { useRef } from "react"
import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { FaPalette, FaCheck } from "react-icons/fa6"
import { useParams } from "react-router-dom"

const SingleNote = () => {
    const { id } = useParams()
    const textareaRef = useRef(null)
    const [note, setNote] = useState({})

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
                console.log(data)
                setNote(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchNote()
    }, [])
    return (
        <section>
            <div className="note-head">
                <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>New Note</div>  
                    <button className="btn edit"><FaEdit size={15}/><span>Edit</span></button>  
                </div>
            <form className="new-container">
                <div style={{display: 'flex'}}>
                    <p className="type"><FaPalette />{note.type}</p>
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