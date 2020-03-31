import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("Renders without crashes", () => {
  const wrapper = shallow(<App />);
  const component = findByTestAttr(wrapper, "app-link");
  expect(component.length).toBe(1);
});
