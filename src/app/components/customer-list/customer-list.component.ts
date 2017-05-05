import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { GET_CUSTOMERS, RESET } from '../../ngstore/customer.actions';

import { Customer } from '../../models/customer.model';
import { CustomerAppStore } from '../../ngstore/customer.appstore';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customerAppStoreState$: Observable<CustomerAppStore>;
  private customersAppStoreStateSubscription: Subscription;
  customerList: Customer[];
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService, private store: Store<CustomerAppStore>) {
    this.customerAppStoreState$ = this.store.select('customerAppStore');
  }

  ngOnInit() {
    this.customersAppStoreStateSubscription = this.customerAppStoreState$.subscribe((state) => {
      this.customerList = state.customers;
      this.selectedCustomer = state.selectedCustomer;
    });
    this.customerService.loadCustomers();
  }

  ngOnDestroy() {
    this.customersAppStoreStateSubscription.unsubscribe();
  }
}
