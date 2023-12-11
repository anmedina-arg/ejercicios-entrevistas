function MaxValue (shares) {
  // Your code here:
  let ganancia = 0
  for (let i = 0; i < shares.length; i++){
    for (let j = 1; j < shares.length; j++){
      let resta = shares[j] - shares[i]
      if (resta > ganancia) {
        ganancia = resta
      }
    }
  }
  return ganancia
}

console.log(MaxValue([4, 3, 2, 5, 11]))
console.log(MaxValue([23, 7, 3, 4, 8, 6]))

module.exports = MaxValue
