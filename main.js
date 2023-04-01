import './style.css'
import Rasulu from '/Rasulu.png'
import { setupCounter } from './counter.js'
import { promptUserToEnterTotalBill } from './counter.js'
// import { calculateTip } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="${Rasulu}" class="logo" alt="rasulu" />
    
    <h1>Lets Tip Each other For Fun!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <label for="html">Enter Total Bill!</label>
      <br>
      <br>
      <input type="number" id="bill" name="bill" required
       minlength="4" maxlength="8" size="20">
      <button id="calc" type="button"></button>
    </div>
    <div class="card">
      <label for="html">Select Tip!</label><br>
      <br/>
      <button id="calc" type="button">15%</button>
      <button id="calc" type="button">10%</button>
      <button id="calc" type="button">5%</button>
      <button id="calc" type="button">50%</button>
    </div>
    <br/>
  </div>
`

setupCounter(document.querySelector('#counter'))
promptUserToEnterTotalBill(document.querySelector("#totalTip"))

