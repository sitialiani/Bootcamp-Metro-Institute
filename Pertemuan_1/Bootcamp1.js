console.log("Tugas Pertemuan-1 Bootcamp Back-End Siti Aliani Husnah.F");

//Tugas-1 
//Deklarasikan variabel dengan tipe data string, number, dan boolean, lalu tampilkan nilainya di konsol.
console.log("Tugas-1: Variabel dan Tipe Data");
let mahasiswa = {
    nama : "Siti Aliani Husnah.F",
    alamat : {
        kecamatan : "Pariaman Tengah",
        kota : "Pariaman"
    },
}
let angkatan = 2023;
let iskuliah = true;
console.log (mahasiswa);
console.log(`Mahasiswa dengan nama ${mahasiswa['nama']} bertempat tinggal di ${mahasiswa.alamat.kota}, dan mahasiswa angkatan ${angkatan}`);
console.log(`Apakah masih kuliah? ${iskuliah}`);

//Tugas-2
//Buat program yang menghitung dan menampilkan IPK serta jumlah SKS yang boleh diambil oleh seorang mahasiswa di UNAND berdasarkan IPK-nya.
console.log ("Tugas-2: Pengkondisian");
let ipk =3.22;
let sks;
//kondisi sks yang akan didapat sesuai inputan IPK
if (ipk >= 3.25 && ipk <= 4.00){
    sks = 24;
} else if (ipk >= 2.75 && ipk <= 3.27){
    sks = 21;
} else if (ipk >= 2.00 && ipk <= 2.74){
    sks = 18;
} else if (ipk >= 1.50 && ipk <= 1.99){
    sks = 15;
} else if (ipk >= 0.00 && ipk <= 1.49){
    sks = 12;
} else {
    console.log ("Masukkan jumlah IPK yang benar");
}
//menampilkan IPK dan jumlah sks yang dapat diambil
console.log("IPK anda:", ipk);
console.log(`Jumlah maksimal sks yang bisa diambil adalah ${sks} sks`);

//Tugas-3
//Tampilkan angka genap dari 2 hingga 20 menggunakan perulangan for.
console.log("Tugas-3 : Perulangan");
console.log("Angka genap dari 2 hingga 20:")
//membuat perulangan yang menampilkan keseluruhan angka genap range 2-20
for (let a= 2; a <= 20; a += 2){
    console.log(a);
}

//Tugas-4
//Buat fungsi yang menerima angka sebagai parameter untuk menghitung volume salah satu bangun ruang, dan kembalikan hasil volumenya.
console.log("Tugas-4 : Fungsi");
function volumeBola(jariJari){
    return(4 / 3) * Math.PI * jariJari ** 3;
}
//contoh
let jariJari = 5;
console.log(`Volume bola yang dihasilkan dari jari-jari ${jariJari} adalah ${volumeBola(jariJari)}`)

//Tugas-5
//Buat array berisi beberapa angka, hitung dan tampilkan jumlah semua angka dalam array tersebut.
console.log("Tugas-5: Array");
let angka = [5, 3, 7, 10, 6, 2];
let total = 0;
//menggunakan metodeforEach()
angka.forEach(num => total += num);
console.log("Jumlah di dalam array:", total);




