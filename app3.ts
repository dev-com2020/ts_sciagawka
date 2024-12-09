function save<T1,T2>(data: T1, obj: T2) {
    localStorage.setItem('product', JSON.stringify(data));
}

// const mic: Partial<Product> = {
//     name: 'Microphone',
//     price: 100
// }

type Microphone = Pick<Product, 'name' | 'price'>;

const micro: Microphone = {
    name: 'Microphone',
    price: 100
}


// interface Order {
//     products: {
//         [key: string]: number;
//     }
// }
interface Order {
    products: Record<string, number>;
}


function CreationDate(iso: boolean) {
    return function(target: Function){
        return class extends Cart {
        constructor(){
            super();
            const date = new Date();
            this.created = iso ? date.toISOString() : date.toString();
        }
    }
}
}

@CreationDate(true)
class Cart {
    created: string;
    calculateTotal(price: number, @Log quantity: number){
        return price * quantity;
    }
}


function Log(target:any, key: string, index: number){
    console.log(`Params ${index}: ${key}`);
}