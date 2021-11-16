import { reducer } from 'redux-chill';
import { CurrencyState } from './state';
import { getCurrencyData, setFields, setSelected } from './actions';

/**
 * Currency Reducer
 */

const currencyReducer = reducer(new CurrencyState())
  .on([getCurrencyData, getCurrencyData.success], (state) => {
    state.error = '';
  })
  .on(getCurrencyData.success, (state, payload) => {
    state.currencies = payload;
    state.selected.left = payload[0];
    state.selected.right = payload[1];
  })
  .on(getCurrencyData.fail, (state, payload) => {
    state.error = payload;
  })
  .on(setSelected, (state, payload) => {
    state.selected = { ...state.selected, ...payload };
  })
  .on(setFields, (state, payload) => {
    state.fields = { ...state.fields, ...payload };
  });

export { currencyReducer };
