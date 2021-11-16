import { make } from 'redux-chill';
import { Currency } from '@api';

/**
 * Get currency data
 */
const getCurrencyData = make('[currency] get')
  .stage('success', (currencies: Currency[]) => currencies)
  .stage('fail', (errorMessage: string) => errorMessage);

/**
 * Set selected
 */
const setSelected = make('[currency] set selected').stage(
  (selected: { left?: Currency; second?: Currency }) => selected
);

/**
 * Set fields
 */
const setFields = make('[currency] set values').stage(
  (fields: { left?: number; right?: number }) => fields
);

export { getCurrencyData, setSelected, setFields };
