function categorizeNumber(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error('Input harus berupa bilangan bulat');
  }else if(num < 0){
    return 'Negatif';
  }else if(num == 0){
    return 'Nol';
  }else if(findPrime(num)){
    return 'Prima';
  }else if(num % 2 == 0){
    return 'Genap';
  }else if(num % 2 != 0){
    return 'Ganjil';
  }
}
function findPrime(num) {
    for(let i=2; i<Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
