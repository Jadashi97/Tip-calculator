import './style.css'
import Rasulu from '/Rasulu.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="${Rasulu}" class="logo" alt="rasulu" />
    
    <h1>Lets Tip Each For Fun!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
