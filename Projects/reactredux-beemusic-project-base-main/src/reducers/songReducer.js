import {actionType} from "../Helper";

// state shape
const initState = {
    rawSongList: [],
    id: undefined,
}

export const songReducer = (state = initState, action) => {

    let id = action.payload
    let newSongList = [...state.rawSongList]

    switch (action.type) {
        case actionType.FETCH_ALL_SONGS:
            console.log(`[reduce] ${actionType.FETCH_ALL_SONGS}`, action.payload)
            // we need to update it to the state
            // state immutable
            // copy state, update the copy
            // return the copy
            // object, array,


            /*
              let newState = {...state}
              newState.rawSonglist = action.payload
              return newState;
             */
            return {...state, rawSongList: action.payload}
        case actionType.SELECT_SONG:
            console.log(`[reduce] ${actionType.SELECT_SONG}`, action.payload)
            newSongList = newSongList.map(s => s.id === id ? {...s, checked: !s.checked} : s)
            return {...state, rawSongList: newSongList}

        case actionType.LIKED_SONG:
            console.log(`[reduce] ${actionType.LIKED_SONG}`, action.payload)
            /*
            newSongList = newSongList.map(s => {
                if (s.id === id) {
                    return {...s, liked: !s.liked}
                } else {
                    return s
                }
            })
             */


            newSongList = newSongList.map(s => s.id === id ? {...s, liked: !s.liked} : s)
            return {...state, rawSongList: newSongList}
        default:
            return state
    }
}