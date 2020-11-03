const Calculator = function() {
    this.evaluate = string => {
      // do code here
    }
  };


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}

Test(calculate.evaluate('127'), 127)
Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 * 5 / 2'), 25);