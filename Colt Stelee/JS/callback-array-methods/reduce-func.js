const nums = [];
for (let i = 0; i < 10; i++) {
    let a = Math.floor(Math.random() * 20)+1;
    nums.push(a);
}
console.log(nums);

// sintaks  : array.reduce((accumulator, initialValue) => accumulator + initialValue, startingPoint (optional) )
const sum = nums.reduce((accumulator, initialValue) => {
    return accumulator + initialValue;
})
console.log(sum);

const sum2 = nums.reduce((accumulator, initialValue) => accumulator + initialValue, 100);
console.log(sum2);

const min = nums.reduce((pivot, currentValue) => {
    return currentValue < pivot? currentValue : pivot;
})
console.log(min);

const max = nums.reduce((pivot, currentValue) => {
    return currentValue > pivot? currentValue : pivot;
})
console.log(max);