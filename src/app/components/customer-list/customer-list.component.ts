import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { GET_CUSTOMERS, RESET } from '../../ngstore/customer.actions';

import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  customersState: Observable<Customer[]>;
  private customersStateSubscription: Subscription;
  customerList: Customer[];

  constructor(private customerService: CustomerService, private store: Store<Customer[]>) {
    // has to initialize here, otherwise undefined
    this.customersState = this.store.select('customers');
  }

  ngOnInit() {
    this.customersStateSubscription = this.customersState.subscribe((state) => {
      this.customersState = this.store.select('customers');
      this.customerList = state;
    });
    this.customerService.loadCustomers();
  }

  ngOnDestroy() {
    this.customersStateSubscription.unsubscribe();
  }
}
