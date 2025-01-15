const set = new Set();
set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set);

// penting : set dosnt have index so if we try to access set with index it will return undefined
// console.log(set[0]); // output : undefined

// accessing the value of an element
set.forEach(element => console.log(element));

// deleting an element
set.delete(1);
console.log(set);