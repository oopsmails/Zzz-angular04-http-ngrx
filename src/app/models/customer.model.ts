export class Customer {
    constructor(
        public id?: string,
        public email?: string,
        public firstName?: string,
        public lastName?: boolean
    ) { }
}

export const initialCustomers: Customer[] = new Array();

