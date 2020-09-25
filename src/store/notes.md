## Redux

A state management utility. Using redux allows to have a single source of truth for the app state and thus provides a better way of sharing data between components. There are two key parts of Redux:

- Actions
- Reducers

### Actions:

Actions define a type and some payload. These are used to inform what kind of change in the state is needed and the payload that goes with this change. An action is simply a function and cannot update the state directly. Every action needs a reducer that can take in the payload and make the necessary changes in the state.

### Reducers:

Reducers are the only place where the app can interact with the state. For each action a reducer clause needs to be written to make changes to the state wrt to the passed action type. A reducer is also a function that takes in the previous state and an action and returns a new state.

## Connecting Redux to React Component

`react-redux` allows to connect redux state to any react component using the `connect` method. The `connect` method returns a higher order component with access to redux state.

### Syntax

```typescript
/*
 * If connect is passed no arguments the dispatch function is available as props.dispatch to the component
 * Using props.dispatch any action can be invoked
 * This approach has one downside that it has direct access to the dispatch method and we want to keep our component
 * dumb wrt redux
 */

// defining connection
const connection = connect(
  null,
  null
);

// dispatching action
const MyComponent = ({ dispatch }) => {
  useEffect(() => {
    dispatch(someAction);
  });
  return <div>My Component</div>;
};

// mapDispatchToProps
/*
 *  A better way to ensure the component stays unaware of redux and making our component actions (eg button click) more *  flexible.
 *  There are two ways of writing mapDispatchToProps
 * 1. Function Form: Allows more customization; has direct access to dispatch & can optionally pass down ownProps
 * 2. Object Form: Redux calls dispatch itself, this is easier to use and is more declarative
 * Object Form is recommended unless customization is needed for a particular use case
 *
 */
```
