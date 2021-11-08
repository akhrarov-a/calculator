import { ButtonTypes } from '@api';

/**
 * Use Handle Button Click
 */
const useHandleButtonClick = () => {
  const handleClick = (code: ButtonTypes) => {
    console.log(code);
  };

  return { handleClick };
};

export { useHandleButtonClick };
