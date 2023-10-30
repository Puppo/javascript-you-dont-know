const obj = { x: 42, y: 'hello' };

// Using Reflect.get()
const value = Reflect.get(obj, 'x');

console.log(value); // Output: 42