
import { useState } from 'react'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validateCompanyCode from '../../services/authService';
import { useNavigate } from 'react-router'

function Login() {

    const [companyCode, setCompanyCode] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleLogin = async () => {

        if (companyCode.trim() === '') {
            toast.warning('Please enter Company Code')
            return
        }
        setLoading(true)

        try {
            const response = await validateCompanyCode(companyCode.trim())

            if (response.Status !== 1) {
                toast.error(response.Message)
                return;
            }

            sessionStorage.setItem('companyData', JSON.stringify(response.CompanyDetails[0]));
            navigate('/auth/user-login')
        } catch (error) {
            toast.error(error.Message);

        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <div className='login-page'>
                <div className='login-card'>
                    <h2>Company Code</h2>
                    <input onChange={(e) => setCompanyCode(e.target.value)} type='text' placeholder='enter company code' />
                    <button onClick={handleLogin} disabled={loading}>
                        {loading && <span className="loader"></span>}
                        {
                            loading ? 'Please wait...' : 'Login'
                        }</button>

                </div>

            </div>
            <ToastContainer position="bottom-right" />
        </>

    )
}

export default Login