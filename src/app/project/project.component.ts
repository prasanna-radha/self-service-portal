import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { PageParams } from '../models/pageParams';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public employees: Employee[] = [];

  pageParams = new PageParams();
  totalCount;

  constructor(private projectService: ProjectService, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeWithProjectDetails();
  }

  getEmployeeWithProjectDetails(){
    this.employeeService.getEmployees(this.pageParams).subscribe(
      response => {
        this.employees = response.body;
        this.totalCount = response.headers.get("x-total-count");
        console.log(this.employees);
        console.log("count: " + this.totalCount);
        this.employees.map(employee => {
          this.getProjectDetails(employee);
        });      
      }
    )
  }

  getProjectDetails(employee: Employee){
        console.log(employee);
        this.projectService.getProject(employee.projectId)
          .subscribe(response => {
            employee.project = response;
            //this.employees.push(employee);
            console.log("Result: " + employee.id);
          }, error => {
          console.log(error);
        });
  }

  // getEmployeeWithProjectDetails(){
  //   this.employeeService.getEmployees(this.pageParams).subscribe(response => {
  //     response.map(employee => {
        
  //       this.projectService.getProject(employee.projectId)
  //         .subscribe(response => {
  //           employee.project = response;
  //           this.employees.push(employee);
  //           console.log("Result: " + employee);
  //         }, error => {
  //         console.log(error);
  //       });
  //     });
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  onPageChanged(event: any){
    console.log("onPageChanged called.." + event.page);
    this.pageParams.pageNumber = event.page;
    this.getEmployeeWithProjectDetails();
  }

}
