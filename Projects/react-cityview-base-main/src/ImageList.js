import './ImageList.scss'

const ImageList = ({images, updateMainBG}) => {
    return <div className='carousel'>
        {
            images && images.map((img, index) =>
                <div key={index}
                     onClick={() => updateMainBG(img)}
                     style={{background: `url('${img.thumb}') no-repeat center center/cover fixed`}}></div>)
        }

    </div>
}

export default ImageList