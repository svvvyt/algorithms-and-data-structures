// Быстрая сортировка / Сортировка Хоара
// Рекурсивный алгоритм

let array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let iterations = 0;

// суть: "Разделяй и властвуй"

// 1) делим массив на подмассивы, каждый раз выбирая опорный элемент
// (его можно выбрать случайно, но чаще всего берут центральный)

// 2) пробегаемся по массиву, и все элементы, которые меньше опорного - добавляем в один массив
// и все элементы больше опорного - в другой массив

// 3) для каждого из этих массивов выполняется точно такая же операция

// 4) делаем до тех пор, пока длина массива не станет равна 1

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let baseIndex = Math.floor(arr.length / 2);
  let base = arr[baseIndex];

  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    iterations += 1;
    if (i === baseIndex) {
      continue;
    }
    if (arr[i] < base) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), base, ...quickSort(greater)];
}

console.log(array.length);
console.log(quickSort(array));
console.log(iterations); // O(log2n * n)
