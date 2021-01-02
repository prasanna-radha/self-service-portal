import { Component, OnInit } from '@angular/core';
import { Allocation } from './allocation.model';
import { AllocationService } from './allocation.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  allocations: Allocation[] = [];
  private gridApi;
  private gridColumnApi;
  columnDefs;
  rowData = [];



  constructor(private allocationService: AllocationService) {

    this.columnDefs = [
      { headerName: 'ID', field: 'id', sortable: true, filter: true },
      { headerName: 'Report ID', field: 'reportId', sortable: true, filter: true },
      { headerName: 'Report Name', field: 'reportName', sortable: true, filter: true },
      { headerName: 'Status', field: 'status', sortable: true, filter: true },
      { headerName: 'Uploaded By', field: 'uploadedBy', sortable: true, filter: true },
      { headerName: 'Date Uploaded', field: 'uploadedDate', sortable: true, filter: true },
      { headerName: 'Employee Count', field: 'employeeCount', sortable: true, filter: true },
      { headerName: 'Total Projects', field: 'totalProjects', sortable: true, filter: true },
      { headerName: 'Date Reviewed', field: 'reviewedDate', sortable: true, filter: true },
    ];      

    this.rowData = [
      {"id": 1, "reportId": "100","reportName": "ESA-10132020-01","status": "Review","uploadedBy": "123456","uploadedDate": "10-13-2020","reviewedDate": "", "employeeCount": 100,"totalProjects": 5},
      {"id": 2, "reportId": "110","reportName": "ESA-10162020-02","status": "Review","uploadedBy": "123457","uploadedDate": "10-16-2020","reviewedDate": "","employeeCount": 70,"totalProjects": 10}
    ]; 

   }

  //  onGridReady(params) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;

  //   this.allocationService.getAllocations().subscribe(response => {
  //     this.allocations = response;
  //     console.log("from onGridReady allocations: " + this.allocations);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  ngOnInit(): void {
    this.allocationService.getAllocations().subscribe(response => { 
      this.allocations = response;
      console.log("from onInit - response: " + response);
      console.log("from onInit - allocations: " + this.allocations);
      console.log(this.allocations);
    }, error => {
      console.log(error);
    })
  }
}
