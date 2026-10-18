
export class MyRequestPayload {
    constructor({
        companyId = 0,
        empCd = "",
        fromDate = "",
        toDate = "",
        pageSize = 10,
        pageCount = 1,
        actionStatus = "",
        searchText = "",
        departmentId = 0,
        categoryId = 0,
        ticketType = "",
    } = {}) {
        this.companyId = companyId,
            this.empCd = empCd,
            this.fromDate = fromDate,
            this.toDate = toDate,
            this.pageSize = pageSize,
            this.pageCount = pageCount,
            this.actionStatus = actionStatus,
            this.searchText = searchText,
            this.departmentId = departmentId,
            this.categoryId = categoryId,
            this.ticketType = ticketType
    }

    toQueryString() {
        return new URLSearchParams({
            CompanyId: this.companyId,
            EmpCD: this.empCd,
            FromDate: this.fromDate,
            ToDate: this.toDate,
            PageSize: this.pageSize,
            PageCount: this.pageCount,
            ActionStatus: this.actionStatus,
            SearchText: this.searchText,
            DepartmentId: this.departmentId,
            CategoryId: this.categoryId,
            TicketType: this.ticketType
        }).toString();
    }
}

