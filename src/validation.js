const target = { age: 25 };
const handler = {
  set(target, prop, value) {
    if (prop === "age" && (typeof value !== "number" || value < 0 || value > 150)) {
      throw new TypeError("Invalid age value");
    }
    target[prop] = value;
    return true;
  },
};

const proxy = new Proxy(target, handler);
proxy.age = 30; // Works fine
proxy.age = "thirty"; // Throws TypeError: "Invalid age value"