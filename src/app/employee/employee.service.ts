import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageParams } from '../models/pageParams';
import { Employee } from './employee.model';
import { IEmployeePagination } from './iemployeePagination';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getEmployees(pageParams: PageParams){
    console.log("getEmployees called..");
    //return this.http.get<Employee[]>(this.baseUrl + "employees?_page=" + pageParams.pageNumber + "&_limit=" + pageParams.pageSize);
    return this.http.get<any>(this.baseUrl + "employees?_page=" + pageParams.pageNumber + "&_limit=" + pageParams.pageSize, {observe: "response"});
  }
}
