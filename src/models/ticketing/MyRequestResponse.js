import { Ticket } from "./Ticket";

export class TicketCount {
    constructor(data = {}) {
        this.total = data.Total ?? 0;
        this.open = data.Open ?? 0;
        this.assigned = data.Assigned ?? 0;
        this.accepted = data.Accepted ?? 0;
        this.inProgress = data.InProgress ?? 0;
        this.hold = data.Hold ?? 0;
        this.closed = data.Closed ?? 0;
        this.expired = data.Expired ?? 0;
        this.transferred = data.Transferred ?? 0;
    }
}

export class MyRequestResponse {
    constructor(data = {}) {
        this.status = data.Status ?? 0;
        this.message = data.Message ?? 0;
        this.totalRecords = data.TotalRecords ?? 0;
        this.totalPages = data.TotalPages ?? 0;
        this.tickets = (data.TicketDetails ?? []).map((t) => new Ticket(t));
        this.counts = new TicketCount(data.TicketRequestCount?.[0]);
    }
}