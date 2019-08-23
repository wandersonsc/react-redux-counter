import React from "react";
import Home from "./index";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";
import { Provider } from "react-redux";

const initStore = {
  counter: {
    value: 1,
    color_status: false
  }
};

const mockedStore = configureMockStore()(initStore);

export const mountWithProvider = children => (store = mockedStore) =>
  mount(<Provider store={store}>{children}</Provider>);

const props = {};
const component = mountWithProvider(<Home {...props} />)();

// Test Suite

describe("Home Component", () => {
  it("should render without any errors", () => {
    expect(component.find('[data-test-id="homeComponent"]').text()).toBe(
      "React & Redux Counter"
    );
  });
});
