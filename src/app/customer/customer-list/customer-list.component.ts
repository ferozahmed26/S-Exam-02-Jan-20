import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customerList: any = [];
  grid;
  columnDefs = [
    { filter:true, resizable:true, headerName: 'First Name', field: 'firstName' },
    { filter:true, resizable:true, headerName: 'Last Name', field: 'lastName' },
    { filter:true, resizable:true, headerName: 'Email', field: 'email' },
    { filter:true, resizable:true, headerName: 'Phone', field: 'phone' },
    { filter:true, resizable:true, headerName: 'Cteated At', field: 'createdAt',
      cellRenderer: function(params) {
        if(params.value) {
          return new Date(params.value).toLocaleString();
        }
      }
    },
    {
      filter:true, resizable:true, headerName: 'Last modified', field: 'modifiedAt', 
      cellRenderer: function (params) {
        if (params.value) {
          return new Date(params.value).toLocaleString();
        }
      } },
    {
      pinned: "right", width: 80, suppressSizeToFit: true, headerName: 'Action', field: 'action',
      cellRenderer: function () {
        return `<button type="button" data-action-type="edit" class="btn btn-sm btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`
      },
    },
  ];

  
  constructor(private cs: CustomerService, private router: Router) { }

  ngOnInit() {}

  onGridReady(grid) {
    this.grid = grid;
    this.grid.api.sizeColumnsToFit();
    this.grid.api.setRowData(this.cs.getCustomers())
  }

  public onCellClicked(row): void {
    console.log(row);
    
    if (row.colDef.field == 'action') {
      this.router.navigate(['/customer/update/'+row.data.id]);
    }
  }

}
