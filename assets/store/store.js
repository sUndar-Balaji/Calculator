import { createStore } from 'redux';

import calculatorReducer from './reducers/calculator-reducer.js';

let store = createStore(calculatorReducer);

window.store = store;

export default store;
