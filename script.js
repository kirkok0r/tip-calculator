
let billTotalInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let peopleDiv = document.getElementById('numberOfPeople')
let personDiv = document.getElementById('perPersonTotal')


// console.log(bill.innerText)

let people = Number(peopleDiv.innerText)

const calculateBill = () => {
  const bill = Number(billTotalInput.value)
  
  const tip = Number(tipInput.value) / 100
  
  const tipAmount = bill*tip
  
  const total = bill + tipAmount

  const perPersonTotal = total / people

  personDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
  people += 1

  peopleDiv.innerText = people

  calculateBill()
}

const decreasePeople = () => {
  if(people <= 1) {
    throw 'Hey! You cannot set number of people less than 1!'
    return
  }
  
  people -= 1
  
  peopleDiv.innerText = people

  calculateBill()
}