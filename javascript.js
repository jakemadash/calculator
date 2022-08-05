const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
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

buttons.forEach(button => button.addEventListener('click', (e) => {
    let value = button.textContent;
    let float = !isNaN(parseFloat(value)) || value === '.'
    let operator = operators.includes(value) && display.textContent !== '';
    let equals = (value === '=' && display.textContent !== '');

        if (typeof op !== 'undefined' && float) {
            display.textContent = '';
            display.textContent += value;
        }
        else if (typeof op !== 'undefined' && (operator || equals)) {
            num2 = parseFloat(display.textContent);
            display.textContent = calculator.operate(num1, op, num2);
        }
        if (typeof op === 'undefined' && float) {
            display.textContent += value;
        }
        else if (operator) {
            op = value;
            num1 = parseFloat(display.textContent);
            console.log(op, num1);
            console.log(float);
        }
    }));

