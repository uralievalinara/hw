document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(number1) || isNaN(number2) || !operation) {
        resultDiv.textContent = 'Enter both numbers and choose the operation';
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                resultDiv.textContent = 'You can not divide by zero!';
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultDiv.textContent = 'Unknown operation';
            return;
    }

    resultDiv.textContent = `Result: ${result}`;
});