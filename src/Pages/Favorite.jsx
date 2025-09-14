import { useEffect, useState } from "react"
import Card from "../Components/Home/Card"
import { AiOutlineHeart } from "react-icons/ai"

const Favorite = () => {
    const [favorite, setFavorite] = useState([])
    const [noNote, setNoNote] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:5000/notes')
                const data = await response.json()
                const hello = data.filter((note) => {return note.isFavorite === true ? note.isFavorite : ''})
                setFavorite(hello)
                hello.length === 0 ? setNoNote(true) : setNoNote(false)
            } catch (error) {
                console.error(error)
            }
        }

        fetchdata()
    }, [])


    return(
        <section>
            <div style={{fontSize: '2rem', marginBottom: '.7rem', fontWeight: 'bold'}}>Favorites</div>

            {
                noNote &&
                <div className="noNote">
                    <AiOutlineHeart size={50} />
                    <div>You have no Favorite note yet</div>
                </div>
            }
            <div className="card-container">
                {
                    favorite.map((note) => (
                        <Card key={note.id} note={note}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Favorite