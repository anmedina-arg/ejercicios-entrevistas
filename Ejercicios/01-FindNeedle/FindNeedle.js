const FindNeedle = (haystack, needle) => {
  // iteramos sobre el haystack
  for (
    let haystackIndex = 0;
    haystackIndex < haystack.length;
    haystackIndex += 1
  ) {
    // comenzamos a iterar sobre el needle
    for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1) {
      // comparamos la letra del needle en la que estamos con la letra del haystack
      // cuando no hay match cortamos de comparar el needle
      if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
      // si terminamos de recorrer la needle devolvemos el haystackIndex
      if (needleIndex + 1 === needle.length) return haystackIndex;
    }
  }
  // una vez que termina el loop y no encontramos match devolvemos -1
  return -1;
};

console.log(FindNeedle("react-redux", "redax")); //(6)
// console.log(FindNeedle("pinky", "puntual")); //(-1)
// console.log(FindNeedle("rereredux", "reredux")); //(2)

module.exports = FindNeedle;
