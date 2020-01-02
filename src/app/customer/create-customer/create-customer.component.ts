import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService, ActivityService } from '../../shared/services';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup
  constructor(private fb: FormBuilder, private cs:CustomerService, private as:ActivityService) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: ['']
      }),
    });
  }

  get firstName() { return this.customerForm.get('firstName'); }
  get lastName() { return this.customerForm.get('lastName'); }
  get email() { return this.customerForm.get('email'); }
  get city() { return this.customerForm.get('address').get('city'); }
  get zip() { return this.customerForm.get('address').get('zip'); }

  onSubmit() {
    console.log(this.customerForm);
    if(this.customerForm.valid) {
      this.cs.addCustomer(this.customerForm.value);
      const activity = JSON.parse(JSON.stringify(this.customerForm.value));
      activity.type = 'Created';
      this.as.addActivity(activity)
    }
    
  }

}
