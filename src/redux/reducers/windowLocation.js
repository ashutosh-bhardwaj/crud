import { SET_WINDOW_LOCATION } from '../actions/windowLocation';

//---------------------
// Reducer Handler
//---------------------

const REDUCER_HANDLERS = {
  [SET_WINDOW_LOCATION]: (state, { payload }) => ({
    ...state,
    location: payload,
  }),
};

//-----------------------
// Reducer
//-----------------------
export default function windowLocation(state = {}, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
