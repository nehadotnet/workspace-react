import UserLogin from "../../features/auth/UserLogin";
import API_BASE_URL from "./api"

const userLogin = async ({ username, password, userType, companyId }) => {

    console.log('handleSubmit btn::', username);

    const jsonReq = JSON.stringify({
        UserName: username,
        Password: password,
        UserType: userType,
        CompanyID: companyId,
    });

    const dataPayload = new FormData();
    dataPayload.append("0", jsonReq);
    console.log('handleSubmit btn::', dataPayload);

    const response = await fetch(`${API_BASE_URL}/Auth/Validate_Login_V6_Web`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
        },
        body: dataPayload
    });

    if (!response.ok) {
        throw new Error('Login failed. Please try again.');
    }
    return await response.json();
}

export default userLogin;