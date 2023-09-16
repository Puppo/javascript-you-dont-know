let obj = {
  foo: {
    bar: 'baz'
  }
};

const ref = new WeakRef(obj);

console.log(ref.deref()); // 1

obj = null;

console.log(ref.deref()); // undefined
