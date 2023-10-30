const animal = {};
Object.defineProperties(animal, {
    name: {
        value: 'Dog',
        writable: true
    },
    sound: {
        value: 'Woof',
        enumerable: false
    }
});

console.log(animal.name); // Output: Dog
console.log(animal.sound); // Output: Woof