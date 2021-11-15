/**
 * Numbers
 */
enum Numbers {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE
}

/**
 * Actions
 */
enum Actions {
  CLEAR = 'clear',
  CLEAR_MONITOR = 'clear-monitor',
  PERCENTAGE = 'percentage',
  DIVIDE = 'divide',
  MULTIPLY = 'multiply',
  MINUS = 'minus',
  PLUS = 'plus',
  CHANGE_SIGN = 'change-sign',
  ADD_COMMA = 'add-comma',
  EQUAL = 'equal',
  SQRT = 'sqrt',
  CHANGE_ANGLE_UNITY = 'change-angle-unity',
  LN = 'ln',
  LOG = 'log',
  ONE_DIVIDED_BY_NUMBER = 'one-divided-by-number',
  E_DEGREE = 'e-degree',
  SQR = 'sqr',
  NUMBER_DEGREE = 'number-degree',
  ABS_NUMBER = 'abs-number',
  PI_NUMBER = 'pi-number',
  E_NUMBER = 'e-number',
  DEGREE_OF_TWO = 'degree-of-two',
  DEGREE_OF_TEN = 'degree-of-ten',
  CUBE_OF_NUMBER = 'cube-of-number',
  FACTORIAL = 'factorial',
  MOD = 'mod',
  ARC_SINUS = 'arc-sinus',
  ARC_COSINUS = 'arc-cosinus',
  ARC_TAN = 'arc-tan',
  SINUS = 'sinus',
  COSINUS = 'cosinus',
  TAN = 'tan'
}

/**
 * Button Types
 */
type ButtonTypes = Numbers | Actions;

export { Actions, Numbers };
export type { ButtonTypes };
