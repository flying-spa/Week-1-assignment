/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(expression) {
    this.expression = expression;
  }
  trimWhiteSpaces() {
    this.expression= this.expression.replace(/\s+/g, '');
  }
  checkNonNumericCharacters() {
    var expressionLength = this.expression.length;
    for(var i=0; i<expressionLength; i++) {
      switch(this.expression[i]) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '*':
        case '/':
        case '+':
        case '-':
        case '(':
        case ')':  
            break;
        default:
            return false;
      }
    }
    return true;
  }
  evaluateExpression() {
    this.trimWhiteSpaces();
    if(this.checkNonNumericCharacters()) {
      return eval(this.expression);
    }
  }
}

// let calulator = new Calculator("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
// console.log(calulator.evaluateExpression());
module.exports = Calculator;
