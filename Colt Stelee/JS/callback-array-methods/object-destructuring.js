const mahasiswa = {
    nama : 'arjun',
    umur : 20,
    email : 'arjun@arjun',
    jurusan : 'informatika',
    alamat : {
        kota : 'Bandung',
        kodepos : '40123',
        provinsi : 'Jawa Barat'
    },
    pekerjaan : 'programmer',
    makan : function(makanan){
        console.log(`Halo, ${this.nama} sedang makan ${makanan}.`);
    },
    tidur : function(jam){
        console.log(`Halo, ${this.nama} sedang tidur ${jam} jam.`);
    }
}

const {nama, umur, email, jurusan, alamat, pekerjaan} = mahasiswa;
const {provinsi, kota, kodepos, negara = 'Indonesia' /*default value*/} = alamat;
console.log(nama, umur, email, jurusan, provinsi, kota, kodepos, negara, pekerjaan);

function diri({nama, umur, email, jurusan, alamat, pekerjaan}){
    return `Halo, ${nama}, umur saya ${umur}, email saya ${email}, jurusan saya ${jurusan}, alamat saya ${alamat.kota}, pekerjaan saya ${pekerjaan}`
}
console.log(diri(mahasiswa)); // {nama, umur, ...} = mahasiswa
// kita bisa mengoperasikan ekspresi {value1, value2, ...} = obejct ke dalam parameeeter function

//