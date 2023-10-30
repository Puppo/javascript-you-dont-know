const obj = { x: 42 };

// Using Reflect.deleteProperty()
Reflect.deleteProperty(obj, 'x');

console.log('x' in obj); // Output: false