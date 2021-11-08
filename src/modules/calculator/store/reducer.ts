import { reducer } from 'redux-chill';
import { CalculatorState } from './state';
import { setAction, setMonitorValue, setMonitorValueToChange } from './actions';

/**
 * Calculator Reducer
 */
const calculatorReducer = reducer(new CalculatorState())
  .on(setMonitorValue, (state, payload) => {
    state.monitorValue = payload;
  })
  .on(setMonitorValueToChange, (state, payload) => {
    state.monitorValueToChange = payload;
  })
  .on(setAction, (state, payload) => {
    state.action = payload;
  });

export { calculatorReducer };
