/*Esercizio 3
Scrivere una classe StringSplitter e un main per testarla che contenga:
- una proprieta' stringa toBeSplit
- un metodo getSplits(numberOfLetters) che preso un numero ritorni tutte 
le sottostringhe della stringa campo (toBeSplit)esempio:
                                            ciao
    instantiatedObjectName.getSplits(2); // ci, ao, ia

-un metodo che ritorna tutte le sottostringhe in un array getAllSplits() 
(se non riuscite a prenderle tutte tutte andate oltre non ci morite dietro)

BONUS:scrivere un metodo che prende 2 oggetti e ritorna un array con 
( SUPER BONUS se tutte) le sottostringhe presenti in entrambe 
esempio bomba bombay -> [bo, bom, bomba, om ... ecc ...]*/

let StringSplitter = class {
  constructor(toBeSplit) {
    this.toBeSplit = toBeSplit;
  }
  getSplits(numberOfLetters) {
    let result = " ";
    for (let i = 0; i <= 2; i++) {
      result = result + this.toBeSplit.substr(i, 2) + " ,";
    }
    return result;
  }
  getAllSplits() {
    let result = [];
    for (let i = 0; i < this.toBeSplit.length; i++) {
      for (let j = i + 1; j <= this.toBeSplit.length; j++) {
        // result = result + this.toBeSplit.substring(i, j) + " ,";
        result.push(this.toBeSplit.substring(i, j));
      }
    }
    return result;
  }
  compare(string1, string2) {
    
    let result = string1.filter(element => string2.includes(element) );
    
    /*if (string1.length < string2.length) {
        dim = string1.length;
    }else{     
        dim = string2.length
    }
      console.log("dim " + dim);
      for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++)
          if (string1[i] == string2[j]) {
            equal.push(string1[i]);
          }
      }*/
    
    return result;
  }

};
module.exports = StringSplitter;