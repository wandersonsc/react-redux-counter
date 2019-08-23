import counter from "./Reducers/counter";

describe("Counter Reducer", () => {
  it("has a default state", () => {
    expect(counter(undefined, { type: "unexpected" })).toEqual({
      value: 0,
      color_status: false
    });
  });
});
