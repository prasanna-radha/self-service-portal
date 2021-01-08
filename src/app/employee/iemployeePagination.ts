import { Employee } from "./employee.model";

export interface IEmployeePagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    employees: Employee[];
}