/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer.model';
// import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { GET_CUSTOMERS, RESET } from '../ngstore/customer.actions';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:8080/customers';

  // customers: Observable<Customer[]>;

  constructor(private http: Http, private store: Store<Customer[]>) {
    console.log('----------------------CustomerService, store = ' + store);
    // this.customers = store.select('customers');
  }

  loadCustomers() {
    return this.http.get(this.customersUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .map(payload => ({ type: 'ADD_CUSTOMERS', payload }))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe((action) => {
        console.log('----------------------CustomerService, dispatch = ' + action);
        this.store.dispatch(action);
      });
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
