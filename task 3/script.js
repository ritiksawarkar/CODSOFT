let currentInput = "";

function appendToDisplay(value) {
  if (isInvalidInput(value)) return; // Prevent invalid input
  currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculate() {
  try {
    // Using Function() instead of eval() for safer execution
    currentInput = new Function("return " + currentInput)();
    if (!isFinite(currentInput)) throw new Error("Invalid Operation");
    currentInput = currentInput.toString();
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}

function isInvalidInput(value) {
  const lastChar = currentInput.slice(-1);
  const operators = ["+", "-", "*", "/"];

  // Prevent two consecutive operators
  if (operators.includes(lastChar) && operators.includes(value)) {
    return true;
  }
  return false;
}
