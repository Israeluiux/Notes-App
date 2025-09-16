import { useEffect, useState } from "react"
import Card from "../Components/Home/Card"
import TrashCard from "../Components/Trash/TrashCard"

const Trash = () => {
    const [trash, setTrash] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:5000/notes')
                const data = await response.json()
                const maintrash = data.filter((each) => each.trash === true)
                setTrash(maintrash)
            } catch (error) {
                console.error(error)
            }
        }

        fetchdata()
    }, [])

    return(
        <section>
            <div style={{fontWeight: 'bold', fontSize: '2rem'}}>Trash</div>
            <div className="card-container">
                {
                    trash.map(each => (
                        <TrashCard key={each.id} note={each} />
                    ))
                }
            </div>
        </section>
    )
}

export default Trash