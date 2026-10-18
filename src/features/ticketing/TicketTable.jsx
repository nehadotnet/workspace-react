import "./TicketTable.css";

const BADGE_CLASS = {
    Open: "badge-red",
    Assigned: "badge-red",
    Accepted: "badge-green",
    Closed: "badge-green",
    InProgress: "badge-blue",
};

const StatusBadge = ({ text }) => (
    <span className={`status-badge ${BADGE_CLASS[text] ?? "badge-grey"}`}>
        {text}
    </span>
);

const TicketTable = ({ tickets }) => {
    return (
        <div className="ticket-table-wrapper">
            <table className="ticket-table">
                <thead>
                    <tr>
                        <th>Ticket Number</th>
                        <th>Level</th>
                        <th>Ticket Date &amp; Time</th>
                        <th>Request Status</th>
                        <th>Action Status</th>
                        <th>Raised By</th>
                        <th>Ticket Type</th>
                        <th>Sub Category</th>
                        <th>Last Action By</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.length === 0 ? (
                        <tr>
                            <td colSpan={9} className="no-data">No records found</td>
                        </tr>
                    ) : (
                        tickets.map((t) => {
                            const [date, ...rest] = t.date.split(" ");
                            return (
                                <tr key={t.id}>
                                    <td className="ticket-link">{t.code}</td>
                                    <td>{t.level}</td>
                                    <td>{date}<br />{rest.join(" ")}</td>
                                    <td><StatusBadge text={t.status} /></td>
                                    <td><StatusBadge text={t.actionStatus} /></td>
                                    <td>{t.raisedBy}</td>
                                    <td>{t.type}</td>
                                    <td>{t.subCategory}</td>
                                    <td>{t.lastActionBy}</td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TicketTable;