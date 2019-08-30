import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findComponentByAttr } from "../../Utils/index";

const props = {};
const component = shallow(<App {...props} />);

describe("App Component", () => {
  test("should render without any errors", () => {
    const wrapper = findComponentByAttr(component, "appWrapper");
    expect(wrapper.length).toBe(1);
  });
});
