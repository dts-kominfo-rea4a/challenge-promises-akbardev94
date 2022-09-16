const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (params) => {
  const merged = [...await promiseTheaterIXX(), ...await promiseTheaterVGC()];
  let total = 0;
  merged.forEach(hitung => {
    if (hitung.hasil === params) {
      total++;
    }
  });
  return total;
};

module.exports = {
  promiseOutput,
};
