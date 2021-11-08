import { reducer } from 'redux-chill';
import { CalculatorState } from './state';
import { setMonitorValue } from './actions';

/**
 * Calculator Reducer
 */
const calculatorReducer = reducer(new CalculatorState()).on(
  setMonitorValue,
  (state, payload) => {
    state.monitorValue = payload;
  }
);

export { calculatorReducer };
