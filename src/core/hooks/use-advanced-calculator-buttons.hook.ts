import {
  Actions,
  AdvancedCalculatorButton,
  AngleUnity,
  ButtonTheme
} from '@api';

/**
 * Use Advanced Calculator Buttons
 */
const useAdvancedCalculatorButtons = ({
  angleUnity
}: {
  angleUnity: AngleUnity;
}): AdvancedCalculatorButton[] => [
  {
    element: angleUnity === AngleUnity.DEGREE ? 'Deg' : 'Rad',
    code: Actions.CHANGE_ANGLE_UNITY,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'sin',
    code: Actions.SINUS,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'cos',
    code: Actions.COSINUS,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'tan',
    code: Actions.TAN,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '&#8730;',
    code: Actions.SQRT,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'sin<sup>-1</sup>',
    code: Actions.ARC_SINUS,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'cos<sup>-1</sup>',
    code: Actions.ARC_COSINUS,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'tan<sup>-1</sup>',
    code: Actions.ARC_TAN,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'ln',
    code: Actions.LN,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'log',
    code: Actions.LOG,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '1/x',
    code: Actions.ONE_DIVIDED_BY_NUMBER,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'e<sup>x</sup>',
    code: Actions.E_DEGREE,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'x<sup>2</sup>',
    code: Actions.SQR,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'x<sup>y</sup>',
    code: Actions.NUMBER_DEGREE,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '|x|',
    code: Actions.ABS_NUMBER,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '2<sup>x</sup>',
    code: Actions.DEGREE_OF_TWO,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: '10<sup>x</sup>',
    code: Actions.DEGREE_OF_TEN,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'x<sup>3</sup>',
    code: Actions.CUBE_OF_NUMBER,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'x!',
    code: Actions.FACTORIAL,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'mod',
    code: Actions.MOD,
    theme: ButtonTheme.SIMPLE
  },

  {
    element: '&#960;',
    code: Actions.PI_NUMBER,
    theme: ButtonTheme.SIMPLE
  },
  {
    element: 'e',
    code: Actions.E_NUMBER,
    theme: ButtonTheme.SIMPLE
  }
];

export { useAdvancedCalculatorButtons };
