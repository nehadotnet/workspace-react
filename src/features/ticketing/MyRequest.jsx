import { useEffect, useRef, useState } from "react";

import { MyRequestPayload } from "../../models/ticketing/MyRequestPayload";
import fetchMyRequest from "../../services/ticketing/ticketingService";
import CountCard from "./CountCard";
import "./MyRequest.css";
import TicketTable from "./TicketTable";
import Pagination from "./Pagination";

const CARD_CONFIG = [
    { key: "total", label: "All", color: "#2563eb", status: "" },
    { key: "open", label: "Open", color: "#dc2626", status: "Open" },
    { key: "assigned", label: "Assigned", color: "#6b7280", status: "Assigned" },
    { key: "accepted", label: "Accepted", color: "#6b7280", status: "Accepted" },
    { key: "inProgress", label: "In Progress", color: "#2563eb", status: "InProgress" },
    { key: "hold", label: "On Hold", color: "#6b7280", status: "Hold" },
    { key: "closed", label: "Closed", color: "#16a34a", status: "Closed" },
    { key: "expired", label: "Expired", color: "#dc2626", status: "Expired" },
    { key: "transferred", label: "Transferred", color: "#6b7280", status: "Transferred" },
];

function MyRequest() {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeCard, setActiveCard] = useState("total");
    const [pageCount, setPageCount] = useState(1);



    const rowRef = useRef(null);

    const scrollRow = (direction) => {
        rowRef.current.scrollBy({
            left: direction * 500,
            behavior: "smooth"
        })

    }



    useEffect(() => {

        const load = async () => {
            setLoading(true);
            const companyDetails = sessionStorage.getItem('companyData');
            const loginDetails = sessionStorage.getItem('loginDetails');
            const company = JSON.parse(companyDetails);
            const login = JSON.parse(loginDetails);


            console.log(company)

            try {
                const selected = CARD_CONFIG.find((c) => c.key === activeCard);

                const myRequest = new MyRequestPayload({
                    companyId: company.CompanyID,
                    empCd: login.EmpCd,
                    fromDate: "01/01/2026",
                    toDate: "16/10/2026",
                    actionStatus: selected.status,
                    pageCount: pageCount,

                });

                const result = await fetchMyRequest(myRequest);
                setResponse(result)
            }
            catch (error) {
                console.log(error);

            } finally {
                setLoading(false)
            }

        }

        load();
    }, [activeCard, pageCount])


    return (
        <>
            <h1>My Request</h1>
            <div className="count-card-wrapper">
                <button className="scroll-btn left" onClick={() => scrollRow(-1)}>  &#8249;</button>
                <div className="count-card-row" ref={rowRef}>
                    {
                        CARD_CONFIG.map((card) => (
                            <CountCard key={card.key}
                                label={card.label}
                                count={response?.counts[card.key] ?? 0}
                                color={card.color}
                                isActive={activeCard === card.key}
                                onClick={() => {
                                    setActiveCard(card.key);
                                    setPageCount(1);
                                }}
                            />
                        ))

                    }

                </div>
                <button className="scroll-btn right" onClick={() => scrollRow(1)}>  &#8250;</button>


            </div>

            {loading ? <p>Loading...</p> : <TicketTable tickets={response?.tickets ?? []} />}
            <Pagination
                page={pageCount}
                totalPages={response?.totalPages ?? 0}
                totalRecords={response?.totalRecords ?? 0}
                onPageChange={setPageCount}
            />
        </>
    )
}

export default MyRequest;