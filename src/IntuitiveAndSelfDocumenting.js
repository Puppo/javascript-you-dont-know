const obj = {
    x: 42,
    [Symbol('key')]: 'symbolValue'
}

Reflect.ownKeys(obj)
//vs 
Object.getOwnPropertyNames(obj)
  .concat(Object.getOwnPropertySymbols(obj))