//----------------
// Constant
//----------------
export const WINDOW_RESIZE = 'WINDOW_RESIZE';

//----------------
// Action creator
//----------------

/**
 * @export function windowResize
 * @param {object} payload
 * @returns {object} action that resize window dimension
 */
export const windowResize = payload => ({
  type: 'WINDOW_RESIZE',
  payload,
});
