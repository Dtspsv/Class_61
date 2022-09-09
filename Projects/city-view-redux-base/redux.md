# Lesson 20 redux

## 1. third party libraries
- Redux
- MUI

## 2. Redux intro
- For global state management
- Can be used in other frameworks (Angular, Vue)
- Deal react prop drill/ prop hell

## 3. Three principles
1. Single source of truth
    - The global state of your application is stored in an object tree within a single store.
2. State is read-only
    - The only way to change the state is to emit an action, an object describing what happened.
3. Changes are made with pure functions
    - To specify how the state tree is transformed by actions, you write pure reducers.
- https://redux.js.org/understanding/thinking-in-redux/three-principles

## 4. Three cores of redux:
- store(states), action, reducer
- https://redux.js.org/tutorials/essentials/part-1-overview-concepts


## 5. Construct your react-redux project
1. create your react project
    1. Copy the base
    2. npm install
2. npm i redux
3. npm i react-redux
4. import in index.js
    - `import {createStore} from "redux";`
    - `import {Provider} from "react-redux";`
    - `import reducers from "./reducers";`
    - `const reduxStore = createStore(reducers)`
    - `ReactDOM.render(`
      `<Provider store={reduxStore}>`
      `<App/>`
      `</Provider>,`
      `document.getElementById('root')`
      `)`
5. create directories for actions and reducers

## 6. Redux process:
1. State: create initial state of global store in reducer.js
2. Consume: consume the global state through useSelector in UI
3. Handler: handle the changes or side effect
4. Dispatch: dispatch an action creator in handler or useEffect
5. Action: write the action creator in action.js
6. Reduce: use reducer to reduce the current state and action to new state
   1. New state is re-rendered in UI

### 1. State:
- Set up initial state in reducer
  const initState = {
  imgLibrary: []
}

### 2. Consume
- useSelector to consume global state in component
  `const imageLibrary = useSelector(state => state?.cityViewReducer?.imgLibrary)`


### 3. Handler:
- create handler in UI

- in useEffect
   useEffect(() => dispatch(actionCreator()), [])

### 4. Dispatch
- dispatch is used for passing the action to reducer
- set up dispatch in UI component file
  `const dispatch = useDispatch()`
- Then use `dispatch(actionCreator())` in handler or useEffect


### 5. Action
1. Example:
const anAction = {
type: 'clickBtn',
payload: 1
}
- An action is a plain JS object tells what happend
- must contain type
- payload can be omitted
2. Use a function to create action: action creator
   1. Action creator is set up in actions.js file
   2. The function returns the action object

### 6. Reducer
1. A reducer is a function that receives the current state and an action object,
decides how to update the state if necessary, and returns the new state
2. Reducer rules:
- immutability:
  - reducer can only calculate the new state based on prev state & payload
  - you should make immutable updates
  - you should not use async method to update the states
3. Create reducer

export const cityViewReducer = (state = initState, action) => {
switch (action.type) {
case FETCH_ALL_IMAGES:
return {...state, imgLibrary: action?.payload }
default:
return state
}
}

### Safe Navigation Operator
- AKA optional chaining operator
`?`
- Add after action, before .payload


## Homework
1. Redo city view with redux
   1. Challenge: move the dispatch from useEffect to a button event handler
2. Use redux to manage index of img and show it in UI
   