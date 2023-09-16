const weakmap = new WeakMap();
const key = { name: "John Doe" };
weakmap.set(key, "Some value");

const value = weakmap.get(key); // "Some value"

weakmap.delete(key); // true
weakmap.has(key); // false
