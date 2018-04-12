import { WINDOW_RESIZE } from '../actions/windowResize';

const windowResize = (state = {}, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default windowResize;
