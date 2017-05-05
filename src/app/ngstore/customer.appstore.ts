import { Customer } from '../models/customer.model';

export class CustomerAppStore {
    constructor(
        public customers?: Customer[],
        public selectedCustomer?: Customer
    ) { }
}

export const initialCustomerAppStore: CustomerAppStore = { customers: new Array(), selectedCustomer: new Customer() };

