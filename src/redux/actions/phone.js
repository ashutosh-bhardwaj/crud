//----------------
// Constants
//----------------
export const ADD_PHONE = 'ADD_PHONE';
export const REMOVE_PHONE = 'REMOVE_PHONE';
export const UPDATE_PHONE = 'UPDATE_PHONE';

let nextPhone = 0;

//----------------
// Action creators
//----------------

/**
 * @exports function addPhone
 * @param {object} payload
 * @returns {object} action which add a phone to store
 */
export function addPhone(payload) {
  return {
    type: 'ADD_PHONE',
    id: nextPhone++,
    payload,
  };
}


/**
 * @exports function remove
 * @param {string} id
 * @returns {object} action which remove a phone with the `id` from store
 */
export const removePhone = id => ({
  type: 'REMOVE_PHONE',
  id,
});


/**
 * @exports function updatePhone
 * @param {object} payload
 * @param {string} id
 * @returns {object} action which update the phone with `id` in store
 */
export const updatePhone = (id, payload) => ({
  type: 'UPDATE_PHONE',
  id,
  payload,
});
