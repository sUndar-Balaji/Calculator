import React from 'react';
import CalculatorButton from '../components/calculator/calculator-button-component';
import DigitsRowContainer from '../components/calculator/calculator-digits-row-container';

export default function digitsGenerator(self) {
  let row, column, digits = [], digitsContainerRows = [], displayValue;
  for (row = 1; row <= 3; row++) {
    for (column = 1; column<=3; column++) {
      displayValue = ((row - 1) * 3) + column;
      digits.push(<CalculatorButton btnDisplayName={displayValue} pressDigits={ self.pressDigits.bind(self, displayValue) } key={displayValue} />);
    }

    digitsContainerRows.push(<DigitsRowContainer digits={digits} key={row} />);
    digits = [];
  }
  return digitsContainerRows;
}
