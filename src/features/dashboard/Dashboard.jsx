import Navbar from "./Navbar"
import './Dashboard.css'
import { Outlet } from "react-router";
import { useState } from "react";


function Dashboard() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className="dashboard">
                <div className="sidebar-wrapper">
                    <Navbar collapsed={collapsed} />
                    <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? '>' : '<'}
                    </button>
                </div>
                <div className='dashboard-main'>
                    <div className='dashboard-content'>
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;