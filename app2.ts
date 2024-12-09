class User {

    constructor(private firstName:string, private lastName:string, private isActive:boolean = true) 
    {}

    getFullname(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    get active():boolean {
      return this.isActive;
    }
  }

  class Customer extends User {
    constructor(firstName:string, lastName:string, private age:number) {
      super(firstName, lastName);
    }
  }

interface Product {
    name: string;
    price: number;
    description?: string;
    getCategories: () => string[];
  }

class Keyboard implements Product {
  name: string = 'Keyboard';
  price: number = 100;
  getCategories(): string[] {
    return ['Electronics', 'Hardware'];
  }
}


// const product_ = {
//   name: 'Keyboard',
//   price: 100
// } as Product;