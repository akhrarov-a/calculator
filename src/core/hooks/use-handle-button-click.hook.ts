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
    dispatch(setAction(null));

    switch (action) {
      case Actions.PLUS: {
        dispatch(setMonitorValue(monitorValueToChange + monitorValue));
        break;
      }
      case Actions.MINUS: {
        dispatch(setMonitorValue(monitorValueToChange - monitorValue));
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
        dispatch(setMonitorValueToChange(0));
        dispatch(setAction(null));
        break;
      }
      case code === Actions.PLUS: {
        dispatch(setMonitorValueToChange(monitorValueToChange + monitorValue));
        dispatch(setAction(code));
        break;
      }
      case code === Actions.MINUS: {
        console.log(monitorValue, monitorValueToChange);
        if (!!monitorValueToChange) {
          console.log('has');
          dispatch(
            setMonitorValueToChange(monitorValueToChange - monitorValue)
          );
        } else {
          console.log('no');
          dispatch(setMonitorValueToChange(monitorValue));
        }

        dispatch(setAction(code));
        break;
      }
      case code === Actions.EQUAL: {
        handleEqualClick();
        break;
      }
    }

    if (code === Actions.EQUAL || !isNaN(+code)) return;

    dispatch(setMonitorValue(0));
  };

  return { handleClick };
};

export { useHandleButtonClick };
