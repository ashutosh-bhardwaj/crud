import { ADD_PHONE, REMOVE_PHONE, UPDATE_PHONE } from '../actions/phone';

//---------------------
// Reducer Handler
//---------------------
const REDUCER_HANDLERS = {
  [ADD_PHONE]: (state = [], { id, payload }) => ([
    ...state,
    {
      id,
      ...payload,
    },
  ]),
  [REMOVE_PHONE]: (state = [], { id }) => (
    state.filter(phone => phone.id !== id)
  ),
  [UPDATE_PHONE]: (state = [], { id, payload }) => state.map((phone) => {
    if (phone.id === id) {
      return ({ ...payload, id });
    }
    return phone;
  }),
};

//-----------------------
// Reducer
//-----------------------
export default function phones(state = {}, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
