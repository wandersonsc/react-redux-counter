## React & Redux Counter

This is more than your typical Counter app, we are going to use Redux, and you may be think: `Hey! ain't redux a little overkill?`. Yes, maybe, but we need to challenge ourselves, and in the process we are going to take advantage of **Redux Store**, **Reducer**, **CombineReducers**, **Destructuring** and **Material-ui**.
Also, We are going to write unit test to make sure the our code is working properly.

## Technology Stack

- React
- Redux
- Jest
- Material-ui

## Get the code and start the server.

1. Get the code:

```
git clone https://github.com/wandersonsc/react-redux-counter
```

2. Run it! Do **either** one of these based on what OS you are using:

   - If you are on Linux: `npm start`
   - If you are on Mac: `npm start`

# Two different ways of dealing with mapStateToPros

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

### Now the Shorthand Syntax:

It is more cleaner to read and more easier to some of you to understand.

```js
  ({ counter: { value, color_status } }) => ({ value, color_status }),
```

### Reducer

Make sure your reducer always return something, otherwise, you'll end up with an **undefined** state

```js
export default (state = initState, action) => {
  switch (action.type) {
    case COUNTER.ADD_VALUE:
      return {
        ...state,
        value: state.value + 1,
        color_status: action.color_status
      };
    case COUNTER.SUBTRACT_VALUE:
      return {
        ...state,
        value: state.value - 1,
        color_status: action.color_status
      };
    default:
      return state;
  }
};
```

```

```
