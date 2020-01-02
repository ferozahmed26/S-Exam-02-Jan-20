import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AgGridModule } from 'ag-grid-angular'; 
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  declarations: [CreateCustomerComponent, CustomerListComponent, UpdateCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ]
})
export class CustomerModule { }
