const sampleArray = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let iterations = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    iterations += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(sampleArray, 8));
console.log(`iterations = ${iterations}`);
// O(n)
