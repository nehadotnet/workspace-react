
import "./Pagination.css";

const Pagination = ({ page, totalPages, totalRecords, onPageChange }) => {
    if (totalPages <= 1) return null;   // nothing to paginate

    return (
        <div className="pagination">
            <span className="pagination-info">{totalRecords} records</span>

            <button
                className="pagination-btn"
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                Previous
            </button>

            <span>Page {page} of {totalPages}</span>

            <button
                className="pagination-btn"
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;