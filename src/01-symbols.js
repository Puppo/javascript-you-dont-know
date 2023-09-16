const propSymbol = Symbol("propName");
const propSymbol2 = Symbol("propName");

console.log(propSymbol === propSymbol2) // false

const obj = {
  [propSymbol]: "propSymbol",
  [propSymbol2]: "propSymbol2"
}
console.log(JSON.stringify(obj)); // {}
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []
for (const key in obj) {
  console.log(key); // nothing
}

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(propName), Symbol(propName) ]

