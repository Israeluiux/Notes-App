import { Link } from "react-router-dom"
import Navbar from "../Components/Home/Navbar"
import NoteCard from "../Components/Home/NoteCard"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Auth/AuthContext"

const Home = () => {
    const today = new Date().getHours()
    const { auth } = useContext(AuthContext)
    const [search, setSearch] = useState('')
    const [day, setDay] = useState('')

    useEffect(() => {
        if(today < 12){
            setDay(auth ? `Good morning, ${auth.username}` : `Good morning, Guest`)
        }
        if( today > 12 && today < 16 ){
            setDay(auth ? `Good Afternoon, ${auth.username}` : `Good Afternoon, Guest`)
        }
         else{
            setDay(auth ? `Good Evening, ${auth.username}` : `Good Evening, Guest`)
        }
    }, [today])

    return(
        <div>
            <Navbar search={search} setSearch={setSearch}/>
            <section >
                <div className="greet">
                    <div style={{fontSize: '2rem', marginBottom: '.7rem'}}>{day}</div>
                    <div>Glad to have you back buddy!</div>
                </div>
                <NoteCard search={search}/>
            </section>
        </div>
    )
}

export default Home