// map declaration
const productsMap = new Map([
    ['moisturizer', 86],
    ['sunscreen', 54],
    ['milk cleanser', 14],
    ['serum', 92]
]);
console.log(productsMap); // mapping the first element of each array to the new array

// saving new element to the array
productsMap.set('body_lotion', 40);
console.log(productsMap);

// accessing the value of an element
console.log(productsMap.get('serum'))

// deleting an element
productsMap.delete('sunscreen');
console.log(productsMap);