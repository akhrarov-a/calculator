import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { getCurrencyData, setFields, setSelected } from './store';
import { CurrencySides } from '@api';

/**
 * Use Currency
 */
const useCurrency = () => {
  const dispatch = useDispatch();

  const { currencies, selected, fields } = useSelector(
    (state: State) => state.currency
  );

  const onFieldsChange = (key: CurrencySides, value: string | number) => {
    if (isNaN(+value)) return;

    const { left, right } = selected;

    switch (key) {
      case CurrencySides.LEFT: {
        const rate = right?.rate as number;

        const rightValue = (+value * rate) / (left?.rate as number);

        dispatch(setFields({ left: +value, right: rightValue }));

        break;
      }

      case CurrencySides.RIGHT: {
        const rate = left?.rate as number;

        const leftValue = (+value * rate) / (right?.rate as number);

        dispatch(setFields({ left: leftValue, right: +value }));

        break;
      }
    }
  };

  const onSelect = (key: CurrencySides, value: string) => {
    const currency = currencies.find(({ name }) => name === value);

    if (!currency) return;

    dispatch(setSelected({ [key]: currency }));
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
