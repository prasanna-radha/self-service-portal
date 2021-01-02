import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


import { CommonModule } from '@angular/common';
import { AllocationComponent } from './allocation.component';

@NgModule({
  declarations: [AllocationComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule
  ],
  exports: [AllocationComponent]
})
export class AllocationModule { }
