import { addValue, subtractValue } from "./actions";
import { COUNTER } from "./types";

describe("Actions Creator", () => {
  test("should create an action to increases by 1", () => {
    const counter = 1;
    const expectedAction = {
      type: COUNTER.ADD_VALUE,
      isActive: true
    };
    expect(addValue(counter)).toEqual(expectedAction);
  });

  test("should create an action to decrease by 1", () => {
    const counter = 1;
    const expectedAction = {
      type: COUNTER.SUBTRACT_VALUE,
      isActive: false
    };
    expect(subtractValue(counter)).toEqual(expectedAction);
  });
});
