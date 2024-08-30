function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteDigit() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendDigit(digit) {
    let display = document.getElementById('display');
    display.value += digit;
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    let lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
