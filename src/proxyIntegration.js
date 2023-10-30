const handler = {
  get(target, property) {
      console.log(`Reading property: ${property}`);
      return Reflect.get(target, property);
  }
};
const proxy = new Proxy(someObject, handler);