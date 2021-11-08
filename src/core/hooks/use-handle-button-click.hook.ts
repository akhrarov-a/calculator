import { ButtonTypes } from '@api';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store';
import { setMonitorValue } from '../../modules/calculator';
import { Actions } from '../../api';

/**
 * Use Handle Button Click
 */
const useHandleButtonClick = () => {
  const dispatch = useDispatch();

  const { monitorValue } = useSelector((state: State) => state.calculator);

  const handleClick = (code: ButtonTypes) => {
    switch (true) {
      case !isNaN(+code): {
        dispatch(setMonitorValue(+`${monitorValue}${code}`));
        break;
      }
      case code === Actions.CLEAR: {
        dispatch(setMonitorValue(0));
        break;
      }
    }
  };

  return { handleClick };
};

export { useHandleButtonClick };
