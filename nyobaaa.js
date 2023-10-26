//FUNCTION DEFINITION

function tambah(a, b) {
    return a + b;
}
let hasil = tambah(4, 5);
//console.log(hasil);

//Dalam contoh di atas, kita memiliki fungsi bernama tambah yang mengambil dua parameter a dan b, 
// dan mengembalikan hasil penjumlahan dari kedua parameter tersebut. Kemudian, kita memanggil 
// fungsi tersebut dengan argumen 4 dan 5 yang menghasilkan output 9 ketika nilai tersebut 
// dicetak ke konsol.

//FUNCTION PARAMETERS
// Fungsi sederhana yang menggabungkan dua string
function string(a, b) {
    return a + 'aku ' + b;
}
let jadi = string('Halo ', 'via ');
//console.log(jadi);

// Dalam contoh di atas, string adalah fungsi yang mengambil dua parameter a 
// dan b. Saat fungsi dipanggil, kedua argumen dilewatkan ke parameter fungsi, yang 
// kemudian digabungkan dengan menggunakan operator penggabungan string ('+'). Hasil 
// penggabungan string tersebut kemudian dikembalikan oleh fungsi.
// Ketika fungsi dipanggil dengan argumen 'Halo' dan 'semua', 
// hasilnya adalah 'Halo semua', yang kemudian dicetak ke konsol.

//FUNCTION INVOCATION
// Definisi fungsi sederhana yang mencetak pesan ke konsol
function sapa() {
    console.log('Halo! Selamat datang.');
}
//sapa();

//FUNCTION CALL
// Definisikan objek
// let person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   // Definisikan objek lain dengan properti firstName dan lastName
//   let person1 = {
//     firstName: "Alisha",
//     lastName: "Khansa"
//   }
//   // Gunakan metode call untuk memanggil fungsi fullName dari objek person, 
//   // tetapi gunakan objek person1 sebagai konteksnya
//   let fullName = person.fullName.call(person1);
//   //console.log(fullName);  

//FUNCTION APPLY
// Definisikan objek
// let person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   // Definisikan objek lain dengan properti firstName dan lastName
//   let person1 = {
//     firstName: "Patricia",
//     lastName: "Ester"
//   }
  
//   // Gunakan metode apply untuk memanggil fungsi fullName dari objek person, 
//   //tetapi gunakan objek person1 sebagai konteksnya dan berikan argumen city dan country
//   let fullName = person.fullName.apply(person1, [" Bogor", " Indonesia"]);
  
//   console.log(fullName);

//FUNCTION BIND
//Definisikan fungsi
let greet = function() {
    return `Halo, ${this.name}! Selamat datang di ${this.city}.`;
};

// Definisikan objek
let person = {
    name: 'Patricia ',
    city: 'Malaysia '
};

// Gunakan metode bind untuk mengikat fungsi greet dengan konteks objek person
let greetingMessage = greet.bind(person);

// Panggil fungsi yang sudah di-bind
console.log(greetingMessage());



  