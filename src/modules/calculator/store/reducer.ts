import { reducer } from 'redux-chill';
import { CalculatorState } from './state';

/**
 * Calculator Reducer
 */
const calculatorReducer = reducer(new CalculatorState());

export { calculatorReducer };
