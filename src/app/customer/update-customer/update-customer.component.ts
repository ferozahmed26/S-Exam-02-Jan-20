import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService, ActivityService } from '../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerId:string;
  constructor(private fb: FormBuilder, private cs: CustomerService, private as: ActivityService, private route: ActivatedRoute,
    private router: Router) { }

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

    this.customerId = this.route.params['value'].id;
    this.setCustmoerData(this.customerId)
  }

  get firstName() { return this.customerForm.get('firstName'); }
  get lastName() { return this.customerForm.get('lastName'); }
  get email() { return this.customerForm.get('email'); }
  get city() { return this.customerForm.get('address').get('city'); }
  get zip() { return this.customerForm.get('address').get('zip'); }

  onSubmit() {
    if(this.customerForm.valid) {
      this.cs.updateCustomer(this.customerForm.value, this.customerId);
      const activity = JSON.parse(JSON.stringify(this.customerForm.value));
      activity.type = 'Updated';
      this.as.addActivity(activity);
    }
    
  }

  setCustmoerData(id:string) {
    const customer = this.cs.getCustomerById(id);
    if (customer) {
      this.customerForm.patchValue(customer)
    }
    
  }

}
