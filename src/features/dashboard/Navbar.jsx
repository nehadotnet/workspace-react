
import { useState } from 'react';
import './Dashboard.css'
import { NavLink, useNavigate } from 'react-router'

function Navbar({ collapsed }) {

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
            <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
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
                                                submodules.MenuID === 3 ? (
                                                    <div key={submodules.MenuID}>
                                                        <NavLink to='/ticketing/my-request' className={({ isActive }) => isActive ? 'submenu-item active' : 'submenu-item'}>
                                                            My Request
                                                        </NavLink>
                                                        <NavLink to='/ticketing/my-action' className={({ isActive }) => isActive ? 'submenu-item active' : 'submenu-item'}>
                                                            My Action
                                                        </NavLink>

                                                    </div>

                                                ) : (
                                                    < div key={submodules.MenuID} className='submenu-item' >
                                                        {submodules.Menu}
                                                    </div>
                                                )

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

            </div >
        </>
    );
}

export default Navbar;