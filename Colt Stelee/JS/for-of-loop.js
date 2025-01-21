const studentScores = {
    Andi : 80,
    Budi : 90,
    Caca : 85,
    Dedi : 95,
    Eka : 100,
    Fifi : 75,
    Gigi : 85,
    Hana : 90,
    Ika : 80,
    Jaka : 95,
    Kiki : 75,
    Lili : 85,
    Mimi : 90,
    Nana : 95,
    Opa : 80,
    Papi : 75,
    Qiqi : 85,
    Riri : 90,
    Sisi : 95,
    Titi : 80,
    Uuni : 75,
    Vivi : 85,
    Wawa : 90,
    Xixi : 95,
    Yaya : 80,
    Zaza : 75,
  };

// akses key ke dalam array baru
const namaMurid = [];
// for in loop mengakses key dalam objek
for(const key in studentScores){
    namaMurid.push(key);
}
// for of loop hanya bisa digunakan untuk mengakses struktur data iterable, objek iterable iterable
for(const nama of namaMurid){
    console.log(nama);
}
// for in bisa digunakan untuk mengakses baik key maupun value dalam objek
for(const key in studentScores){
    console.log(`${key} : ${studentScores[key]}`); // output : (key studentScores[key]);
}

let totalScores = 0;
let scores = Object.values(studentScores);
for(let score of  scores){
    totalScores += score;
}
console.log(totalScores);
console.log(totalScores/scores.length); 