import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CustomerService {

  private customers= [];

  constructor() {
    if(localStorage.getItem('customers')) {
      this.customers = JSON.parse(localStorage.getItem('customers'))
    }
    localStorage.setItem('customers', JSON.stringify(this.customers))
   }

  public getCustomers(){
    return this.customers;
  }

  public getCustomerById(id:string) {    
    return this.customers.find(elm=>  elm.id == id)

  }

  public addCustomer(customer) {
    customer.id = uuid();
    customer.createdAt = new Date();
    customer.modifiedAt = new Date();
    this.customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(this.customers))
    return true;
  }

  public updateCustomer(customer, id) {
    const index = this.customers.findIndex(elm => elm.id == id);
    const object = this.customers[index];
    customer.id = id;
    customer.createdAt = object.createdAt;
    customer.modifiedAt = new Date();
    this.customers[index] = customer;
    localStorage.setItem('customers', JSON.stringify(this.customers))
    return true;
  }
}
