import { reducer } from 'redux-chill';
import { CalculatorState } from './state';
import {
  addToHistory,
  clearHistory,
  setAction,
  setAngleUnity,
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
  })
  .on(addToHistory, (state, payload) => {
    state.history.push(payload);
  })
  .on(clearHistory, (state) => {
    state.history = [];
  })
  .on(setAngleUnity, (state, payload) => {
    state.angleUnity = payload;
  });

export { calculatorReducer };
