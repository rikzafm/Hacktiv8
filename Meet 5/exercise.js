/**
 * contoh soal buat sebuah objek seorang pasien yg memilik data nama, usia, jenis kelamin, 
 * penyakit dan gejala. satu pasien bisa memiliki beberapa penyakit dan gejala. tampilkan data 
 * pasien dalam index html beserta semua keterangannya */ 
/**
*/

const pasien = {
    namaDepan: 'John',
    namaBelakang: 'Snow',
    usia: 32,
    jenisKelamin: 'Laki-laki',
    penyakit: ['katarak', 'maag', 'OCD'],
    gejala: 'Perut melilit',
}

let body = document.querySelector('body');
let namaDepan = pasien.namaDepan;
let namaBelakang = pasien.namaBelakang;

for (let key in pasien){
    let div = document.createElement('div');
    body.append(div);
    div.append(key + ' : ' + pasien[key]);
}