import "./ImageList.scss"
import {useDispatch, useSelector} from "react-redux";
import {clickImg} from "./actions/cityViewActions";

const ImageList = ({images}) => {
    const dispatch = useDispatch()


    // use data from global store
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imgLibrary)


    console.log('images got from ImageList', images)
    return (
        <div className="gallery">
            {
                imageLibrary && imageLibrary.map((img, index) => {
                    // images && images.map((img, index) => {
                    return <div
                        className="imgContainer"
                        key={index}
                        style={{background: `url('${img.url}') no-repeat center center fixed`}}
                        onClick={() => dispatch(clickImg(index))}
                    >
                    </div>
                })
            }
        </div>
    )
}

export default ImageList