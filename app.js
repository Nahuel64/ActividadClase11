const {importar} = require('./collectibles');

let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys,...bandai,...starWars];

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures(){
        this.figuras.forEach((figura) => {
            console.log(`La figura de ${figura.nombre} es de la marca ${figura.marca}, su precio es de $${figura.precio} y tiene un stock de ${figura.stock}`);
        });
    },
    figuresByBrand(marca){
        return this.figuras.filter((figura) => figura.marca == marca)
    }
};

collectibles.listFigures();

console.log(collectibles.figuresByBrand("Hot Toys"));
console.log(collectibles.figuresByBrand("Bandai"));
console.log(collectibles.figuresByBrand("Star Wars"));
