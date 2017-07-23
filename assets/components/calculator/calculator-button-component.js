import React from 'react';

export default class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        class="btn waves-effect waves-light"
        type="button"
        onClick={ this.props.pressDigits } >
        { this.props.btnDisplayName }
      </button>
    );
  }
}
