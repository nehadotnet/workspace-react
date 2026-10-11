import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import userLogin from "../../services/userService";
import { useNavigate } from 'react-router'
import './UserLogin.css'

function UserLogin() {

    const [userType, setUserType] = useState('E');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [remeber, setRemeber] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate('');

    const saved = sessionStorage.getItem('companyData');

    const company = JSON.parse(saved);

    const logoUrl = company.Company_Logo;

    const handleSubmit = async () => {


        if (username.trim() === '' || password.trim() === '') {
            toast.warning('Please enter username and password');
            return;
        }
        // setLoading(true);
        try {

            const payload = {
                username: username.trim(),
                password: password,
                userType: userType,
                companyId: company.CompanyID
            };

            const response = await userLogin(payload);

            console.log(response);

            if (response.Status !== 1) {
                toast.error(response.Message || 'Invalid username or password')
                return;
            }

            const token = response.JwtToken?.[0]?.JwtToken;
            const loginDetails = response.LoginDetails?.[0]

            const storage = remeber ? localStorage : sessionStorage;
            storage.setItem('token', token);
            storage.setItem('loginDetails', JSON.stringify(loginDetails));
            navigate('/dashboard')
        } catch (error) {
            // toast.error(error.Message)
        } finally {
            setLoading(false)
        }

    };



    return (
        <>
            <div className="login-page">
                <div className="user-login-card">
                    <div className="user-login-left">
                        {logoUrl && < img src={logoUrl} alt="Company Logo" />}

                    </div>
                    <div className="user-login-right">
                        <h2>User Login</h2>
                        <div className="tabs">
                            <button className={userType === 'E' ? 'tab active' : 'tab'} onClick={() => setUserType('E')}>Employee</button>
                            <button className={userType === 'R' ? 'tab active' : 'tab'} onClick={() => setUserType('R')}>Retailor</button>

                        </div>
                        <input type="text" placeholder="Enter User name" value={username} onChange={(e) => setUserName(e.target.value)} />
                        <input type="password" placeholder="Enter User password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="options-row">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={remeber}
                                    onChange={(e) => setRemeber(e.target.checked)} />
                                Remember
                            </label>
                            <a href="#">Forgot password?</a>

                        </div>
                        <button className="submit-btn" onClick={handleSubmit} disabled={
                            loading
                        }>{
                                loading && <span className="loader"></span>
                            }
                            {
                                loading ? 'Please wait...' : 'LOGIN'
                            }
                        </button>


                    </div>

                </div>

            </div>
            <ToastContainer position="bottom-right" />


        </>
    )

}

export default UserLogin;