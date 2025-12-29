import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar/Sidebar"

const Layout = () => {

    return (
        <div className='main-page'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout;
