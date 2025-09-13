import { useContext, useEffect, useRef, useState } from "react"
import { FaCheck, FaPalette } from "react-icons/fa6"
import { AuthContext } from "../Auth/AuthContext"

const NewNoteForm = () => {
    // current date
    const today = new Date().toISOString().split("T")[0]
    const textareaRef = useRef(null)
    const { auth } = useContext(AuthContext)
    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState(auth.username)
    const [date, setDate] = useState(today)
    const [isFavorite, setIsFavorite] = useState(false)
    const [status, setStatus] = useState('Completed')
    const [type, setType] = useState("Design")
    


    useEffect(() => {
        const textarea = textareaRef.current
        if(textarea){
            textarea.style.height = "auto"
            textarea.style.height = textarea.scrollHeight + "px"
        }
    }, [title, body])

    const handleSubmit = async (e) => {
        // e.defaultDefault()
        const noteDetails = {
            body,
            title,
            author,
            date,
            isFavorite,
            status,
            type
        }
        try {
            const response = await fetch('http://localhost:5000/notes', {
                method: 'POST',
                body: JSON.stringify(noteDetails)
            }) 
            const data = response.json()
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
                <div className="note-head">
                    <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>New Note</div>  
                    <button onClick={handleSubmit} className="btn"><FaCheck size={15}/><span>Done</span></button>  
                </div>
                <form className="new-container">
                    <div style={{display: 'flex'}}>
                        <p className="type"><FaPalette />Design</p>
                    </div>
                    <textarea
                    type="text" 
                    className="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ref={textareaRef}
                    placeholder="Title goes here..."
                    />

                    <textarea
                    type="text" 
                    className="body" 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ref={textareaRef}
                    placeholder="Your note goes here..."
                    />
                </form>
        </>
    )
}

export default NewNoteForm