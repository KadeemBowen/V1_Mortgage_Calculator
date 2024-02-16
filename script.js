function calculateMortgage() {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;

  const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

  if (!isNaN(monthlyPayment) && (monthlyPayment !== Infinity) && (monthlyPayment !== -Infinity)) {
    document.getElementById('monthlyPayment').textContent = `$${monthlyPayment.toFixed(2)}`;
  } else {
    document.getElementById('monthlyPayment').textContent = 'Invalid input. Please check your values.';
  }
}

  