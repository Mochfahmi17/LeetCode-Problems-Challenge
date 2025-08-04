//* Link: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  return total;
};

//? Penjelasan:
//* 1. Buat objek `romanMap` yang menyimpan nilai numerik untuk setiap simbol Romawi.
//*    Contoh: 'I' = 1, 'V' = 5, 'X' = 10, dst.
//
//* 2. Inisialisasi `total` dengan 0, sebagai penampung nilai akhir hasil konversi.
//
//* 3. Looping setiap karakter dalam string `s`:
//*    - Ambil nilai angka dari karakter sekarang (`curr`) dan karakter berikutnya (`next`) menggunakan `romanMap`.
//
//* 4. Logika utama:
//*    - Jika `curr < next`, berarti ini pasangan pengurangan (seperti IV, IX, XL, dll), jadi kurangi nilai `curr` dari `total`.
//*    - Jika tidak, cukup tambahkan `curr` ke `total`.
//
//* 5. Setelah selesai loop, kembalikan nilai `total` sebagai hasil akhir.
//
//* Contoh:
//*    s = "MCMXCIV"
//*    M=1000, C=100, M=1000, X=10, C=100, I=1, V=5
//*    Step:
//*      - 1000 (M)       → +1000
//*      - 100 (C) < 1000 → -100
//*      - 1000 (M)       → +1000
//*      - 10 (X) < 100   → -10
//*      - 100 (C)        → +100
//*      - 1 (I) < 5      → -1
//*      - 5 (V)          → +5
//*    Total = 1994 ✅

console.log(romanToInt("MCMXCIV"));
