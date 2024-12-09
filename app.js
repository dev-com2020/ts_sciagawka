var title = 'Hello World';
var product = "Shoes";
var price = 42.99;
var isAvailable = true;
var categories = ['Clothing', 'Footwear', 'Accessories'];
var categories2 = ['Clothing', 'Footwear', 'Accessories'];
var order = 12345;
var category = 'Clothing';
function getProduct() {
    return product;
}
function getFullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
function addToCart(productId, quantity) {
    var product = {
        productId: productId,
        quantity: quantity !== null && quantity !== void 0 ? quantity : 1
    };
}
