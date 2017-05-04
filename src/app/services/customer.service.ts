/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:8080/customers';

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {
    // ...using get request
    return this.http.get(this.customersUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      // ...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
