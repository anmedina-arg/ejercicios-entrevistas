function intersection(arr1, arr2) {
  // Your code here:
  let results = [];
  //comparar los elementos de los arreglos
  /* --> comento esto para poder evaluar la segunda opcion
  for (const num1 of arr1) {
    for (const num2 of arr2) {
      //si num1 === num2
      if (num1 === num2) results.push(num1);
    }
  }
  */
  //return results; --> este return está comentado para que podamos evaluar la segunda opción
  //return (O*n)
  //return arr1.filter(num1 => arr2.includes(num1))

  //segunda opcion
  //un solo  ciclo --> While

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    //si num1 === num2 ? --> pushear a un array result
    if (arr1[i] === arr2[j]) {
      results.push(num1);
      i++;
      j++;
    }
    //tengo dos posibilidades que arr1[i] > arr2[j]
    else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return results;
  //la segunda opcion es O*(n+m)
}

module.exports = intersection;
