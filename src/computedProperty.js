const person = {
  firstName: 'John',
  lastName: 'Doe',
};

// Define a read-only property
Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  enumerable: true,
});

console.log(person.fullName); // John Doe