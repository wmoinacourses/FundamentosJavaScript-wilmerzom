export default function wilmerzom(str) {
  let translation = str
  // si la palabra termina en "ar", se le quitan esos dos caracteres.
  if (str.toLowerCase().endsWith('ar')) {
    //.slice permite acotar caracteres
    translation = str.slice(0, -2)
  }
  // si la palabra inicia con z se le a;ade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  // Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion del medio
  if (translation.length >= 10) {
    const firsHalf = translation.slice(0, Math.round(translation.length / 2))
    const secondHalf = translation.slice(Math.round(translation.length / 2))
    translation = firsHalf + '-' + secondHalf
  }
  // intercalar palabra con mayusculas y minisculas si es palindromo.
  const reverse = (str) => str.split('').reverse().join('')

  const minMay = str => str.split('').map(c => str.indexOf(c) % 2 == 0
    ? c.toLowerCase()
    : c.toUpperCase()).join('')

  if (str == reverse(str)) {
    return minMay(str)
  }
  return translation
}
