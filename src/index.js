let obj = {
  foo: {
    bar: 'baz'
  }
};

const ref = new WeakRef(obj);

console.log(ref.deref()); // { foo: { bar: 'baz' } }

obj = null;

console.log(ref.deref()); // undefined
