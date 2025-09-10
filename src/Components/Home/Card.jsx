import { FaRegHeart, FaGraduationCap, FaPlane } from "react-icons/fa"

const Card = ({ note }) => {
    return(
        <>
            <div className="card" onClick={{}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p className="type"><FaPlane />{note.type}</p>
                    <div className="favorite"><FaRegHeart color="white" /></div>
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