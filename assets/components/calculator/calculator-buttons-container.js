import React from 'react';
import PropTypes from 'prop-types';

import CalculatorButton from './calculator-button-component';
import DigitsRowContainer from './calculator-digits-row-container';
import {
  combineInputAction,
  calculatorOperations
} from '../../store/action-creators/calculator-actions';
import digitsGenerator from '../../utilities/calculator-utilities';

export default class CalculatorButtonsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalRowStaticButtons: ['0', '.', 'c'],
      calcFunctions: ['/', "*", '-', '+', '='],
    }
  }

  componentDidMount() {
    let { store } = this.context;
    document.addEventListener('keypress', function(e) {
      if ((e.keyCode >= 48 && e.keyCode <= 57) || e.key === '.') {
        if (e.key !== '.') {
          store.dispatch(combineInputAction(parseInt(e.key), 10));
        } else {
          store.dispatch(combineInputAction(e.key));
        }
      } else if (e.key === '+'
        || e.key === '-'
        || e.key === '*'
        || e.key === '/'
        || e.key === '='
        || e.key === 'c'
        || e.key === 'Enter'
      ) {
        if (e.key === 'Enter') {
          store.dispatch(calculatorOperations('='));
        } else {
          store.dispatch(calculatorOperations(e.key));
        }
      }
    }, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress');
  }

  pressDigits(digit) {
    let { store } = this.context;
    if ( (digit >= 0 && digit <= 9) || digit === '.' ) {
      store.dispatch(combineInputAction(digit));
    } else {
      store.dispatch(calculatorOperations(digit));
    }
  }

  render() {
    let state = this.state, self = this;

    return (
      <div class="operations">
        <div class="digits col m9">
          {digitsGenerator(self)}
          {
            (function () {
              let finalRowStaticBtns = state.finalRowStaticButtons.map(function (btnValues, index) {
                return <CalculatorButton btnDisplayName={btnValues} pressDigits={self.pressDigits.bind(self, btnValues)} key={index} />;
              });
              return <DigitsRowContainer digits={finalRowStaticBtns} />;
            }())
          }
        </div>
        <div class="calcFunctions col m3">
          {
            state.calcFunctions.map(function (calcFunction, index){
              return (
                <div class="functionsRow" key={index}>
                  <CalculatorButton btnDisplayName={calcFunction} pressDigits={self.pressDigits.bind(self, calcFunction)} key={index} />
                </div>
              );
            })
          }
        </div>
      </div>
    )
  }
}

CalculatorButtonsContainer.contextTypes = {
  store: PropTypes.object
};
