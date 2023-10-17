export function loadElements(listEl) {
  const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Clean up: ${heldValue}`);
  });
  
  function createObject(id) {
    const li = document.createElement('li');
    li.id = `object-${id}`;
    li.textContent = `Object ${id}`;
    listEl.appendChild(li);
    registry.register(li, `Object ${id}`);
    console.log(`Created object ${id}`);
  }

  let id = 0;
  setInterval(() => {
    if (id) {
      document.getElementById(`object-${id}`).remove();
    }
    createObject(++id);
  }, 3000);
  // After some time, when the object is garbage collected, the console will log: "Clean up: Object {index}"
}