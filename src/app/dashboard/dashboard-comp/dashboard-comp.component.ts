import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/services';

@Component({
  selector: 'app-dashboard-comp',
  templateUrl: './dashboard-comp.component.html',
  styleUrls: ['./dashboard-comp.component.css']
})
export class DashboardCompComponent implements OnInit {
  public customerList:any=[];
  public displayedColumns: string[] = ['name', 'email', 'gender'];
  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Gender', field: 'gender' }
  ];
  constructor(private cs:CustomerService) { }

  ngOnInit() {
    this.customerList = this.cs.getCustomers();
    console.log(this.cs);
    
  }

}
