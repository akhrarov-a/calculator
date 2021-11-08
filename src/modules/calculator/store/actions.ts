import { make } from 'redux-chill';
import { ButtonTypes } from '../../../api';

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

export { setMonitorValue, setMonitorValueToChange, setAction };
