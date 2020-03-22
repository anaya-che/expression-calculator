function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arr = expr.replace(/\s/g, '').split('');
    let pattOper = /(\*|\/|\+|\-)/;
    let pateNum = /\d/;
    let operation = '';
    let exp = [];

    function operators(exp) {
        if (operation === '+') {
            return res =  exp.reduce((a, b) => a + b);
        }
        if (operation === '-') {
            return res =  exp.reduce((a, b) => a - b);
        }
        if (operation === '*') {
            return res =  exp.reduce((a, b) => a * b);
        }
        if (operation === '/') {
            return res =  exp.reduce((a, b) => a / b);
        }
    }

    while (arr.length !== 1) {
        for (i = 0; i < arr.length; i++) {
            if (pattOper.test(arr[i])) {
            a = arr[i-1];
            exp.push(parseFloat(a));
            operation = arr[i];
            b = arr[i+1];
            if (arr[i] === '/' && arr[i+1] == 0) { throw new Error("TypeError: Division by zero.")}
            exp.push(parseFloat(b));
            res = operators(exp);
            arr.splice((i-1),3);
            arr.unshift(operators(exp));
            i = 0;
            exp = [];
            } 
        }
    }
    
    return res;
}

module.exports = {
    expressionCalculator
}