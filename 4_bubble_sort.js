// Сортировка пузырьком

let array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let iterations = 0;

// Суть: пробегаемся по массиву и попарно сравниваем два соседних элемента
// Если предыдущий элемент больше следующего, меняем их местами

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      iterations += 1;
    }
  }
  return arr;
}

console.log(array.length);
console.log(bubbleSort(array)); // O(n^2)
console.log(iterations);
