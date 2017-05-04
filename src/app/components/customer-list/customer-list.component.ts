import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(
    private customerService: CustomerService
  ) { }

  loadCustomers(): void {
    this.customerService.getCustomers() //
      .subscribe(customers => this.customers = customers, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnInit() {
    this.loadCustomers();
  }

}
