import { make } from 'redux-chill';
import { ButtonTypes, History } from '@api';

/**
 * Set monitor value
 */
const setMonitorValue = make('[calculator] set monitor value').stage(
  (value: number) => value
);

/**
 * Set monitor value change
 */
const setMonitorValueToChange = make(
  '[calculator] set monitor value to change'
).stage((value: number) => value);

/**
 * Set action
 */
const setAction = make('[calculator] set action').stage(
  (value: ButtonTypes | null) => value
);

/**
 * Set is got result
 */
const setIsGotResult = make('[calculator] set is got result').stage(
  (value: boolean) => value
);

/**
 * Set error message
 */
const setErrorMessage = make('[calculator] set error message').stage(
  (errorMessage: string) => errorMessage
);

/**
 * Add to history
 */
const addToHistory = make('[calculator] add to history').stage(
  (history: History) => history
);

/**
 * Clear history
 */
const clearHistory = make('[calculator] clear history');

export {
  setMonitorValue,
  setMonitorValueToChange,
  setAction,
  setIsGotResult,
  setErrorMessage,
  addToHistory,
  clearHistory
};
