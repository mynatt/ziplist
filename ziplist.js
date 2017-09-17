function zipList(arr1, arr2) {
  if (arr1.length !== arr2.length) return null;
  const { length } = arr1;
  const newarr = [];
  for (let i = 0; i < length; i++) {
    newarr.push(arr1[i]);
    newarr.push(arr2[i]);
  }
  return newarr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
