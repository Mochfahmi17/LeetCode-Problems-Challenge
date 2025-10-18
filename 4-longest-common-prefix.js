//* Link = https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   if (!strs.length) return "";

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, prefix.length - 1);
//       if (!prefix) return "";
//     }
//   }

//   return prefix;
// };

//? Soal 1
//* 🧩 Soal Latihan: Longest Common Suffix

//* Deskripsi:
//* Buat fungsi JavaScript bernama longestCommonSuffix yang menerima sebuah array berisi string.
//* Kembalikan akhiran (suffix) terpanjang yang dimiliki semua string di array tersebut.
//* Jika tidak ada akhiran yang sama, kembalikan string kosong "".

//* Hasil kerja latihan 1 :
// function longestCommonSuffix(strs) {
//   if (!strs.length) return "";

//   let suffix = strs[0].split("").reverse().join("");

//   for (let i = 1; i < strs.length; i++) {
//     const ole = strs[i].split("").reverse().join("");
//     while (ole.indexOf(suffix) !== 0) {
//       suffix = suffix.slice(0, suffix.length - 1);
//       if (!suffix) return "";
//     }
//   }
//   return suffix.split("").reverse().join("");
// }
//! Masalah :
//! 1. Kamu melakukan split("").reverse().join("") di setiap iterasi.
//! 2/ Untuk input banyak string panjang, ini agak boros waktu dan memori.

//* Cara yang benar
function longestCommonSuffix(strs) {
  if (!strs.length) return "";

  //* Balik dulu semua string di awal
  const reversed = strs.map((str) => str.split("").reverse().join(""));
  console.log({ reversed }); //? Output: [ 'gninnur', 'gniggoj', 'gniklaw' ]

  let suffix = reversed[0];
  console.log({ suffix }); //? Output: 'gninnur'

  for (let i = 1; i < reversed.length; i++) {
    while (reversed[i].indexOf(suffix) !== 0) {
      suffix = suffix.slice(0, suffix.length - 1);
      if (!suffix) return "";
    }
  }

  //* lalu balik lagi hasilnya
  return suffix.split("").reverse().join(""); //? Output: 'ing'
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonSuffix(["running", "jogging", "walking"]));
