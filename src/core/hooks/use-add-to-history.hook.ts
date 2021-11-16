import { useDispatch, useSelector } from 'react-redux';
import { Actions, ButtonTypes } from '@api';
import { addToHistory } from '@calculator/store';
import { State } from '@store';
import { useGetActionSign } from './use-get-action-sign.hook';

/**
 * Use Add To History
 */
const useAddToHistory = () => {
  const dispatch = useDispatch();

  const { getActionSign } = useGetActionSign();

  const { monitorValue, monitorValueToChange } = useSelector(
    (state: State) => state.calculator
  );

  const addHistory = (code: ButtonTypes, result: string) => {
    const action = getActionSign(code as Actions) as string;

    const singleActions = [
      Actions.SQRT,
      Actions.LN,
      Actions.LOG,
      Actions.E_DEGREE
    ];
    const isSingleAction = singleActions.some((c) => c === code);

    switch (true) {
      case code === Actions.NUMBER_DEGREE: {
        const number = monitorValue.split('^')[0];
        const degree = monitorValue.split('^')[1];

        dispatch(
          addToHistory({
            action: action.replace('x', number).replace('y', degree),
            firstValue: '',
            secondValue: '',
            result
          })
        );

        break;
      }

      case code === Actions.FACTORIAL:
      case code === Actions.CUBE_OF_NUMBER:
      case code === Actions.DEGREE_OF_TEN:
      case code === Actions.DEGREE_OF_TWO:
      case code === Actions.ABS_NUMBER:
      case code === Actions.SQR:
      case code === Actions.E_DEGREE:
      case code === Actions.ONE_DIVIDED_BY_NUMBER: {
        dispatch(
          addToHistory({
            action: action.replace('x', monitorValue),
            firstValue: '',
            secondValue: '',
            result: result.replace('.', ',')
          })
        );

        break;
      }

      case isSingleAction: {
        dispatch(
          addToHistory({
            action,
            firstValue: '',
            secondValue: monitorValue.replace('.', ','),
            result: result.replace('.', ',')
          })
        );

        break;
      }

      default: {
        dispatch(
          addToHistory({
            action,
            firstValue: monitorValueToChange.replace('.', ',') || '',
            secondValue: monitorValue.replace('.', ',') || '',
            result: result.replace('.', ',')
          })
        );
      }
    }
  };

  return { addHistory };
};

export { useAddToHistory };
