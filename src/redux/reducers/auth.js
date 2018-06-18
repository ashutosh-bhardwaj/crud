import { LOGIN, LOGOUT } from '../actions/auth';

//---------------------
// Reducer Handler
//---------------------
const REDUCER_HANDLERS = {
  [LOGIN]: (state = {}) => ({
    ...state,
    loggedIn: true,
  }),
  [LOGOUT]: (state = {}) => ({
    ...state,
    loggedIn: false,
  }),
};

//-----------------------
// Reducer
//-----------------------
export default function auth(state = {}, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
