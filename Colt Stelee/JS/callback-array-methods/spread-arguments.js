// Pembahasan :
// spread argumen menyebarkan elemen2 spreadable (array, string, object) menjadi argumen2 fungsi secara terpisah
const nums = [4, 2, 6, 12, 10, 1, 3, 8, 9, 7, 5, 11];
const max = Math.max(nums)
console.log(max);
// arti : memasukkan array full ke dalam fungsi Math.max(), 
// sehingga fungsi tidak tahu array itu akan dibandingkan dengan apa

// Spread array menyebarkan elemen2 array ke dalam argumen2 fungsi secara terpisah
const max2 = Math.max(...nums)
console.log(max2);

// Spread string menyebarkan elemen2 string ke dalam argumen2 fungsi secara terpisah
const name = 'Jihan Dwi Athanaya';
const letters = [...name];
console.log(letters);

const firstName = 'Jihan';
const lastName = 'Dwi Athanaya';
const fullName = [...firstName, ' ', ...lastName];
const fullName2 = fullName.join('');
console.log(fullName2);

// Spread object menyebarkan elemen2 object ke dalam argumen2 fungsi secara terpisah
const mamal = {
    earLobe : true,
    breastFeed : true,
    hairy : true,
    giveBirth : true,
}
const aves = {
    earLobe : false,
    breastFeed : false,
    hairy : false,
    giveBirth : false,
}
const reptilia = {
    earLobe : false,
    breastFeed : false,
    hairy : false,
    giveBirth : false,
}
const cat = {...mamal, legs : 4};
const whale = {...mamal, legs : 0, canSwim : true};
console.log(cat, whale);

