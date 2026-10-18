
import "./CountCard.css";

const CountCard = ({ label, count, color, isActive, onClick }) => {
    return (
        <>
            <div className={`count-card ${isActive ? "active" : ""}`}
                style={{ "--card-color": color }} onClick={onClick}>
                <p className="count-card-label">{label}</p>
                <p className="count-card-number">{count}</p>

            </div>
        </>
    )
}

export default CountCard;