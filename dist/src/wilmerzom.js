'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wilmerzom;
function wilmerzom(str) {
  var translation = str;
  // si la palabra termina en "ar", se le quitan esos dos caracteres.
  if (str.toLowerCase().endsWith('ar')) {
    //.slice permite acotar caracteres
    translation = str.slice(0, -2);
  }
  // si la palabra inicia con z se le a;ade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion del medio
  if (translation.length >= 10) {
    var firsHalf = translation.slice(0, Math.round(translation.length / 2));
    var secondHalf = translation.slice(Math.round(translation.length / 2));
    translation = firsHalf + '-' + secondHalf;
  }
  // intercalar palabra con mayusculas y minisculas si es palindromo.
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  var minMay = function minMay(str) {
    return str.split('').map(function (c) {
      return str.indexOf(c) % 2 == 0 ? c.toLowerCase() : c.toUpperCase();
    }).join('');
  };

  if (str == reverse(str)) {
    return minMay(str);
  }
  return translation;
}