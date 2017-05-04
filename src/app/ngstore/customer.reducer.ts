// src/app/core/pet-tag.reducer.ts
import { Action } from '@ngrx/store';
import { Customer, initialCustomers } from '../models/customer.model';
import { GET_CUSTOMERS, ADD_CUSTOMERS, RESET } from './customer.actions';

export function customerReducer(state: Customer[] = initialCustomers, action: Action) {
    switch (action.type) {
        case GET_CUSTOMERS:
            return { ...state, customers: action.payload };
        case ADD_CUSTOMERS:
            console.log('----------------------customerReducer, action.payload = ' + action.payload);
            // return { ...state, customers: action.payload };
            return Object.assign({}, state, action.payload);
        case RESET:
            return Object.assign({}, state, initialCustomers);
        default:
            return state;
    }
}
