import { useContext, useEffect, useRef, useState } from "react"
import { FaCheck, FaPalette, FaPerson, FaKitMedical } from "react-icons/fa6"
import { FaGraduationCap, FaPlane } from "react-icons/fa"
import { AuthContext } from "../Auth/AuthContext"
import { useNavigate } from "react-router-dom"

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
    const [trash, setStatus] = useState(false)
    const [type, setType] = useState(null)
    const [open, setOpen] = useState(false)
    const example = [{label: 'Personal', icon: <FaPerson />}, 
                     {label: 'Design', icon: <FaPalette />}, 
                     {label: 'Education', icon: <FaGraduationCap />}, 
                     {label: 'Health', icon: <FaKitMedical />}, 
                     {label: 'Travel', icon: <FaPlane />}
                    ]
    const navigate = useNavigate()
    


    useEffect(() => {
        const textarea = textareaRef.current
        if(textarea){
            textarea.style.height = "auto"
            textarea.style.height = textarea.scrollHeight + "px"
        }
    }, [title, body])

    const handleSubmit = async () => {
        const noteDetails = {
            body,
            title,
            author,
            date,
            isFavorite,
            trash,
            type
        }
        try {
            const response = await fetch('http://localhost:5000/notes', {
                method: 'POST',
                body: JSON.stringify(noteDetails)
            }) 
            const data = response.json()
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }

    const handleSelection = (option) => {
        setType(option)
        setOpen(!open)
    }

    const handleOpen = () => {
        setOpen(!open)
    }


    return(
        <>
                <div className="note-head">
                    <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>New Note</div>  
                    <button onClick={handleSubmit} className="btn"><FaCheck size={15}/><span>Done</span></button> 
                </div>
                <form className="new-container">
                    <div style={{display: 'flex'}} >
                        <p onClick={handleOpen} className="type">{type ? type : <><FaPerson />Personal</>}</p>
                    { open && <ul>
                        {example.map((each, index) => (
                            <li onClick={() => handleSelection(each.label)} key={index}><span>{each.label}</span></li>       
                        ))} 
                    </ul> }
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