let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

let [numPosicion0, ,numPosicion2, , numPosicion4, ...nuevoArray] = arrayNumeros; 

let mascota = {
    nombre: "Zoe",
    tipo: "Perro",
    color: "Blanco",
    raza: "Dogo Argentino"
};

let {nombre, tipo, color, raza} = mascota;

console.log(nombre);