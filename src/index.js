function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let expr1 = expr.replace(/\s/g, '').split(/(\*|\)|\/|\+|\(|\-)/);
    let pattOper = /\*|\/|\+|\-/;
    let pattOper1 = /(\*|\/|\+|\-)/;
    let pateNum = /\d/;
    let pattBrack = /\(/;
    let operation = '';
    let exp = [];
    let i = 0;
    let brackOpen = (expr.match(/\(/g)) ? expr.match(/\(/g).length : 0;
    let brackClose = (expr.match(/\)/g)) ? expr.match(/\)/g).length : 0;
    let arr = expr1.filter((val) => (val !== ''))
    if (brackOpen !== brackClose) { throw new Error("ExpressionError: Brackets must be paired");}

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
    

    if (arr.length > 1) { 
        let n = arr.length;
        
        for (i = 0; i < n; i++) {
          (arr.indexOf("(") !== -1) ? i = (arr.lastIndexOf("(") + 2) : '';
          (arr.indexOf(")") !== -1) ? n = (arr.indexOf(")", i) - 1) : '';
          let f = n - i + 3;
          if (arr.indexOf("/", i) !== -1 && arr.indexOf("/", i) < (n + 1)) {
            (arr.indexOf("/", i) !== -1 && arr.indexOf("/", i) < (n + 1)) ? i = arr.indexOf("/", i) : '';
          } else if (arr.indexOf("*", i) !== -1 && arr.indexOf("*", i) < (n + 1)) {
            (arr.indexOf("*", i) !== -1 && arr.indexOf("*", i) < (n + 1)) ? i = arr.indexOf("*", i) : '';
          }  
              if (pattOper.test(arr[i])) {
                a = arr[i-1];
                exp.push(parseFloat(a));
                operation = arr[i];
                b = arr[i+1];
                if (arr[i] === '/' && arr[i+1] == 0) { throw new Error("TypeError: Division by zero.")}
                exp.push(parseFloat(b));
                res = operators(exp);
              if (arr.toString().match(/\(/g)) {
                if (f === 4) {
                  arr[i-2] = (operators(exp));
                  arr.splice((i-1),4);
                  i = 0;
                  exp = [];
                }
                if (f > 4) {
                  arr[i-1] = (operators(exp));
                  arr.splice((i),2);
                  exp = [];
                  i = 0;
                }
              } else {
                arr[i-1] = (operators(exp));
                arr.splice((i),2);
                i = 0;
                exp = [];
              } }
          }
      }
      
      return res;
}

module.exports = {
    expressionCalculator
}