// Map / словарь / карта:
// - хранит пары ключ:значение
// +: позволяет за константное время добавлять и извлекать объекты в структуру

const map = new Map();
const objKey = { id: 5 };

map.set(objKey, "svvvyt");

console.log(map.get(objKey)); // svvvyt

// Set / множество:
// - хранит только уникальные значения

const set = new Set();

set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);

console.log(set);
