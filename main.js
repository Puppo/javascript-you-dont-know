import {loadElements} from './FinalizationRegistry.js';

import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Finalization Registry!</h1>
    <ul id="list"></div>
  </div>
`

loadElements(document.getElementById('list'))