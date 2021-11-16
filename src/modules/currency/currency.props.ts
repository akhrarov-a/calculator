import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { CurrencySides } from '@api';
import { useCalculateCurrencyRate } from '@core';
import { getCurrencyData, setSelected } from './store';

/**
 * Use Currency
 */
const useCurrency = () => {
  const dispatch = useDispatch();

  const { calculateResults } = useCalculateCurrencyRate();

  const { currencies, selected, fields } = useSelector(
    (state: State) => state.currency
  );

  const onFieldsChange = (key: CurrencySides, value: string | number) => {
    if (isNaN(+value)) return;

    const { left, right } = selected;

    calculateResults({
      key,
      left,
      right,
      value
    });
  };

  const onSelect = (key: CurrencySides, value: string) => {
    const currency = currencies.find(({ name }) => name === value);

    if (!currency) return;

    dispatch(setSelected({ [key]: currency }));

    const isLeft = key === CurrencySides.LEFT;

    const data = {
      key: isLeft ? CurrencySides.RIGHT : CurrencySides.LEFT,
      left: isLeft ? currency : selected.left,
      right: isLeft ? currency : selected.right,
      value: isLeft ? fields.right : fields.left
    };

    calculateResults(data);
  };

  useEffect(() => {
    dispatch(getCurrencyData());
  }, []);

  return {
    currencies,
    selected,
    fields,
    onSelect,
    onFieldsChange
  };
};

export { useCurrency };
