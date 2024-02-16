function formatLoanAmount(input) {
  // remove non-numeric characters from the input
  let loanAmount = input.value.replace(/\D/g, '');

  // add commas every third digit
  loanAmount = loanAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // update the input value with formatted loan amount
  input.value = loanAmount;
}

function calculateMortgage() {
  // get the loan amount from the input and remove commas before parsing
  const loanAmount = parseFloat(document.getElementById('loanAmount').value.replace(/,/g, ''));
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;

  const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

  if (!isNaN(monthlyPayment) && (monthlyPayment !== Infinity) && (monthlyPayment !== -Infinity)) {
    document.getElementById('monthlyPayment').textContent = `$${monthlyPayment.toFixed(2)}`;
  } else {
    document.getElementById('monthlyPayment').textContent = 'Invalid input. Please check your values.';
  }
}
