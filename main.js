import {startCounter} from './weakRef.js';

import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello WeakRef!</h1>
    <div id="counter"></div>
  </div>
`

startCounter(document.getElementById('counter'))

setTimeout(() => {
  document.getElementById('counter').remove()
  console.log('Removing counter element')
}, 7000);
