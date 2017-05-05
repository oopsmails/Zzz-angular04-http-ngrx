import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer.model';
// import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { GET_CUSTOMERS, RESET } from '../ngstore/customer.actions';
import { CustomerAppStore } from '../ngstore/customer.appstore';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:8080/customers';

  constructor(private http: Http, private store: Store<CustomerAppStore>) {
  }

  loadCustomers() {
    return this.http.get(this.customersUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .map(payload => ({ type: 'ADD_CUSTOMERS', payload: { customers: payload, selectedCustomer: new Customer() } }))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  }

}
