export function startCounter(counterEl) {
  let counter = 0
  let ref = new WeakRef(counterEl)
  const id = setInterval(() => {
    const el = ref.deref()
    if (!el) {
      console.log('Element is gone!')
      clearInterval(id)
      ref = null
      return
    }
    console.log('Element still alive')
    el.textContent = `Counter: ${++counter}`
  }, 1000)
}

export function simulateRemovingElement(counterEl) {
  setTimeout(() => {
    counterEl.remove()
    console.log('Removing counter element')
  }, 7000);
}