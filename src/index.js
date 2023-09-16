const weakSet = new WeakSet();

const obj1 = {};
const obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false