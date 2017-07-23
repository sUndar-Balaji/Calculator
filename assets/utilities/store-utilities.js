export default function calculatorOperations(a, b, operation, dataEnteredAfterOperation) {
  let result;
  let inputOne = parseFloat(a, 10), inputTwo = parseFloat(b, 10);
  if (operation === '+') {
    result = inputOne + inputTwo;
  } else if (operation === '-') {
    result = inputOne - inputTwo;
  } else if (operation === '*') {
    result = inputOne * inputTwo;
  } else if (operation === '/') {
    result = inputOne / inputTwo;
  } else {
    if (dataEnteredAfterOperation === true) {
      result = inputTwo;
    } else {
      result = inputOne;
    }
  }

  return result;
}
