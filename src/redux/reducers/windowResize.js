import { WINDOW_RESIZE } from '../actions/windowResize';

//---------------------
// Reducer Handler
//---------------------

const REDUCER_HANDLERS = {
  [WINDOW_RESIZE]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
};

//-----------------------
// Reducer
//-----------------------
export default function windowResize(state = {}, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}