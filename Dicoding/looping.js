const food = ['nasi goreng', 'sate', 'soto', 'bakso', 'rendang', 'nasi godog', 'gudeg', 'pecel', 'rujak', 'sambal goreng ati'];
// for loop
console.log('makanan yang ada di warung pak slamet');
for(let i=0; i<food.length; i++){
    console.log('makanan ke', i, 'adalah ', food[i]);
}

// for in
console.log('\nNasi goreng pak slamet (for in looping)');
nasgor = {
    nama : 'nasi goreng',
    langganan : 'pak slamet',
    harga : 15000,
    lokasi : 'pandega marta',
    rasa : 'enak'
}
for(let property in nasgor){
    console.log(`${property} : ${nasgor[property]}`);
}

// for of
console.log('\nmakanan yang ada di warung pak slamet (for of looping)');
for(let makanan of food){
    console.log(makanan);
}

// while loop
console.log('\nmakanan yang ada di warung pak slamet (while looping)');
let i = 0;
while(i<food.length){
    console.log('makanan ke', i, 'adalah ', food[i]);
    i++;
}
// notes : jangan lupa untuk menambahkan increment atau decrement pada while loop agar tidak terjadi infinite loop

//do while loop
console.log('\nmakanan yang ada di warung pak slamet (do while looping)');
let j = 0;
do{
    console.log('makanan ke', j, 'adalah ', food[j]);
    j++;
}while(j<food.length);

// contineue dan break
console.log('\nmakanan yang ada di warung pak slamet (continue dan break)');
for(let k=0; k<food.length; k++){
    if(k==3){
        continue;
    }
    if(k==6){
        break;
    }
    console.log('makanan ke', k, 'adalah ', food[k]);
}
// notes : continue digunakan untuk melewati satu iterasi, sedangkan break digunakan untuk menghentikan looping
