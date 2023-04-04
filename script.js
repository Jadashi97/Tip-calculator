

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const perPersonTotal = document.getElementById("perPersonTotal")
const numberOfPeopleDiv = document.getElementById("numberOfPeople");


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);
// console.log(numberOfPeople);


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value);
  
    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercentage = Number(tipInput.value)/100;

    // get the total tip amount
    const totalTipAmount = bill * tipPercentage;
    // console.log(totalTipAmount);
  
    // calculate the total (tip amount + bill)
    const totalAmount = totalTipAmount + bill;
//   console.log(totalAmount);

    // calculate the per person total (total divided by number of people)
    let totalPerPerson = totalAmount / numberOfPeople;
    // console.log({totalPerPerson});
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerHTML = `$${totalPerPerson.toFixed(2)}`;
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
        let addPeople = numberOfPeople += 1;
        // console.log(addPeople);
    // update the DOM with the new number of people

        numberOfPeopleDiv.innerHTML = addPeople;
    // calculate the bill based on the new number of people
        calculateBill();
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
        if(numberOfPeopleDiv <= 1){
            return
        }
    // decrement the amount of people
        let decrementPeople = numberOfPeople -= 1; 
    // update the DOM with the new number of people
        numberOfPeopleDiv.innerHTML = decrementPeople;
  
    // calculate the bill based on the new number of people
        calculateBill();
  }