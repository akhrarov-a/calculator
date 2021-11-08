import { useDispatch, useSelector } from 'react-redux';
import { Actions, ButtonTypes } from '@api';
import { State } from '@store';
import {
  setAction,
  setMonitorValue,
  setMonitorValueToChange
} from '@calculator';

/**
 * Use Handle Button Click
 */
const useHandleButtonClick = () => {
  const dispatch = useDispatch();

  const { monitorValue, monitorValueToChange, action } = useSelector(
    (state: State) => state.calculator
  );

  const handleEqualClick = () => {
    dispatch(setMonitorValueToChange(0));

    switch (action) {
      case Actions.PLUS: {
        dispatch(setMonitorValue(monitorValueToChange + monitorValue));
        break;
      }
    }
  };

  const handleClick = (code: ButtonTypes) => {
    switch (true) {
      case !isNaN(+code): {
        dispatch(setMonitorValue(+`${monitorValue}${code}`));
        break;
      }
      case code === Actions.CLEAR: {
        dispatch(setMonitorValue(0));
        dispatch(setMonitorValueToChange(0));
        dispatch(setAction(null));
        break;
      }
      case code === Actions.PLUS: {
        dispatch(setMonitorValueToChange(monitorValueToChange + monitorValue));
        dispatch(setMonitorValue(0));
        dispatch(setAction(code));
        break;
      }
      case code === Actions.EQUAL: {
        handleEqualClick();
        break;
      }
    }
  };

  return { handleClick };
};

export { useHandleButtonClick };
