import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { EmployeeModule } from '../employee/employee.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    EmployeeModule,
    SharedModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [ProjectComponent]
})
export class ProjectModule { }
