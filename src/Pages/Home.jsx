import { Link } from "react-router-dom"
import Navbar from "../Components/Home/Navbar"
import NoteCard from "../Components/Home/NoteCard"
import { useContext } from "react"
import { AuthContext } from "../Auth/AuthContext"

const Home = () => {
    const { auth } = useContext(AuthContext)

    return(
        <div>
            <Navbar />
            <section >
                <div className="greet">
                    <div style={{fontSize: '2rem', marginBottom: '.7rem'}}>{auth ? `Good morning, ${auth.username}!` : 'Good morning, Guest'}</div>
                    <div>Glad to have you back buddy!</div>
                </div>
                <NoteCard />
            </section>
        </div>
    )
}

export default Home