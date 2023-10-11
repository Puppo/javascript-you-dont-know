import {simulateRemovingElement, startCounter} from './weakRef.js';

import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello WeakRef!</h1>
    <div id="counter"></div>
  </div>
`

startCounter(document.getElementById('counter'))
simulateRemovingElement(document.getElementById('counter'))