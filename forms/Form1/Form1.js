//Car loan
function carLoanPayment (p, r, n) {
   return p * r / (1 - (Math.pow(1/(1 + r), n)));}
  
 function homeLoanPayment(p, i, n) {
   return p * r / (1 - (Math.pow(1/(1 + r), n)));}


nextLoan = "Yes"
option = " "

let principleForCar = " "
let interestForCar = " "
let monthsForCar = " "
let interestForCarFinished = " "
let carLoanTotal = " "

let principleForHome = " "
let interestForHome = " "
let yearsForHome = " "
let interestForHomeFinished = " "
let yearsForHomeFinished = " "
let homeLoanTotal = " "
let finalLoop = " "

While (nextLoan = "Yes") {
  decision = prompt("Would you like a Car or Home loan?")
  
  if (decision = "car" || decision = "Car") {
      principleForCar = parseInt(prompt("Enter the amount of the principle ex: 20000"))
      interestForCar = parseFloat(prompt("Enter interest as a decimal ex: 4.3"))
      monthsForCar = parseInt(prompt("Enter the amount of months for the loan ex: 35"))
      interestForCarFinished = ((interestForCar/12)/100)
      
      carLoanTotal = carLoanPayment(principleForCar, interestForCar, monthsForCar)
      alert(`A car loan for ${carLoanTotal} over ${monthsForCar} months at ${interestForCar}% interest would have a monthly payment of $${carLoanTotal}`)
    
  } else if (choice =='Home' || choice == 'home') {
       principleForHome = parseInt(prompt(" Enter the amount of the principle ex: 450000"))
       interestForHome = parseFloat(prompt("Enter the interest as a decimal ex: 4.3"))
       yearsForHome = parseInt(prompt("Enter the amount of years of the loan ex. 30"))
       interestForHomeFinished = ((interestHome/12)/100)
       yearsForHomeFinished = yearsForHome * 12

       homeLoanAmount = homeLoanPayment(principleForHome, interestForHomeFinished, yearsForHomeFinished)
       alert(`A home loan for $${principleForHome} over ${yearsForHome} years at ${interestForHome}% interest would have a monthly payment of $${homeLoanAmount}`)
       
     } else 
       alert("Did not enter correctly Home or Car")
       
    nextLoan = prompt("Do you want to calculate a loan? ex. Yes or No")
}

       
