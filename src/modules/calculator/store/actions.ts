import { make } from 'redux-chill';

/**
 * Set monitor value
 */
const setMonitorValue = make('[calculator] set monitor value').stage(
  (value: number) => value
);

export { setMonitorValue };
