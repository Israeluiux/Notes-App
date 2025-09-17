import { useEffect, useState } from "react"
import { FaRegHeart, FaGraduationCap, FaPlane } from "react-icons/fa"
import { FaHeart, FaKitMedical, FaPalette, FaPerson } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Card = ({ note }) => {
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(note.isFavorite)
    const [type, setType] = useState(note.type)

    const handleNote = () => {
        navigate(`/note/${note.id}`)
    }

    const handleLike = async () => {

     const newFavorite = !isFavorite
     setIsFavorite(newFavorite)

        try {
            const response = await fetch(`http://localhost:5000/notes/${note.id}`, {
                method: 'PATCH',
                body: JSON.stringify({isFavorite: newFavorite})
            })
        const body = await response.json()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
            switch (type) {
                case 'Design':
                    setType(<><FaPalette />{note.type}</>)
                    break;
                case 'Education':
                    setType(<><FaGraduationCap />{note.type}</>)
                    break;
                case 'Travel':
                   setType(<><FaPlane />{note.type}</>)
                    break;
                case 'Health':
                    setType(<><FaKitMedical />{note.type}</>)
                    break;
            
                default:
                    setType(<><FaPerson /> Personal</>)
                    break;
            }
    }, [])

    return(
        <>
            <div className="card">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: '100'}}>
                    <p className="type">{type}</p>
                    {/* <p className="type"><FaPlane />{note.type}</p> */}
                    <div onClick={handleLike}  className="favorite">{isFavorite === false ? <FaRegHeart color="white"/> : <FaHeart color="white"/>}</div>
                </div>
                <div onClick={handleNote} className="title">{note.title}</div>
                <div style={{marginTop: 'auto'}}>
                    <div className="author">{note.author}</div>
                    <div className="author">{note.date}</div>
                </div>
            </div>
        </>
    )
}

export default Card