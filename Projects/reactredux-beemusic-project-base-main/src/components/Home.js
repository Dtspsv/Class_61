import './Home.scss'
import axios from "axios";
import {APIURL} from "../Helper";
import {useEffect, useState} from "react";
import AllList from "./AllList";
import FavList from "./FavList";
import PlayList from "./PlayList";
import actions from "../actions";
import songAction from "../actions/songAction";
import {useDispatch} from "react-redux";

// Functional component, FC
// Class based component, CC
const Home = () => {

    const [rawSongList, setRowSongList] = useState([])
    console.log(rawSongList)
    // dispatch: useDispatch(), mapDispatchToProps
    const sfDispatch = useDispatch()

    // const fetchData = async () => {
    //     console.log('i triggered, ?')
    //     // async, sync
    //     let res = await axios.get(APIURL) // Promise
    //     console.log('data returned,', res.data)
    //     setRowSongList(res.data)
    //     console.log(rawSongList)
    //     // .then(res => {
    //     //     console.log('data returned,', res.data)
    //     //     setRowSongList(res.data)
    //     // })
    //     // .catch(err => console.log('error fetching data,', err))
    //
    //
    //     // fetch(APIURL)
    //     //     .then(res => res.json())
    //     //     .then(res => console.log('returned value:', res))
    // }
    //
    // useEffect(() => fetchData, [])
    // console.log(rawSongList)
    // console.log('hi')

    // no second parameter,
    // [], mount, render
    // []


    return <section>
        <button onClick={() => sfDispatch(actions.songAction.fetchAllSongs())}>Fetch Songs</button>
        <div className="container">
            <AllList/>
            <FavList/>
            <PlayList/>

        </div>
    </section>

}

export default Home