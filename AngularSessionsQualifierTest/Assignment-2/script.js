function calculateLoan() {
    const employeeID = document.getElementById('employeeID').value;
    const designation = document.getElementById('designation').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);

    if (!employeeID.startsWith('E') || employeeID.length < 4) {
      alert('Employee ID must start with "E" and have a minimum length of 4 characters.');
      return;
    }

    let interest = 0;
    if (designation.toLowerCase() === 'manager') {
      interest = loanAmount * 0.1; // 10% interest for managers
    } else {
      interest = loanAmount * 0.05; // 5% interest for other designations
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>Employee ID: ${employeeID}</p>
      <p>Loan Amount: ${loanAmount}</p>
      <p>Interest Payable: ${interest}</p>
    `;
  }