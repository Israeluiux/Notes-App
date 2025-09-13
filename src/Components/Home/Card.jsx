import { useState } from "react"
import { FaRegHeart, FaGraduationCap, FaPlane } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Card = ({ note }) => {
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(note.isFavorite)

    const handleNote = () => {
        navigate(`note/${note.id}`)
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
            console.log(body)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            <div className="card">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: '100'}}>
                    <p className="type"><FaPlane />{note.type}</p>
                    <div onClick={handleLike}  className="favorite">{isFavorite === false ? <FaRegHeart color="white"/> : <FaHeart color="white"/>}</div>
                </div>
                <div className="title">{note.title}</div>
                <div style={{marginTop: 'auto'}}>
                    <div className="author">{note.author}</div>
                    <div className="author">{note.date}</div>
                </div>
            </div>
        </>
    )
}

export default Card