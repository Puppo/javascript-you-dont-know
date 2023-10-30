const obj = { x: 42 };

// Using Reflect.set()
Reflect.set(obj, 'x', 13);

console.log(obj.x); // Output: 13