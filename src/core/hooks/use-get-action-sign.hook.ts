import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from '@store';
import { Actions } from '@api';
import { useBaseCalculatorButtons } from './use-base-calculator-buttons.hook';
import { useAdvancedCalculatorButtons } from './use-advanced-calculator-buttons.hook';

/**
 * Use Get Action Sign
 */
const useGetActionSign = () => {
  const { action, angleUnity } = useSelector(
    (state: State) => state.calculator
  );

  const buttons = useBaseCalculatorButtons();

  const advancedButtons = useAdvancedCalculatorButtons({ angleUnity });

  const actionSign = useMemo(
    () => [...buttons, ...advancedButtons].find(({ code }) => code === action),
    [buttons, action]
  );

  const getActionSign = (action: Actions): string | undefined =>
    [...buttons, ...advancedButtons].find(({ code }) => code === action)
      ?.element;

  return { actionSign: actionSign?.element, getActionSign };
};

export { useGetActionSign };
