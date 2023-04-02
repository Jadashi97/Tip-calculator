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
function getBillAmount() {
  // Get the value of the input field
  var input = document.getElementById("bill");
  var inputValue = input.value;

  // Log the value to the console
  console.log(inputValue);
}

export function promptUserToEnterTotalBill(){
  let billAmount = getBillAmount()

  let tipPercentage = document.getElementById("calc").value;
  console.log(tipPercentage);

  billAmount = Number(billAmount);
  tipPercentage = Number(tipPercentage);

  console.log(computeResult());

}

function computeResult(billAmount, tipPercentage){

  if(isNaN(billAmount) || billAmount <= 0 || isNaN(tipPercentage) || tipPercentage < 0){
    console.log("Please enter a positive number for the bill amount.");
    // console.log("enter a positive number")
  }else{
    let tipAmount = billAmount *  tipPercentage /100;
    let totalAmount = billAmount + tipAmount;

    // Display the results to the user
    totalAmount = (`Tip amount: $${tipAmount.toFixed(2)}\nTotal amount: $${totalAmount.toFixed(2)}`);

  }
}
