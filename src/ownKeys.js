const obj = { x: 42, [Symbol('key')]: 'symbolValue' };

// Using Reflect.ownKeys()
const keys = Reflect.ownKeys(obj);

console.log(keys); // Output: ['x', Symbol(key)]