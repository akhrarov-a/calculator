import { useSelector } from 'react-redux';
import { State } from '@store';
import { useAdvancedCalculatorButtons, useHandleButtonClick } from '@core';

/**
 * Use Advanced Calculator
 */
const useAdvancedCalculator = () => {
  const { angleUnity } = useSelector((state: State) => state.calculator);

  const { handleClick } = useHandleButtonClick();

  const buttons = useAdvancedCalculatorButtons({ angleUnity });

  return { buttons, handleClick };
};

export { useAdvancedCalculator };
