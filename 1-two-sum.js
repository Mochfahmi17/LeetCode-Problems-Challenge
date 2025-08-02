//* Link: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (map.hasOwnProperty(compliment)) {
      return [map[compliment], i];
    }

    map[nums[i]] = i;
  }
};

//? Penjelasan:
//* 1. Kita buat object kosong `map = {}` untuk menyimpan angka yang sudah dilihat,
//*    beserta indeksnya. Ini akan berguna untuk mencari pasangan angka yang dijumlahkan jadi target.
//
//* 2. Lakukan loop pada array `nums` menggunakan for loop:
//*    - Untuk setiap angka di array, kita hitung selisihnya dengan target (`compliment = target - nums[i]`).
//*    - Tujuannya: cari apakah sudah ada angka sebelumnya yang jika dijumlahkan dengan `nums[i]` akan sama dengan `target`.
//
//* 3. Periksa apakah angka pelengkap (`compliment`) sudah pernah muncul (ada di `map`):
//*    - Jika `map.hasOwnProperty(compliment)` bernilai true:
//*      berarti sudah ketemu 2 angka yang jika dijumlahkan = target
//*      maka langsung `return [map[compliment], i]` → yaitu indeks dari angka pelengkap & angka sekarang
//*
//* 4. Jika belum ketemu, simpan `nums[i]` ke dalam map dengan format:
//*    `map[nums[i]] = i` → menyimpan angka dan indeksnya untuk dicek nanti oleh angka selanjutnya.
//
//* Contoh:
//*    Input: nums = [3, 2, 4], target = 6
//*    Iterasi ke-0: nums[0] = 3, compliment = 3 → belum ada di map → simpan 3:0
//*    Iterasi ke-1: nums[1] = 2, compliment = 4 → belum ada di map → simpan 2:1
//*    Iterasi ke-2: nums[2] = 4, compliment = 2 → ada di map → return [1, 2]

console.log(twoSum([3, 2, 4], 6));
