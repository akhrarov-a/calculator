import { Actions } from '@api';

/**
 * Use check actions
 */
const useCheckActions = () => {
  const singleActions = [
    Actions.SQRT,
    Actions.LN,
    Actions.LOG,
    Actions.E_DEGREE,
    Actions.SINUS,
    Actions.COSINUS,
    Actions.TAN
  ];

  const replaceXActions = [
    Actions.FACTORIAL,
    Actions.CUBE_OF_NUMBER,
    Actions.DEGREE_OF_TEN,
    Actions.DEGREE_OF_TWO,
    Actions.ABS_NUMBER,
    Actions.SQR,
    Actions.E_DEGREE,
    Actions.ONE_DIVIDED_BY_NUMBER
  ];

  const checkIsSingleAction = (code) => singleActions.some((c) => c === code);

  const checkReplaceXAction = (code) => replaceXActions.some((c) => c === code);

  return { checkIsSingleAction, checkReplaceXAction };
};

export { useCheckActions };
