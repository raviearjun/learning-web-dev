function greet(firstname, lastname){
    console.log(`hello, ${firstname} ${lastname[0]}.`)
}

function repeat(string, number){
    for(let i=1; i<=number; i++){
        console.log(string);
    }
}

greet('ravie', 'arjun');
repeat('ravie', 4);``

function add(a, b){
    if(typeof(a) !== 'number'|| typeof(b) !== 'number'){
        return false;
    }
    return a + b;
}

// function expression : we define a function and assign it to a variable
// how to call it? we use the variable name
const addName = function(a, b){
    return a + b;
}
console.log(addName('Ravie', 'Arjun')); // NaN`

// HIGHER ORDER FUNCTION
// explanation : HOF adalah fungsi yang memanggil fungsi lain sebagai argumen atau mengembalikan fungsi lain sebagai nilai kembali
// example :
let numEggs = 1;
function callTwice(func){
    func();
    func();
}
function addEggs(){
    numEggs++;
}
callTwice(addEggs);
console.log(numEggs); // 3

