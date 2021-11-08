import { reducer } from 'redux-chill';
import { CurrencyState } from './state';
import { getCurrencyData, setSelected, setValues } from './actions';

/**
 * Currency Reducer
 */

const currencyReducer = reducer(new CurrencyState())
  .on([getCurrencyData, getCurrencyData.success], (state) => {
    state.error = '';
  })
  .on(getCurrencyData.success, (state, payload) => {
    state.currencies = payload;
    state.firstSelected = payload[0];
    state.secondSelected = payload[1];
  })
  .on(getCurrencyData.fail, (state, payload) => {
    state.error = payload;
  })
  .on(setSelected.first, (state, payload) => {
    state.firstSelected = payload;
  })
  .on(setSelected.second, (state, payload) => {
    state.secondSelected = payload;
  })
  .on(setValues, (state, payload) => {
    state.values = { ...state.values, ...payload };
  });

export { currencyReducer };
