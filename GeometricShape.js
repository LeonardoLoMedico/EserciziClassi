/*Esercizio 2
Scrivere una classe GeometricShape e un main per testarla che contenga:
- le proprieta':name (gianni), type (square), numberOfSides(4), firstSide(3), secondSide(3)
-i metodi: calculatePerimeter(), calculateAreas() getter e stetter per ogni campo 
BONUSd rawShape() -> (su terminale un quadrato con i trattini corrispondenti)
       compareShapes(S1,S2) -> ritorna true se s1 e' maggiore di s2 */

let GeometricShape = class {
  constructor(name, type, numberOfSides, firstSide, secondSide) {
    this.name = name;
    this.type = type;
    this.numberOfSides = numberOfSides;
    this.firstSide = firstSide;
    this.secondSide = secondSide;
  }
  calculetePerimeter() {
    let perimeter = (this.firstSide + this.secondSide) * 2;
    return perimeter;
  }
  calculeteArea() {
    let area = this.firstSide * this.secondSide;
    return area;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }

  getNumerOdSides() {
    return this.numberOfSides;
  }
  setNumberOfSides(nOfSides) {
    this.numberOfSides = nOfSides;
  }

  getFirstSide() {
    return this.firstSide;
  }
  setFirstSide(firstSide) {
    this.firstSide = firstSide;
  }

  getSecondSide() {
    return this.secondSide;
  }
  setSecondSide(secondSide) {
    this.secondSide = secondSide;
  }
  rawShape() {
    let gr = "-";
    let raw = "";
    let dim = this.firstSide * this.secondSide;
    for (let i = 0; i < dim; i++) {
      if (i % this.firstSide == 0 && i != 0) {
        raw = raw + "\n";
      }
      raw = raw + gr + " ";
    }
    return raw;
  }
  compareShapes(s1, s2) {
    if (s1 > s2) {
      return true;
    } else {
      return false;
    }
  }
};
module.exports = GeometricShape;
