import { Project } from "../project/project.model";

export class Employee {

    public id: number;
    public associateId: number;
    public associateName: string;
    public designation: string;
    public jobCode: string;
    public allocationPercentage: number;
    public projectId: number;
    public allocationStartDate: string;
    public allocationEndDate: string;
    public associateBillability: string;
    public operationRole: string;
    public offshoreOnsite: string;
    public country: string;
    public location: string;
    public createdBy: number;
    public createdDate: string;
    public updatedBy: number;
    public updatedDate: string;
    //Reference Type
    public project: Project;

    constructor(
        id: number,
        associateId: number,
        associateName: string,
        designation: string,
        jobCode: string,
        allocationPercentage: number,
        projectId: number,
        allocationStartDate: string,
        allocationEndDate: string,
        operationRole: string,
        offshoreOnsite: string,
        country: string,
        location: string,
        project: Project,
        createdBy: number,
        createdDate: string,
        updatedBy: number,
        updatedDate: string
        
    ){
    this.id = id;
    this.associateId = associateId;
    this.associateName = associateName;
    this.designation = designation;
    this.jobCode = jobCode;
    this.allocationPercentage = allocationPercentage;
    this.projectId = projectId;
    this.allocationStartDate = allocationStartDate;
    this.allocationEndDate = allocationEndDate;
    this.operationRole = operationRole;
    this.offshoreOnsite = offshoreOnsite;
    this.country = country;
    this.location = location;
    this.project = project;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.updatedBy = updatedBy;
    this.updatedDate = updatedDate;
    }   
}