const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Clean up: ${heldValue}`);
});

function createObject() {
  const obj = {id: 1};
  registry.register(obj, "Object 1");
}

createObject();
// After some time, when the object is garbage collected, the console will log: "Clean up: Object 1"