
import './List.scss'
import {useSelector} from "react-redux";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SongRow from "./SongRow";

const FavList = () => {

    let songs = useSelector(state => state.songReducer.rawSongList)
    return    <div className="listContainer">
        <div className="songList">
            <div className="list">
                <div className="listRow title">Fav List</div>
                <div className="listRow">
                    {
                        songs.filter(s => s.liked).map((s, index) => <SongRow key={index} song={s}/>)
                    }
                </div>

            </div>
        </div>
    </div>
}

export default FavList