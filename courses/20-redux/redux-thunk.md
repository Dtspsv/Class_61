# redux-thunk

## 1. Thunk intro
- redux-thunk is a middleware that lets you call action creators 
that returns a function instead of action object
- the function receives the store's dispatch method,
  - the function make an async logic
  - when the response is ready, use dispatch to pass action object to reducer

- https://redux.js.org/tutorials/essentials/part-5-async-logic

## 2. Thunk set up
1. npm i redux-thunk
2. add applyMiddleware(thunk) in index.js createStore

- install axios
- npm i axios
- axios.get(`url`)

## 3. Use thunk to create async action
- regular action creator: return an object (action)
  `const fetchImage = () => {
  return {
  type: 'FETCH_ALL_IMAGES',
  payload: imgLibrary
  }
  }`

- async action creator: return a function which do async logic and dispatch an object(action)
  `const fetchImageAPI = () => dispatch => {
  asyncLogic
  .then(
  getData
  dispatch({
  type: 'FETCH_ALL_IMAGES',
  payload: imgLibrary
  })
  )
  }`

- use async action creator in handler or uesEffect same as regular action creator


## 4. async await, try catch

- make an async promise to wait use await
- use try catch to deal with error

const fetchImageAPI2 = () => async dispatch => {
try {
let temp = await axios.get(BasicUrl, {})
dispatch({
type: 'FETCH_ALL_IMAGES',
payload: imageList
})
} catch (e) {
console.log(e)
}
}

## 5. loading state
1. find a loading gif
   https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921
2. create an isLoading state
3. When starting the action, set isLoading true
4. Once get the data, set isLoading false
5. Don't forget the error, to set isLoading false
6. Use isLoading in component


## 6. Avoid hard coding
- use constants.js or helper.js to store all the strings

## homework
1. Show background img
   1. use redux to store url for app background
      1. challenge: without adding any more global state, show the background img
   2. when click the img list, show that as background
2. Make the search input work 
   1. Create a button, search images with the city name in input
   2. Create an action to update the searched word property.
   3. Replace side effect in useEffect with the new action.
   4. Do you need to create a state in global store for the searched word?
   5. Do you need to create a reducer to update the searched word in global state?
   6. use the global state in components 