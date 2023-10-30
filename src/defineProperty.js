const obj = {};

// Using Reflect.defineProperty()
Reflect.defineProperty(obj, 'x', { value: 42, writable: false });

console.log(obj.x); // Output: 42