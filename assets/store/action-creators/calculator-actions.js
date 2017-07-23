import actions from './actions.js';

export let combineInputAction = (digit) => {
  return {
    type: actions.COMBINE_DIGITS,
    inputData: digit,
  };
};

export let calculatorOperations = (operation) => {
  return {
    type: actions.CALCULATOR_FUNCTIONS,
    operation: operation,
  };
};
