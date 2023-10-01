// Create a WeakSet to store DOM elements
const liElements = new WeakSet();
let elementCount = 0;

// Define a function to add elements to the DOM and the WeakSet
function addLiToDOM(ul, value) {
  const id = `element${value}`;
  const element = document.createElement("li");
  element.id = id;
  element.innerHTML = `<span>${value}</span>
    <button>Remove</button>`;
  ul.appendChild(element);

  liElements.add(element);
}

export function setupList(ul) {
    ul.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            const li = event.target.parentElement;
            li.remove();
            // Math.random() > 0.5 && liElements.delete(li);
        }
    });


    // Add elements to the DOM and the WeakSet
    addLiToDOM(ul, ++elementCount);
    addLiToDOM(ul, ++elementCount);
    addLiToDOM(ul, ++elementCount);
}

export function setReport() {
  let reportNumber = 0;
  setInterval(() => {
    console.log(`report ${++reportNumber}`, liElements)
  }, 1000)
}

export function setActionButtons(element, ul) {
  const button = document.createElement("button");
  button.innerHTML = "Add Element";
  button.addEventListener("click", function () {
    addLiToDOM(ul, ++elementCount);
  });
  element.appendChild(button);
}