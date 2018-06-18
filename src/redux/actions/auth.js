//----------------
// Constants
//----------------
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

//----------------
// Action creators
//----------------

/**
 * @export function logIn
 * @returns {object} action with logs in the user
 */
export function logIn() {
  return {
    type: LOGIN,
  };
}

/**
 * @export function logOut
 * @returns {object} action with logs out the user
 */
export function logOut() {
  return {
    type: LOGOUT,
  };
}

