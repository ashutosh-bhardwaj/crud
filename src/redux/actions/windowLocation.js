//----------------
// Constant
//----------------
export const SET_WINDOW_LOCATION = 'SET_WINDOW_LOCATION';


//----------------
// Action creator
//----------------

/**
 * @export function setWindowLocation
 * @param {object} payload
 * @returns {object} action which set the window location
 */
export const setWindowLocation = payload => ({
  type: SET_WINDOW_LOCATION,
  payload,
});
