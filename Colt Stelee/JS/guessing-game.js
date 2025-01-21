let maximum  =  parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum =  parseInt(prompt("Enter the maximum number!"));
}

const target  = Math.floor(Math.random()*maximum)+1;
guess = prompt("Enter your first guess!");
let attempts = 1;

while(parseInt(guess) !== target){
    if(guess === 'q'){
        break;
    }
    if(guess > target){
        guess = prompt("Too high! Enter a new guess!");
    }else if(guess < target){
        guess = prompt("Too low! Enter a new guess!");
    }else{
        guess = prompt("Enter a valid number!");
    }
    attempts++;
}
if(guess === 'q'){
    console.log("You quit!");
}else{
    console.log(`You got it! It took you ${attempts} guesses!`);
}
