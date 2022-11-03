const StringSplitter = require("./StringSplitter");
const stringToSplit= new StringSplitter("ciao");
const bomba = new StringSplitter("bomba");
const bombay = new StringSplitter("bombay");

console.log(stringToSplit.getSplits(2));
console.log(stringToSplit.getAllSplits());
console.log(bomba.getAllSplits());
console.log(bombay.getAllSplits());
let arrayBomba = bomba.getAllSplits();
let arrayBombay = bombay.getAllSplits();

console.log(bomba.compare(arrayBomba,arrayBombay));
console.log(bombay.compare(arrayBombay,arrayBomba));