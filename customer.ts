import { User } from './user';


export class Customer extends User {
    taxNumber: number;
    constructor(firstName: string, lastName: string, taxNumber: number) {
        super(firstName, lastName);
        this.taxNumber = taxNumber;
    }
}