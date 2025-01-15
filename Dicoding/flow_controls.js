// codnitionals
let age = 18;

// if else
console.log('Ini adalah contoh if else');
if (age >= 18) {
    console.log('You are old enough');
} else {
    console.log('You are still young');
}

// ternary oeprator
console.log('Ini adalah contoh ternary operator');
const category = age >= 18? 'adult' : 'underage';
console.log(category);

// switch case
console.log('Ini adalah contoh switch case');
switch (category) {
    case 'adult':
        console.log('You are an adult');
        break;
    case 'underage':
        console.log('You are underage');
        break;
    default:
        console.log('Invalid category');
}

// notes : jangan lupakan break pada setiap case pada switch case