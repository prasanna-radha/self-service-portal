import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CommonModule } from '@angular/common';
import { AllocationComponent } from './allocation.component';

@NgModule({
  declarations: [AllocationComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    ButtonsModule.forRoot()
  ],
  exports: [AllocationComponent]
})
export class AllocationModule { }
