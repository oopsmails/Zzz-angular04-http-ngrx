import { Action } from '@ngrx/store';
import { CustomerAppStore, initialCustomerAppStore } from './customer.appstore';
import { GET_CUSTOMERS, ADD_CUSTOMERS, RESET } from './customer.actions';

export function customerReducer(state: CustomerAppStore = initialCustomerAppStore, action: Action): CustomerAppStore {
    switch (action.type) {
        case GET_CUSTOMERS:
            return { ...state, customerAppStore: action.payload };
        case ADD_CUSTOMERS:
            const result: CustomerAppStore = Object.assign({}, state, action.payload);
            return result;
        case RESET:
            return Object.assign({}, state, initialCustomerAppStore);
        default:
            return state;
    }
}

