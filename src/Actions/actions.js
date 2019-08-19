import { COUNTER } from "./types";

// Action Creators
export const addValue = () => {
  return {
    type: COUNTER.ADD_VALUE,
    color_status: true
  };
};

// Action Creators
export const subtractValue = () => {
  return {
    type: COUNTER.SUBTRACT_VALUE,
    color_status: false
  };
};
