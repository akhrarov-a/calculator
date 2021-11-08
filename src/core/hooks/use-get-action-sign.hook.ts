import { useSelector } from 'react-redux';
import { State } from '@store';
import { useBaseCalculatorButtons } from './use-base-calculator-buttons.hook';
import { useMemo } from 'react';
import { Actions } from '../../api';

/**
 * Use Get Action Sign
 */
const useGetActionSign = () => {
  const { action } = useSelector((state: State) => state.calculator);

  const buttons = useBaseCalculatorButtons();

  const actionSign = useMemo(
    () => buttons.find(({ code }) => code === action),
    [buttons, action]
  );

  const getActionSign = (action: Actions): string | undefined =>
    buttons.find(({ code }) => code === action)?.element;

  return { actionSign: actionSign?.element, getActionSign };
};

export { useGetActionSign };
