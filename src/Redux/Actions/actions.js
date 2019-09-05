import { COUNTER } from "./types";

// Action Creators
export const addValue = () => {
  return {
    type: COUNTER.ADD_VALUE,
    isActive: true
  };
};

// Action Creators
export const subtractValue = () => {
  return {
    type: COUNTER.SUBTRACT_VALUE,
    isActive: false
  };
};
