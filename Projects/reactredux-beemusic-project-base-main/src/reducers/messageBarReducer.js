import {actionType} from "../Helper";

const initState = {}

export const messageBarReducer = (state = initState, action) => {
    switch (action.type) {
        // case actionType.FETCH_ALL_SONGS:
        //     console.log(`[reduce] ${actionType.FETCH_ALL_SONGS}`, action.payload)
        //     return state
        default:
            return state
    }
}