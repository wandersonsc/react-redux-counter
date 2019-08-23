export const findComponentByAttr = (component, attr) => {
  const wrapper = component.find(`[data-test-id='${attr}']`);
  return wrapper;
};
