const GeometricShape = require("./GeometricShape");

let square = new GeometricShape("pippo", "square", 4, 3, 3);
let square1 = new GeometricShape("paperino", "square", 4, 4, 5);

console.log(square.calculetePerimeter());
let areaSquare = square.calculeteArea();
let areaSquare1 = square1.calculeteArea();
console.log(square);
square.setName("pluto");
console.log(square);
console.log();
console.log(square.rawShape());
console.log();
console.log(
  square.compareShapes(areaSquare, areaSquare1) +
    " " +
    square1.compareShapes(areaSquare1, areaSquare)
);
