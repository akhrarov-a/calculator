import { reducer } from 'redux-chill';
import { CalculatorState } from './state';
import {
  setAction,
  setErrorMessage,
  setIsGotResult,
  setMonitorValue,
  setMonitorValueToChange
} from './actions';

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
  })
  .on(setIsGotResult, (state, payload) => {
    state.isGotResult = payload;
  })
  .on(setErrorMessage, (state, payload) => {
    state.errorMessage = payload;
  });

export { calculatorReducer };
