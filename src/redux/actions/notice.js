//------------------------
// Constants
//------------------------
export const OPEN_NOTICE = 'OPEN_NOTICE';
export const CLOSE_NOTICE = 'CLOSE_NOTICE';
const MESSAGE = 'Sorry, something went wrong. Please try again.';

//------------------------
// Actions
//------------------------

/**
 * @export function openNotice
 * @param {object} payload 
 * @returns {object} action opens the snack bar
 */
export function openNotice(payload) {
  return ({
    type: OPEN_NOTICE,
    payload,
  });
}

/**
 * @export function notify
 * @param {string} message text to be shown at snack bar
 * @returns {object} action which opens the snackbar at the bottom of the app
 */
export function notify(value = {}) {
  const { error = {}, message = MESSAGE } = value;
  let errMsg = '';
  if (
    error.response &&
    error.response.status !== 500 &&
    error.response.body &&
    error.response.body.message
  ) {
    const responseMsg = error.response.body.message;
    errMsg = error.response.body.showContact
      ? `${responseMsg} ${MESSAGE}`
      : responseMsg;
  }
  return (dispatch) => {
    dispatch(openNotice(errMsg || message));
  };
}

/**
 * @export function closeNotice
 * @returns {object} action closes the snackbar
 */
export function closeNotice() {
  return {
    type: CLOSE_NOTICE,
  };
}
