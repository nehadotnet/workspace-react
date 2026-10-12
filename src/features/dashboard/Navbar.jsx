
import { useState } from 'react';
import './Dashboard.css'
import { useNavigate } from 'react-router'

function Navbar() {

    const [openId, setOpenId] = useState(null)

    const saved = localStorage.getItem('loginDetails') || sessionStorage.getItem('loginDetails')
    const user = JSON.parse(saved)
    const initials = user?.FullName?.split(' ').map((name) => name[0]).join('');
    const moduleAccess = user?.Module_Access || []
    const navigate = useNavigate('')

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loginDetails')
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('loginDetails')
        navigate('/', { replace: true })
    }

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-top'>
                    <div className='sidebar-logo'>F SUITE</div>

                </div>
                <div className='sidebar-menu'>
                    {
                        moduleAccess.map((item) => (
                            <div key={item.ModuleID}>

                                <button className='menu-parent'
                                    onClick={() => setOpenId(openId === item.ModuleID ? null : item.ModuleID)} >{item.ModuleName}</button>

                                {openId === item.ModuleID && item.Sub_Modules.length > 0 && (
                                    <div className='submenu'>
                                        {
                                            item.Sub_Modules.map((submodules) => (
                                                <div key={submodules.MenuID} className='submenu-item'>
                                                    {submodules.Menu}
                                                </div>

                                            ))
                                        }
                                    </div>
                                )}
                            </div>

                        ))
                    }
                </div>
                <div className='sidebar-bottom'>
                    <div className='user-info'>
                        <div className='avatar'>{initials}</div>
                        <div className='user-name'>
                            {user?.FullName}
                        </div>

                    </div>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>

            </div>
        </>
    );
}

export default Navbar;