const person = {};
Object.defineProperty(
    person,
    'name',
    {
        value: 'Alice',
        writable: false,
        enumerable: true,
        configurable: false
    }
);

console.log(person.name); // Output: Alice