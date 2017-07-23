import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="calculatorDisplay">
        { this.props.value }
      </div>
    )
  }
}
