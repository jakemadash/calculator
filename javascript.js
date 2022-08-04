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

buttons.forEach(button => button.addEventListener('click', (e) => {
    let value = button.textContent;
        if (!isNaN(parseFloat(value)) || value === '.') {
            display.textContent += value;
        }
    }));

