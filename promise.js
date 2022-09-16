const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise(
    (resolve, reject) => {
      const out = (async()=>{
        const dataIXX = await promiseTheaterIXX();
        const dataVGC = await promiseTheaterVGC();
        let total = 0;
        // hitung emosi dari dataIXX
        for(var i in dataIXX) {
          if(dataIXX[i].hasil == emosi){
            total++;
          }
        }
        // hitung emosi dari dataVGC
        for(var i in dataVGC) {
          if(dataVGC[i]. hasil == emosi){
            total++
          }
        }
        return(total)
      })();
      resolve(out)
    }
  );
};

module.exports = {
  promiseOutput,
};
