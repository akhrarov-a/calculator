import { useBaseCalculatorButtons, useHandleButtonClick } from '@core';

/**
 * Use Base Calculator
 */
const useBaseCalculator = () => {
  const { handleClick } = useHandleButtonClick();

  const buttons = useBaseCalculatorButtons();

  return { buttons, handleClick };
};

export { useBaseCalculator };
