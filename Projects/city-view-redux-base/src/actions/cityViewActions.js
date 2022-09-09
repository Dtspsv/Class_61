import {FETCH_ALL_IMAGES} from "../consts";

const imgLibrary = [
    {
        des: 'Crossing',
        url: 'https://images.unsplash.com/photo-1506751470038-e579eb91f580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwxfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'body of water',
        url: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwzfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'city buildings',
        url: 'https://images.unsplash.com/photo-1503206557829-9a9979ad1227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw0fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'city wallpapers',
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max'
    },
    {
        des: 'high-rise buildings',
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw1fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    }
]


// action creator (to return action object)

export const fetchImageInAction = () => {
    console.log('fetch in action')
    return {
        type: FETCH_ALL_IMAGES,
        payload: imgLibrary
    }
}