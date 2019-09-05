import { COUNTER } from "../Actions/types";

export const initState = {
  value: 0,
  isActive: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case COUNTER.ADD_VALUE:
      return {
        ...state,
        value: state.value + 1,
        isActive: action.isActive
      };
    case COUNTER.SUBTRACT_VALUE:
      return {
        ...state,
        value: state.value - 1,
        isActive: action.isActive
      };
    default:
      return state;
  }
};
