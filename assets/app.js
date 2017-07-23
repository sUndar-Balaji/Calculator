import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import CalculatorFrame from './components/calculator/calculator-frame-component.js';
import store from './store/store.js';

class AppContainer extends React.Component {

  componentDidMount() {
    let { store } = this.context;
    store.subscribe(() => {
      this.forceUpdate();
    })
  }

  render() {
    return (
      <div class="calculatorContainer row">
        <CalculatorFrame />
        <div style={{float: 'none'}} />
      </div>
    );
  }
}

AppContainer.contextTypes = {
  store: PropTypes.object
}

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("appContainer")
);
