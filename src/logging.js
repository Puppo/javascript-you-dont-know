const target = { message: "Hello, World!" };
const handler = {
  get(target, prop) {
    console.log(`Accessing property "${prop}"`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting property "${prop}" to "${value}"`);
    target[prop] = value;
    return true;
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // Logs: "Accessing property "message"" and outputs: "Hello, World!"
proxy.message = "Goodbye, World!"; // Logs: "Setting property "message" to "Goodbye, World!""