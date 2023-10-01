import './style.css'
import {setActionButtons, setReport, setupList} from './weakSet.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello WeakSet!</h1>
    <div id="action-buttons"></div>
    <ul id="list"></ul>
  </div>
`

setupList(document.querySelector('ul'))
setReport()
setActionButtons(document.getElementById('action-buttons'), document.querySelector('ul'))
