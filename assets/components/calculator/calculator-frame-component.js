import React from 'react';
import PropTypes from 'prop-types';

import CalculatorDisplay from './calculator-display-component.js';
import CalculatorButtonsContainer from './calculator-buttons-container.js';

export default class CalculatorFrame extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { store } = this.context;
    let storeData = store.getState();

    return (
      <div class="calculator col m4">
        <CalculatorDisplay value={storeData.displayData} />
        <CalculatorButtonsContainer />
      </div>
    )
  }
}

CalculatorFrame.contextTypes = {
  store: PropTypes.object
};
