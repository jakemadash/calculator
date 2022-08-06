const calculator = {
    add: function (num1, num2) {
        return parseInt(num1) + parseInt(num2);
    },

    subtract: function(num1, num2) {
        return num1 - num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    },

    divide: function(num1, num2) {
        return num1 / num2;
    },

    operate: function(num1, op, num2) {
        switch (op) {
            case '+':
                return this.add(num1, num2);
                break;
            case '-':
                return this.subtract(num1, num2);
                break;
            case 'x':
                return this.multiply(num1, num2);
                break;
            case '/':
                return this.divide(num1, num2);
                break;
        }
    },
};

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const operators = ['+', '-', 'x', '/'];
let op;
let num1;
let num2;
let result;

buttons.forEach(button => button.addEventListener('click', (e) => {

    let buttonValue = button.textContent;
    let float = !isNaN(parseInt(buttonValue))
    let operator = operators.includes(buttonValue) && display.textContent !== '';
    let equals = (buttonValue === '=' && display.textContent !== '');
    let firstNumber = typeof op === 'undefined' && float;
    let secondNumber = typeof op !== 'undefined' && float;
    let calculate = typeof op !== 'undefined' && typeof num2 !== 'undefined' && (operator || equals);
      
        if (secondNumber) {
            if (num2 === undefined) {
                display.textContent = '';
            }
            if (display.textContent.length < 8) {
                display.textContent += buttonValue;
            }
            num2 = display.textContent;
        }
        else if (calculate) {
            let result = calculator.operate(num1, op, num2);
            if (result === 'Infinity') {
                display.textContent = 'Stop it!';
            }
            else display.textContent = result.toPrecision(7);
            num1 = display.textContent;
            num2 = undefined;
        }
        else if (firstNumber) {
            if (display.textContent.length < 8) {
                display.textContent += buttonValue;
            }
        }
        else if (operator) {
            op = buttonValue;
            if (num1 === undefined) {
                num1 = parseFloat(display.textContent);
            }
        }
        else if (buttonValue === 'C') {
            display.textContent = '';
            op = num1 = num2 = result = undefined;
        } 
    }));

