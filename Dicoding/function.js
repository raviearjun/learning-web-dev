// hoisting pada javascript : memanggil fungsinya terlebih dahulu sebelum di deklarasi
console.log(uppercase("hello"));
function uppercase(str) {
    return str.toUpperCase();
}

// function expression
function celciusToFahrenheit(celcius) {
    return 9/5*celcius+32;
}
console.log(celciusToFahrenheit(100));

// memanngil fungsi tanpa memasukkan parameter
console.log(celciusToFahrenheit()); // output : NaN (UNDEFINED)

// menggunakan default parameter ketika memanggil fungsi tanpa menginputkan params
function reamurToCelcius(reamur = 0) {
    return 5/4*reamur;
}
console.log(reamurToCelcius());

// function expression
function multiply(a, b){
    return a*b;
}
function add(a, b){
    return a+b;
}

function calculate(a, b, operation){
    return operation(a,b);
}

const result=calculate(4, 3, add)
console.log(result);