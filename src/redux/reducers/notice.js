import { OPEN_NOTICE, CLOSE_NOTICE } from '../actions/notice';

//---------------------
// Reducer Handler
//---------------------
const initialState = {
  open: false,
  message: '',
  queuedMessages: [],
};

const REDUCER_HANDLERS = {
  [OPEN_NOTICE]: (state, { payload }) => {
    if (typeof (payload) === 'object' && payload.length) {
      return {
        ...state,
        open: true,
        message: payload.splice(0, 1),
        queuedMessages: payload,
      };
    }
    return {
      ...state,
      open: true,
      message: payload,
    };
  },
  [CLOSE_NOTICE]: (state) => {
    const { queuedMessages } = state;

    if (queuedMessages && queuedMessages.length) {
      return ({
        ...state,
        message: queuedMessages.splice(0, 1),
        queuedMessages,
      });
    }
    return {
      ...initialState,
    };
  },
};

//-----------------------
// Reducer
//-----------------------
export default function notifyReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
