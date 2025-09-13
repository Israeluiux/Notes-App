import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"
import { useContext, useState } from "react"
import { AuthContext } from "../../Auth/AuthContext"

const Navbar = ({ search, setSearch }) => {
    const { auth } = useContext(AuthContext)

    return(
        <>
            <div className="navbar">
                <div className="head">Notes</div>
                <input type="search"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       placeholder="Search notes" />
                <div className="ctos" style={{display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'space-between',
                                              gap: '.5rem'
                    }}>
                    <Link to='/new-note' style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><FaPlus /><span>New note</span></Link>
                    <div className="user" style={{display: 'flex', alignItems: 'center', gap: '.2rem'}}>
                        <div className="img"></div>
                        <div className="name">{auth ? auth.username : 'Guest'}</div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar