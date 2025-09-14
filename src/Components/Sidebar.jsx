import { Link, NavLink } from "react-router-dom"
import { FaTasks, FaRegHeart, FaRegFileAlt, FaCog, FaUserCircle, FaSignOutAlt, FaRegStickyNote, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Sidebar = () => {
    const { logout } = useContext(AuthContext)

    return(
        <>
          <aside className="sidebar">
                <h2 style={{marginLeft: '.7rem', fontSize: '1.5rem'}}>Notely</h2>
                <div className="sidebar-links">
                    <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}><div className="nav"><FaRegStickyNote size={15}/> <span>Note</span></div></NavLink>
                    <NavLink to='/task'><div className="nav"><FaTasks size={15}/> Tasks</div></NavLink>
                    <NavLink to='/favorite'><div className="nav"><FaRegHeart size={15}/> Favorite</div></NavLink>
                    <NavLink to='/trash'><div className="nav"><FaTrash size={15}/> Trash</div></NavLink>
                    <NavLink to='/settings'><div className="nav"><FaCog size={15}/> Settings</div></NavLink>
                </div>
                <div className="sidebar-links" style={{marginTop: 'auto', marginBottom: '3rem'}}>
                    <NavLink to='/profile'><div className="nav"><FaUserCircle size={15}/> Profile</div></NavLink>
                    <NavLink onClick={logout} to='/logout'><div className="nav error" style={{color: 'red'}}><FaSignOutAlt size={15}/> Logout</div></NavLink>
                </div>
          </aside>
        </>
    )
}

export default Sidebar

// notes
// tasks
// settings
// Favorite
// New note
// Draftss