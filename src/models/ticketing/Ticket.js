export class Ticket {
    constructor(data = {}) {
        this.id = data.TicketID ?? "";
        this.code = data.TicketCode ?? "";
        this.level = Number(data.Level) || 0;
        this.date = data.Ticket_Date?.replace(/\s+/g, " ").trim() ?? "";
        this.status = data.Ticket_Status ?? "";
        this.actionStatus = data.Ticket_ActionStatus ?? "";
        this.raisedBy = data.RaisedByUser ?? "";
        this.profilePic = data.RaisedByUser_ProfilePic ?? null;
        this.type = data.Ticket_Type ?? "";
        this.isReviewDone = data.Is_Review_Done ?? false;
        this.category = data.Category ?? "";
        this.subCategory = data.SubCategory ?? "";
        this.lastActionBy = data.Last_Action_By || "-";
        this.location = data.Location?.replace(/\s+/g, " ").trim() ?? "";
    }
}