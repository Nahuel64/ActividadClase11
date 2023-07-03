const fs = require('fs');

function importar(marca) {
  let datosFiguras = '';

  if (marca == 'Hot Toys') {
    datosFiguras = './datos/figuras1.json';
  } else if (marca == 'Bandai') {
    datosFiguras = './datos/figuras2.json';
  } else if (marca == 'Star Wars') {
    datosFiguras = './datos/figuras3.json';
  } else {
    console.log('Marca no encontrada');
    return [];
  }

  let figuras = [];

  if (fs.existsSync(datosFiguras)) {
    const data = fs.readFileSync(datosFiguras, 'utf8');
    figuras = JSON.parse(data);
  }

  return figuras;
}

module.exports = {importar};