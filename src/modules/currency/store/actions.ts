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
const setSelected = make('[currency] set selected')
  .stage('first', (currency: Currency) => currency)
  .stage('second', (currency: Currency) => currency);

/**
 * Set values
 */
const setValues = make('[currency] set values').stage(
  (values: { first?: number; second?: number }) => values
);

export { getCurrencyData, setSelected, setValues };
