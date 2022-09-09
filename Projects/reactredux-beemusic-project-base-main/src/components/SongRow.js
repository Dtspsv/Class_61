import "./SongRow.scss"
import {CheckedIcon, FavIcon, PlayingIcon} from "./FavIcon";
import {useDispatch} from "react-redux";
import actions from "../actions";

const SongRow = ({song}) => {
    const dispatch = useDispatch()
    return (
        <div className="songRow">
            <div className="songRow_Index">
                <div>{song.id}</div>
                <CheckedIcon checked={song.checked} onClick={() => dispatch(actions.songAction.selectSong(song.id))}/>

            </div>
            <div className="songRow_Image">
                <img src={song.cover} alt=""/>
            </div>
            <div className="songRow_Content">
                <div className="songRow_Content_Title">
                    <div className="songRow_Content_Title_Name">{song.title}</div>
                    <div className="songRow_Content_Title_Lyrics">{song.artist}</div>
                </div>
                <div className="songRow_Content_Album">
                    {song?.album ?? 'Album'}
                </div>
            </div>

            <div className="songRow_Length">{song.length}</div>
            <div className="songRow_Button">
                <FavIcon liked={song.liked} onClick={() => dispatch(actions.songAction.likedSong(song.id))}/>
                <PlayingIcon playing={song.playing}/>
            </div>

        </div>
    )

}

export default SongRow