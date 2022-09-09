import {FETCH_ALL_IMAGES} from "../consts";

const initState = {
    imgLibrary: [],

}

export const cityViewReducer = (state = initState, action) => {
  switch (action.type) {
      case FETCH_ALL_IMAGES:
          console.log('fetch in reducer')
          return {...state, imgLibrary: action?.payload }
      default:
          return state
  }
}