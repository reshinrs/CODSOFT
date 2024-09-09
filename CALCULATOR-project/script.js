

let currentInput = '';
let memory = 0;

function appendNumber(number) {
    currentInput += number.toString();
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    currentInput += memory;
    updateDisplay();
}

function memoryPlus() {
    memory += parseFloat(currentInput) || 0;
    clearDisplay();
}

function memoryMinus() {
    memory -= parseFloat(currentInput) || 0;
    clearDisplay();
}

document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === '.') {
        appendDecimal();
    }
});

