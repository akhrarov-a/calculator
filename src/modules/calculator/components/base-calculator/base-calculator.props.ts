import { useHandleButtonClick } from '@core';
import { useBaseCalculatorButtons } from './hooks';

/**
 * Use Base Calculator
 */
const useBaseCalculator = () => {
  const { handleClick } = useHandleButtonClick();

  const buttons = useBaseCalculatorButtons();

  return { buttons, handleClick };
};

export { useBaseCalculator };
