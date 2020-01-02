import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { AgGridModule } from 'ag-grid-angular'; 

@NgModule({
  declarations: [DashboardCompComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class DashboardModule { }
