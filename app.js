document.getElementById("calculate-btn").addEventListener("click", function() {
  // Get user input
  const baseInput = document.getElementById("base-input").value;
  const targetInput = document.getElementById("target-input").value;
  const amountInput = document.getElementById("amount-input").value;
  const outputArea = document.getElementById("result");
  // Run calculateNicToAdd and display return value.
  outputArea.innerHTML = calculateNicToAdd(baseInput, targetInput, amountInput);
});

// CALCULATE
function calculateNicToAdd(base, target, amount) {
  // Check for invalid inputs
  if (!base || !target || !amount) {
    // values are not truthy
    return `<p class="error">Error, one or more inputs are invalid. Please input value</p>`;
  }
  if (base <= 0 || target <= 0 || amount <= 0) {
    // values cannot be 0
    return `<p class="error">All inputs must be grater than zero.</p>`;
  }

  // calculate result
  let result = (target / base) * amount;
  // convert to grams
  weight = result * 1.038;
  // round to 2 decimal places
  result = result.toFixed(2);
  weight = weight.toFixed(2);

  // return result
  return `<p>
            <strong>${result}mL</strong> amount of nicotine is required to mix your ${amount}mL bottle at the nicotine strength of ${target}mg.
            <br/><br/>
            <em>${result}mL of nicotine liquid weighs approximately <strong>${weight} grams</strong>.</em>
          </p>
          `;
}
