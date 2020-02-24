//Car loan
function carLoanPayment (p, r, n) {
   return p * i / (1 - (Math.pow(1/(1 + r), n)));}
  
nextLoan = "Yes"
option = " "

let principleForCar = " "
let interestForCar = " "
let monthsForCar = " "
let interestForCarFinished = " "
let carLoanTotal = " "


While (nextLoan = "Yes") {
  decision = prompt("Would you like a Car or Home loan?")
  
  if (decision = "car" || decision = "Car") {
      principleForCar = parseInt(prompt("Enter the amount of the principle ex: 20000"))
      interestForCar = parseFloat(prompt("Enter interest as a decimal ex: 4.3"))
      monthsForCar = parseInt(prompt("Enter the amont of months for the loan ex: 35"))
      interestForCarFinished = ((interestForCar/12)/100)
      
      carLoanTotal = carLoanPayment(principleForCar, interestForCar, monthsForCar)
      alert(`A car loan for ${carLoanTotal} over ${monthsForCar} months at ${interestForCar}% interest would have a monthly payment of $${carLoanTotal}`)
      }