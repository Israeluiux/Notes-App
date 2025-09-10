import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar"

const UserLayout = () => {
    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
            <main style={{marginLeft: '248px'}}>
                <Outlet />
            </main>
        </div>
    )
}

export default UserLayout