
import API_BASE_URL from "./api";

const validateCompanyCode = async (companyCode) => {
    const response = await fetch(
        `${API_BASE_URL}/Auth/Validate_Company_Code?CompanyCode=${encodeURI(companyCode)}`
    );

    if (!response.ok) {
        throw new Error('Failed to validate company code');
    }

    return await response.json();
}

export default validateCompanyCode;