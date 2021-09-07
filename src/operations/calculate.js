const operate = (numberOne, numberTwo, operation) => {
    
    switch (operation) {
        case '-':
            return (Number(numberOne) - Number(numberTwo)).toFixed(2).toString();
        case '+':
            return (Number(numberOne) + Number(numberTwo)).toFixed(2).toString();
        case '*':
            return (Number(numberOne) * Number(numberTwo)).toFixed(2).toString();
        case '/':
            return (Number(numberOne) / Number(numberTwo)).toFixed(2).toString();
        default:
            return '0';
    }

};

const calculate = (calculator = {}, buttonValue) => {
    let { total, next, operation } = calculator;
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operators = ["+", "-", "*", "/"];

    if (buttonValue === "AC") {
        return {
            ...calculator,
            total: null,
            next: null,
            operation: null,
        };
    }

    if (buttonValue === ".") {
        if (!next.includes(".")) {
            next += buttonValue;
        }
    }

    if (numbers.includes(buttonValue)) {
        while (next === null) {
            next = "";
        }
        next += buttonValue;
    }

    if (operators.includes(buttonValue)) {
        while (next !== null && operation !== null) {
            total = operate(total, next, operation);
            operation = buttonValue;
            next = null;
            operation = null;
        }
        while (next !== null) {
            total = next;
            next = null;
        }
        if (next == null || operation == null) {
            operation = buttonValue;
        }
    }

    if (buttonValue === "=") {
        if (total && !next) {
            const result = total;
            total = result;
        }
        if (!total && !next) {
            total = "0";
        }
        if (total && next && operation) {
            total = operate(total, next, operation);
            next = null;
            operation = null;
        }
    }

    return { total, next, operation };
};

export default calculate;