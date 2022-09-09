import {actionType} from "../Helper";


const songs = [
    {id: 1, name: 'One kiss', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
    {id: 2, name: 'One kiss2', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
    {id: 3, name: 'One kiss3', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
    {id: 4, name: 'One kiss4', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
    {id: 5, name: 'One kiss5', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
    {id: 6, name: 'One kiss6', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
    {id: 7, name: 'One kiss7', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
    {id: 8, name: 'One kiss8', artist: 'Taylor', length: 3.34, cover: 'img/album.jpg'},
]

// action creator
const fetchAllSongs = () => {

    console.log(`[action] ${actionType.FETCH_ALL_SONGS}`)

    // liked, playing, checked
    // ... three dot operator, spread operator

    // copy component data structure, object, array, {...s} [...songs]
    // mdn spread operator

    return {// action
        type: actionType.FETCH_ALL_SONGS,
        payload: songs.map(s => ({...s, liked: false, playing: false, checked: false}))
        // map, filter, find, some, findIndex, sort, push, slice, foreach
    }
}

const selectSong = id => {
    console.log(`[action] ${actionType.SELECT_SONG}`)
    return {// action
        type: actionType.SELECT_SONG,
        payload: id,
    }
}

const likedSong = id => {
    console.log(`[action] ${actionType.LIKED_SONG}`)
    return {// action
        type: actionType.LIKED_SONG,
        payload: id,
    }
}

export default {
    fetchAllSongs,
    selectSong,
    likedSong
}