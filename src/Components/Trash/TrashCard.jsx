import { useEffect, useState } from "react"
import { FaRegHeart, FaGraduationCap, FaPlane } from "react-icons/fa"
import { FaHeart, FaKitMedical, FaPalette, FaPerson, FaTrash } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const TrashCard = ({ note }) => {
    const [type, setType] = useState(note.type)
    const [trash, setTrash] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
            switch (type) {
                case 'Design':
                    setType(<><FaPalette />{note.type}</>)
                    break;
                case 'Education':
                    // return <FaGraduationCap /> {note.type}
                    setType(<><FaGraduationCap />{note.type}</>)
                    break;
                case 'Travel':
                    // return <FaPlane /> {note.type}
                    setType(<><FaPlane />{note.type}</>)
                    break;
                case 'Health':
                    // return <FaKitMedical /> {note.type}
                    setType(<><FaKitMedical />{note.type}</>)
                    break;
            
                default:
                    // return <FaPerson /> {note.type} 
                    setType(<><FaPerson /> Personal</>)
                    break;
            }
    }, [])

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/notes/${note.id}`, {
                method: 'DELETE'
            }) 
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    const handleRestore = async () => {
        try {
            const response = await fetch(`http://localhost:5000/notes/${note.id}`, {
                method: 'PATCH', 
                body: JSON.stringify({trash, setTrash})
            })
            navigate('/')
        } catch (error) {
            
        }
    }

    return(
        <>
            <div className="card">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: '100'}}>
                    <p className="type">{type}</p>
                    {/* <p className="type"><FaPlane />{note.type}</p> */}
                    {/* <div onClick={handleLike}  className="favorite">{isFavorite === false ? <FaRegHeart color="white"/> : <FaHeart color="white"/>}</div> */}
                </div>
                <div className="title">{note.title}</div>
                <div style={{marginTop: 'auto'}}>
                    <div className="author">{note.author}</div>
                    <div className="author">{note.date}</div>
                </div>
                <div style={{display: 'flex', gap: '.5rem'}}>
                    <div onClick={handleRestore} className="restore">Restore</div>
                    <div onClick={handleDelete} className="restore" style={{color: 'white', background: 'hsla(0, 100%, 50%, 1.00)'}}><FaTrash /></div>
                </div>
            </div>
        </>
    )
}

export default TrashCard