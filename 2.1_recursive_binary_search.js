// Рекурсивный алгоритм бинарного поиска

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let iterations = 0;

function recursiveBinarySearch(arr, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  iterations += 1;

  if (item === arr[middle]) {
    return middle;
  }
  if (item < arr[middle]) {
    return recursiveBinarySearch(arr, item, 0, middle - 1);
  } else {
    return recursiveBinarySearch(arr, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(array, 11, 0, array.length));
console.log(`iterations = ${iterations}`);

// Сложность: O(log2n)

// только для отсортированных массивов
