import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='main-page' style={{ paddingLeft: isSidebarOpen ? '250px' : '90px', transition: 'padding-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
            <div >
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
