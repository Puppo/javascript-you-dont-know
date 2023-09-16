export const propSymbol = Symbol("propName");
export const propSymbolShare = Symbol.for("propName");

console.log(Symbol.keyFor(propSymbol)); // undefined
console.log(Symbol.keyFor(propSymbolShare)); // propName