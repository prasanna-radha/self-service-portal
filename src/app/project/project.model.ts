export class Project {

    public id: number;
    public projectId: number;
    public reportId: number;
    public customerId: number;
    public customerName: string;
    public projectName: string;
    public createdBy: number;
    public createdDate: string;
    public updatedBy: number;
    public updatedDate: string;

    constructor(
        id: number,
        projectId: number,
        reportId: number,
        customerId: number,
        customerName: string,
        projectName: string,
        createdBy: number,
        createdDate: string,
        updatedBy: number,
        updatedDate: string
        
    ){
    this.id = id;
    this.reportId = reportId;
    this.projectId = projectId;
    this.customerId = customerId;
    this.customerName = customerName;
    this.projectName = projectName;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.updatedBy = updatedBy;
    this.updatedDate = updatedDate;
    }   
}