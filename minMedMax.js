const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  let min = Math.min(n1, n2, n3);
    let max = Math.max(n1, n2, n3);
    let mid = (n1 + n2 + n3) - (min + max);
    return {
        min: min,
        mid: mid,
        max: max
  }
}
module.exports = minMedMax
