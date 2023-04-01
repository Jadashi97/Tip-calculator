export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

// logic to prompt user to enter the bill

export function promptUserToEnterTotalBill(){
  let billAmount = document.getElementById("bill").value;
  console.log(billAmount);
  let tipPercentage = document.getElementById("calc").value ;
  console.log(tipPercentage);

  billAmount = Number(billAmount);
  tipPercentage = Number(tipPercentage);

  if(isNaN(billAmount) || billAmount <= 0 || isNaN(tipPercentage) || tipPercentage < 0){
    console.log("Please enter a positive number for the bill amount.");
    // console.log("enter a positive number")
  }else{
    let tipAmount = billAmount *  tipPercentage /100;
    let totalAmount = billAmount + tipAmount;

    // Display the results to the user
    // alert(`Tip amount: $${tipAmount.toFixed(2)}\nTotal amount: $${totalAmount.toFixed(2)}`);

    console.log("calculate the needed tip for this");
  }

}

// export function calculateTip() {
//   var billAmt = document.getElementById("billAmt").value;
//   var tipPerc = document.getElementById("tipPerc").value;

//   var tipAmt = parseFloat(billAmt) * (parseFloat(tipPerc) / 100);
//   var totalAmt = parseFloat(billAmt) + tipAmt;

//   document.getElementById("totalTip").innerHTML = "Tip Amount: $" + tipAmt.toFixed(2) + "<br>Total Amount: $" + totalAmt.toFixed(2);
// }