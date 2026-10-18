import { MyRequestResponse } from "../../models/ticketing/MyRequestResponse";
import API_BASE_URL from "../auth/api"

const fetchMyRequest = async (myRequest) => {
    const response = await fetch(`${API_BASE_URL}/Ticketing/Fetch_Ticket_MyRequest_Web_API?${myRequest.toQueryString()}`);

    if (!response.ok)
        throw new Error("Server Error")

    const json = await response.json();
    return new MyRequestResponse(json);

}

export default fetchMyRequest;