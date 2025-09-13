import { useState } from "react"
import { FaRegHeart, FaGraduationCap, FaPlane } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Card = ({ note }) => {
    const navigate = useNavigate()
    const [liked, setLiked] = useState(false)

    const handleNote = () => {
        navigate(`note/${note.id}`)
    }

    const handleLike = () => {
        setLiked(!liked)
    }

    return(
        <>
            <div className="card">
                <div onClick={handleLike} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: '100'}}>
                    <p className="type"><FaPlane />{note.type}</p>
                    <div className="favorite">{liked === false ? <FaRegHeart color="white"/> : <FaHeart color="white"/>}</div>
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