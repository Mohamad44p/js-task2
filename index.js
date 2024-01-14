
function convertCurrency() {

  const exchangeRates = {
      dollar: 3.7, 
      dinar: 5,   
      nis: 1         
  };

  const amountInput = document.getElementById("amount");
  const exchangeSelect = document.getElementById("exchange");
  const resultParagraph = document.querySelector(".result");

  const amount = parseFloat(amountInput.value);
  const selectedCurrency = exchangeSelect.value;

  if (isNaN(amount)) {
      resultParagraph.textContent = "Please enter a valid number.";
  } else {
      const convertedAmount = amount * exchangeRates[selectedCurrency];
      resultParagraph.textContent = `${amount} ILS is approximately (${convertedAmount.toFixed(2)}$) ${selectedCurrency}.`;
  }
}
