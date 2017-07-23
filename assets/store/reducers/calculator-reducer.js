import calculatorOperations from '../../utilities/store-utilities';

let calculatorReducer = (state = {
  calculatedOutput: 0,
  inputData: '0',
  previousOperation: '',
  displayData: 0,
  dataEnteredAfterOperation: false,
}, action) => {
  let latestState = {};
  switch(action.type) {
    case 'COMBINE_INPUT':
      latestState = {
        ...state,
        inputData: ((state.inputData === '0' ? '' : String(state.inputData)) + action.inputData),
        dataEnteredAfterOperation: true,
      };
      latestState.displayData = latestState.inputData;
      break;
    case 'CALCULATOR_OPERATIONS':
      if (state.previousOperation === '') {
        if (action.operation !== 'c') {
          latestState = {
            ...state,
            calculatedOutput: state.inputData,
            previousOperation: action.operation,
            inputData: '0',
          };
        } else {
          latestState = {
            ...state,
            calculatedOutput: 0,
            inputData: '0',
            previousOperation: ''
          };
        }
      } else {
        if (action.operation !== 'c') {
          if (state.dataEnteredAfterOperation === false) {
            latestState = {
              ...state,
              previousOperation: action.operation
            };
          } else {
            latestState = {
              ...state,
              calculatedOutput:
                calculatorOperations(
                  state.calculatedOutput,
                  state.inputData,
                  state.previousOperation,
                  state.dataEnteredAfterOperation,
                ),
              previousOperation: action.operation
            };
          }
        } else {
          latestState = {
            ...state,
            calculatedOutput: 0,
            inputData: '0',
            previousOperation: ''
          };
        }
      }

      latestState = {
        ...latestState,
        inputData: '0',
        dataEnteredAfterOperation: false,
        displayData: latestState.calculatedOutput,
      };
      break;
    default:
      latestState = state;
  }

  return latestState;
}

export default calculatorReducer;
