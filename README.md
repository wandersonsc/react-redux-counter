## React & Redux Counter

[![Build Status](https://travis-ci.org/wandersonsc/react-redux-counter.svg?branch=master)](https://travis-ci.org/wandersonsc/react-redux-counter)
[![codecov](https://codecov.io/gh/wandersonsc/react-redux-counter/branch/master/graph/badge.svg)](https://codecov.io/gh/wandersonsc/react-redux-counter)

This is more than your average Counter app, we are going to use Redux, and you may be think: `Hey! ain't redux a little overkill?` yes, maybe, but we need to challenge ourselves, and in the process we are going to take advantage of **Redux Store**, **Reducer**, **CombineReducers**, **Destructuring** and **Material-ui**.
Also, We are going to write unit test to ensure, that if anything changes we will be able to cover it with a test.

## 1. Technology Stack

- React
- Redux
- Jest
- Enzyme
- Material-ui

## 2. Get the code and start the server.

1. Get the code:

```
git clone https://github.com/wandersonsc/react-redux-counter
```

2. Run it! Do **either** one of these based on what OS you are using:

```sh
   - If you are on Linux: npm start
   - If you are on Mac: npm start
   - If you are on Win: npm start
```

## 3. Testing

Run your tests with a command like this:

```sh
jest && codecov
```

## 4. Two different ways of dealing with mapStateToPros

### mapStateToPros

```js
const mapStateToProps = state => {
  const {
    counter: { value, color_status }
  } = state;
  console.log("state: ", state);
  return {
    value,
    color_status
  };
};
```

### 5. Now the Shorthand Syntax:

It is more cleaner to read and more easier to some of you to understand.

```js
({ counter: { value, color_status } }) => ({ value, color_status });
```

### 5. Reducer

Make sure your reducer always return something, otherwise, you'll end up with an **undefined** state.

```js
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
```
