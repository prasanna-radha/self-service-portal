export class Allocation {

    public id: number;
    public reportName: string;
    public status: string;
    public uploadedBy: number;
    public uploadedDate: string;
    public reviewedDate: string;
    public employeeCount: number;
    public totalProjects: number;

    constructor(
        id: number, 
        reportName: string,
        status: string,
        uploadedBy: number,
        uploadedDate: string,
        reviewedDate: string,
        employeeCount: number,
        totalProjects: number   
    ){
        this.id=id;
        this.reportName = reportName;
        this.status = status;
        this.uploadedBy = uploadedBy;
        this.uploadedDate = uploadedDate;
        this.reviewedDate = reviewedDate;
        this.employeeCount = employeeCount;
        this.totalProjects = totalProjects;
    }
    
}