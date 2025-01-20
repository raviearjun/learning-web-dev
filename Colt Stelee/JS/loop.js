const secretCode = 'UGMwangi23';
let userInput = '';

while(userInput !== secretCode){
    userInput = prompt("Enter the secret code : ");
}
alert('Selamat, Anda berhasil!');

let userInput2 = prompt("Enter the secret code : ");
while(true){
    if(userInput2 !== 'stop copying me'){
        userInput2 = prompt(userInput2);
    }
    else{
        alert('OK, you win!');
        break;
    }
}