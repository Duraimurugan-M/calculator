function percentage() {
    const display = document.getElementById('display');
    const expression = display.value;

    // Check if the expression already contains a percentage sign
    if (!expression.includes('%')) {
        display.value += '%';
    }
}


        function percentageCalculation() {
    const expression = document.getElementById('display').value;

    // Check if the expression contains an arithmetic operator and a percentage
    if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
        const operators = ['+', '-', '*', '/'];
        let operatorIndex = -1;

        // Determine the index of the arithmetic operator in the expression
        for (const operator of operators) {
            if (expression.includes(operator)) {
                operatorIndex = expression.indexOf(operator);
                break;
            }
        }

        // Extract operands and operator
        const operator = expression.charAt(operatorIndex);
        const firstOperand = parseFloat(expression.substring(0, operatorIndex));
        const secondOperand = parseFloat(expression.substring(operatorIndex + 1).replace('%', ''));

        // If both operands are valid numbers, perform the calculation
        if (!isNaN(firstOperand) && !isNaN(secondOperand)) {
            let result;
            switch (operator) {
                case '+':
                    result = firstOperand + (firstOperand * (secondOperand / 100));
                    break;
                case '-':
                    result = firstOperand - (firstOperand * (secondOperand / 100));
                    break;
                case '*':
                    result = firstOperand * (secondOperand / 100);
                    break;
                case '/':
                    if (secondOperand !== 0) {
                        result = firstOperand / (secondOperand / 100);
                    } else {
                        result = "Error: Division by zero";
                    }
                    break;
                default:
                    result = "Error: Invalid operator";
            }
            document.getElementById('display').value = result;
        }
    }
}