import './style.css'
import Rasulu from '/Rasulu.png'
import { setupCounter } from './counter.js'
import { promptUserToEnterTotalBill } from './counter.js'
import {getBillAmount} from "./counter";
// import { calculateTip } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="${Rasulu}" class="logo" alt="rasulu" />
    
    <h1>Lets Tip Each other For Fun!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <form id="form-result">
      <div class="card">
        <label for="html">Enter Bill!</label>
        <br>
        <br>
        <input type="number" id="bill" name="bill" required
        minlength="4" maxlength="8" size="20">
        <button id="bill" type="button">Enter</button>
      </div>
      <div class="card">
        <label for="html">Select Tip!</label><br>
        <br/>
        <button id="calc" type="button">15%</button>
        <button id="calc" type="button">10%</button>
        <button id="calc" type="button">5%</button>
        <button id="calc" type="button">50%</button>
      </div>
    </form>
    <br/>
    <div class="card">
        <h2 id="calc-result">Total Bill:</h2>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
promptUserToEnterTotalBill(document.querySelector("#bill"));
getBillAmount(document.querySelector("#bill"))

