module.exports = function solveEquation(equation) {
  var numbers = equation.match(/(-?|\+\s|)[^\^][0-9]+/g).map(function(item) {
    return Number(item.replace(/\s/g, ''));
  });
  var [a,b,c] = numbers;
  
  var D = Math.pow(b,2) - 4 * a *c;
  var first = (-b + Math.sqrt(D)) / (2 * a);
  var second = (-b - Math.sqrt(D)) / (2 * a);
  
  var result = [Math.round(first), Math.round(second)];
  return result.sort(function(a, b) {
    return a -b;
  });
}
