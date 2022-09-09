import "./ImageList.scss"
import {useSelector} from "react-redux";

const ImageList = ({images}) => {

    // use data from global store
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imgLibrary)


    console.log('images got from ImageList', images)
    return(
        <div className="gallery">
            {
                imageLibrary && imageLibrary.map((img, index) => {
                // images && images.map((img, index) => {
                    return <div
                        className="imgContainer"
                        key={index}
                        style={{background: `url('${img.url}') no-repeat center center fixed`}}>
                    </div>
                })
            }
        </div>
    )
}

export default ImageList