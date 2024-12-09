const title = 'Hello World';
const product: string = "Shoes";
const price: number = 42.99;
const isAvailable: boolean = true;
const categories: string[] = ['Clothing', 'Footwear', 'Accessories'];
const categories2: Array<string> = ['Clothing', 'Footwear', 'Accessories'];
let order: any = 12345;
type Categories = 'Clothing' | 'Footwear' | 'Accessories';
const category: Categories = 'Clothing';

function getProduct(): string {
  return product;
}

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
function addToCart(productId: number, quantity?: number) {
  const product = {
    productId,
    quantity: quantity ?? 1
  }
}