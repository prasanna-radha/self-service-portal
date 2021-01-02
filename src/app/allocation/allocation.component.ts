import { Component, OnInit } from '@angular/core';
import { Allocation } from './allocation.model';
import { AllocationService } from './allocation.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  //AG Grid parameters
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public defaultColDef;
  public columnTypes;
  public rowData: Allocation[] = [];
  //allocations: Allocation[] = [];

  pageTitle = "";
  
  constructor(private allocationService: AllocationService) {

    //Set the page title
    this.pageTitle = "Allocation Reports";

    this.columnDefs = [
      //Hide column
      { headerName: 'ID', field: 'id', sortable: true, filter: true, hide:true },
      //Hide column
      { headerName: 'Report ID', field: 'reportId', sortable: true, filter: true,  hide:true, width: 120 },
      { headerName: 'Report Name', field: 'reportName', sortable: true, filter: true,  width: 150,
      //Enable hyperlink 
      cellRenderer: function(params) {
        let keyData = params.data.reportName;
        let newLink = `<a href=http://localhost:4200/allocations/${keyData} target="_blank">${keyData}</a>`;
        return newLink;
      }    
      },
      { headerName: 'Status', field: 'status', sortable: true, filter: true,  width: 100 },
      { headerName: 'Uploaded By', field: 'uploadedBy', sortable: true, filter: true,  width: 140 },
      { headerName: 'Date Uploaded', field: 'uploadedDate', sortable: true, filter: true,  width: 150 },
      { headerName: 'Employee Count', field: 'employeeCount', sortable: true, filter: true,  width: 170 },
      { headerName: 'Total Projects', field: 'totalProjects', sortable: true, filter: true,  width: 150 },
      { headerName: 'Date Reviewed', field: 'reviewedDate', sortable: true, filter: true,  width: 150 },
    ];      

    this.defaultColDef = {
      width: 150,
      editable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    };

    this.columnTypes = {
      numberColumn: {
        width: 130,
        filter: 'agNumberColumnFilter',
      }      
    };

    //Sample Data for testing purpose
    // this.rowData = [
    //    {"id": 1, "reportId": "100","reportName": "ESA-10132020-01","status": "Review","uploadedBy": "123456","uploadedDate": "10-13-2020","reviewedDate": "", "employeeCount": 100,"totalProjects": 5},
    //    {"id": 2, "reportId": "110","reportName": "ESA-10162020-02","status": "Review","uploadedBy": "123457","uploadedDate": "10-16-2020","reviewedDate": "","employeeCount": 70,"totalProjects": 10}
    //  ]; 
  }
  
   onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.allocationService.getAllocations().subscribe(response => {
      this.rowData = response;
    }, error => {
      console.log(error);
    });
  }


  ngOnInit(): void {
    this.allocationService.getAllocations().subscribe(response => { 
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
