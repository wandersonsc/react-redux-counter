import { COUNTER } from "../Actions/types";

export const initState = {
  value: 0,
  color_status: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case COUNTER.ADD_VALUE:
      return {
        ...state,
        value: state.value + 1,
        color_status: action.color_status
      };
    case COUNTER.SUBTRACT_VALUE:
      return {
        ...state,
        value: state.value - 1,
        color_status: action.color_status
      };
    default:
      return state;
  }
};
