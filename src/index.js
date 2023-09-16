import { propSymbol as propSymbolM1, propSymbolShare as propSymbolShareM1 } from './my-module-1.js'
import { propSymbol as propSymbolM2, propSymbolShare as propSymbolShareM2 } from './my-module-2.js'

console.log(propSymbolM1 === propSymbolM2); // false

console.log(propSymbolM1 === propSymbolShareM1); // false
console.log(propSymbolM2 === propSymbolShareM2); // false

console.log(propSymbolShareM1 === propSymbolShareM2); // true