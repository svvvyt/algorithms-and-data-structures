// Дерево - рекурсивная структура данных, где каждый узел является также деревом;
// Каждый узел данного дерева - его поддерево

// v = value, значение узла
// c = children, дети

const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

// Рекурсивный обход дерева n-размерности:

const recursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    // базовый случай рекурсии - узел не имеет потомков
    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });
  return sum;
};

// Итеративный обход дерева n-размерности:

const iteration = (tree) => {
  if (!tree.length) {
    return 0;
  }

  let sum = 0; // сумма всех значений узлов
  let stack = []; // LIFO: Last in, first out

  tree.forEach((node) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }
  return sum;
};
