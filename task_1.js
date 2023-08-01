/* Task 1: Immutability and Pure Functions

1. Implement a pure function called calculateDiscountedPrice 
that takes an array of products and a discount percentage as arguments. 
The function should return a new array of products with discounted prices based on the given percentage, 
without modifying the original products.
 */

let arr = [
    { id: 1, name: 'Product 0', price: 100 },
    { id: 2, name: 'Product 1', price: 150 },
    { id: 3, name: 'Product 2', price: 3000 },
];

function calculateDiscountedPrice(arrayOfProducts, discountPercentage) {
    const discountedProducts = arrayOfProducts.map((item) => {
        const discount = item.price * discountPercentage / 100;
        return {
            ...item,
            discount: discount
        };
    });
    return discountedProducts;

}

for (let i = 0; i < calculateDiscountedPrice(arr, 10).length; i++) {
    console.log(`Product #${i} = `, calculateDiscountedPrice(arr, 10)[i]);
}


/* 2. Create a pure function called calculateTotalPrice that takes an array of products as an argument. 
The function should return the total price of all products, without modifying the original array or its items. */

function calculateTotalPrice(arrayOfProducts) {
    let sum = 0;
    arrayOfProducts.map(item => sum += item.price);
    return sum
}

console.log('total price of all products =', calculateTotalPrice(arr));