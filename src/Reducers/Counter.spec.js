import counter, { initState } from "./counter";
import { COUNTER } from "../Actions/types";

//Test Suites:

describe("Counter Reducer", () => {
  it("should return the default state when an action type is not passed", () => {
    const action = {};
    const newState = counter(undefined, action);
    expect(newState.value).toEqual(initState.value);
  });

  it("should increment the counter by 1", () => {
    const action = { type: COUNTER.ADD_VALUE };
    const newState = counter(initState, action);
    expect(newState.value).toBe(initState.value + 1);
  });

  it("should decrement the counter by 1", () => {
    const action = { type: COUNTER.SUBTRACT_VALUE };
    const newState = counter(initState, action);
    expect(newState.value).toBe(initState.value - 1);
  });
});
