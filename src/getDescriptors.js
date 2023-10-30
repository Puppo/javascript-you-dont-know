const myObj = { age: 30 };
const descriptor = Object.getOwnPropertyDescriptor(myObj, 'age');

console.log(descriptor); // Output: { value: 30, writable: true, enumerable: true, configurable: true }