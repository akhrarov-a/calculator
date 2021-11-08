import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { useGetActionSign } from '@core';
import { setMonitorValue } from '../../store';

/**
 * Use Monitor
 */
const useMonitor = () => {
  const dispatch = useDispatch();

  const { actionSign } = useGetActionSign();

  const { monitorValue, monitorValueToChange, errorMessage } = useSelector(
    (state: State) => state.calculator
  );

  const onBackspaceClick = () => {
    const value = +`${monitorValue}`.slice(0, -1);

    dispatch(setMonitorValue(value));
  };

  return {
    actionSign,
    monitorValue,
    monitorValueToChange,
    errorMessage,
    // onChange,
    onBackspaceClick
  };
};

export { useMonitor };
