// RETURN FUNCTION
// explanation : kita bisa mengembalikan fungsi dari fungsi lain
// example :
function myMysteryFunction(){
    const random = Math.random();
    if(random > 0.5){
        return function(){
            console.log('Congrats, I am good!');
        }
    }else{
        return function(){
            console.log('Sorry, I am bad!');
        }
    }
}
const returnedFunction = myMysteryFunction();
returnedFunction();

// Function 2 : Production Function
function makeBetweenFunc(min, max){
    return function(num){
        return num >=min && num <= max;
    }
}
const isChild = makeBetweenFunc(0, 10);
const isTeen = makeBetweenFunc(13, 19);
const isAdult = makeBetweenFunc(20, 65);
console.log(isChild(9)); // true
console.log(isTeen(15)); // true
console.log(isAdult(30)); // true