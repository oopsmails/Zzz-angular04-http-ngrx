import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store, Action } from '@ngrx/store';
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
    const httpResult: Observable<Action> = this.http.get(this.customersUrl)
      .map((res: Response) => res.json())
      .map(payload => ({ type: 'ADD_CUSTOMERS', payload: { customers: payload, selectedCustomer: new Customer() } }))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return httpResult.subscribe(action => this.store.dispatch(action));

    // return this.http.get(this.customersUrl)
    //   .map((res: Response) => res.json())
    //   .map(payload => ({ type: 'ADD_CUSTOMERS', payload: { customers: payload, selectedCustomer: new Customer() } }))
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    //   .subscribe((action) => {
    //     this.store.dispatch(action);
    //   });
  }

}
