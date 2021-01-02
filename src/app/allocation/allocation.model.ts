import { IAllocation } from "../models/allocation";

export class Allocation implements IAllocation{

    public id: number;
    public reportId: string;
    public reportName: string;
    public status: string;
    public uploadedBy: string;
    public uploadedDate: string;
    public reviewedDate: string;
    public employeeCount: number;
    public totalProjects: number;

    constructor(
        id: number, 
        reportId: string,
        reportName: string,
        status: string,
        uploadedBy: string,
        uploadedDate: string,
        reviewedDate: string,
        employeeCount: number,
        totalProjects: number   
    ){
        this.id=id;
        this.reportId = reportId;
        this.reportName = reportName;
        this.status = status;
        this.uploadedBy = uploadedBy;
        this.uploadedDate = uploadedDate;
        this.reviewedDate = reviewedDate;
        this.employeeCount = employeeCount;
        this.totalProjects = totalProjects;
    }
    
}