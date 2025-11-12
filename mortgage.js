// console.log("Mortgage");

// Inputs / DOM Elements

const homeValue = document.getElementById("homeValue");
const downPayment = document.getElementById("downPayment");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTerm = document.getElementById("loanTerm");

const form = document.getElementById("mortgage");

// console.log(homeValue, downPayment, loanAmount, interestRate, loanTerm, form);
downPayment.addEventListener("keyup", () => {
  loanAmount.value = homeValue.value - downPayment.value;

  let loanAmountValue = loanAmount.value;
  return loanAmountValue;
});

function calculateMortgage(loanAmount, interestRate, numberMonthlyPayments) {
  function percentageToDecimal(percent) {
    return percent / 12 / 100;
  }
  interestRate = percentageToDecimal(interestRate);

  function yearsToMonths(year) {
    return year * 12;
  }
  numberMonthlyPayments = yearsToMonths(numberMonthlyPayments);

  let mortgage =
    (interestRate * loanAmount) /
    (1 - Math.pow(1 + interestRate, -numberMonthlyPayments));

  return parseFloat(mortgage.toFixed(2));
}

form.onsubmit = (e) => {
  e.preventDefault();
  validateInput();
  let loanAmount = homeValue.value - downPayment.value;

  let monthlyPayment = calculateMortgage(
    loanAmount,
    interestRate.value,
    loanTerm.value
  );

  document.getElementById("monthlyPayment").innerHTML = `$ ${monthlyPayment}`;
};

function validateInput() {
  // Validate inputs
  if (
    homeValue.value === "" ||
    downPayment.value === "" ||
    interestRate.value === "" ||
    loanTerm.value === ""
  ) {
    alert("Please fill in all fields.");
    return false;
  }
}
