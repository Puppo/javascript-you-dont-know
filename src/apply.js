const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;

// Using Reflect.apply()
const result = Reflect.apply(sum, null, numbers);

console.log(result); // Output: 6