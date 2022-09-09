import {FETCH_ALL_IMAGES} from "../consts";

const initState = {
    imgLibrary: [],
    clickImgIndex: null,
    isLoading: false
}

export const cityViewReducer = (state = initState, action) => {
  switch (action.type) {
      case FETCH_ALL_IMAGES:
          console.log('fetch in reducer')
          return {...state, imgLibrary: action?.payload }
      case 'CLICK_IMAGE':
          return {...state, clickImgIndex: action?.payload}
      case 'LOADING':
          return {...state, isLoading: action?.payload}
      default:
          return state
  }
}