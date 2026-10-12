import Navbar from "./Navbar"
import './Dashboard.css'
import Header from "./Header";


function Dashboard() {
    return (
        <>
            <div className="dashboard">
                <Navbar />
                <div className='dashboard-main'>
                    <Header />
                    <div className='dashboard-content'>
                        <p>Page content will come here</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;