function SumArray (arr, n) {
  // Your code here:
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++){
      if (arr[i] + arr[j] === n) {
        return true
      }
    }
  }
  return false

}

// console.log(SumArray([1,2,3],4))

module.exports = SumArray
