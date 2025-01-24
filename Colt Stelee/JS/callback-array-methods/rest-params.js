function sum(...nums){
    // deretan angka bukan array yang dijadikan parameter akan otomatis dijadikan array
    return nums.reduce((total, value) => total + value);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55