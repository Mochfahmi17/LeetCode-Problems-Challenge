//* Link: https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = String(x);

  const reserved = str.split("").reverse().join("");
  return str === reserved;
};

//? Penjelasan:
//* 1. Ubah angka menjadi string menggunakan `String(x)` dan simpan ke variabel `str`
//*    Tujuannya agar kita bisa membalik urutan angkanya seperti membalik teks.
//
//* 2. Balik isi string tersebut:
//*    - Pertama ubah string menjadi array karakter dengan `split("")`
//*    - Lalu balik urutan array-nya dengan `reverse()`
//*    - Terakhir gabungkan kembali menjadi string dengan `join("")`
//*    Hasil akhir ini disimpan dalam variabel `reserved`, yaitu versi terbalik dari `str`
//
//* 3. Bandingkan apakah `str` sama dengan `reserved`
//*    - Jika sama → berarti angkanya palindrome → return `true`
//*    - Jika berbeda → berarti bukan palindrome → return `false`
//
//* Contoh:
//*    x = 121 → str = "121", reserved = "121" → return true
//*    x = 1141 → str = "1141", reserved = "1411" → return false

console.log(isPalindrome(1000021));
