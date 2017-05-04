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
    // this.customerService.loadCustomers();
  }

  ngOnInit() {
    console.log('--------------- ngOnInit is called.');
    // this.customerService.loadCustomers();
    // console.log("--------------- ngOnInit is called, after loadCustomers");
    this.customersStateSubscription = this.customersState.subscribe((state) => {
      console.log('--------------- ngOnInit is called, subscribe, state = ' + state);
      this.customersState = this.store.select('customers');
      console.log('--------------- ngOnInit is called, subscribe, customersState = ' + this.customersState);
      this.customerList = state;
    });
    this.customerService.loadCustomers();
  }

  ngOnDestroy() {
    this.customersStateSubscription.unsubscribe();
  }

  // loadCustomers(): void {
  //   this.customerService.loadCustomers() //
  //     .subscribe(customers => this.customers = customers, // Bind to view
  //     err => {
  //       // Log errors if any
  //       console.log(err);
  //     });

  //   this.store.dispatch({
  //     type: GET_CUSTOMERS,
  //     payload: this.customers
  //   });
  // }



}
