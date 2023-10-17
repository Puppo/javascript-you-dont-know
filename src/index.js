const target = { name: "John", surname: "Doe", fullName: "John Doe" };
const handler = {
  get(target, prop) {
    return target[prop] ? target[prop].toUpperCase() : "Property not found";
  },
  set(target, prop, value) {
    if (prop === 'name') {
      target.fullName = value + ' ' + target.surname;
    }
    if (prop === 'surname') {
      target.fullName = target.name + ' ' + value;
    }
    if (prop === 'fullName') {
      throw new Error('fullName is not writable')
    }
    target[prop] = value;
    return true;
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.fullName); // Output: "JOHN DOE"
console.log(proxy.nonexistent); // Output: "Property not found"
proxy.name = 'Jane';
console.log(proxy.fullName); // Output: "Jane Doe"
proxy.surname = 'Smith';
console.log(proxy.fullName); // Output: "Jane Smith"
proxy.fullName = 'Tom Smith'; // Error: fullName is not writable