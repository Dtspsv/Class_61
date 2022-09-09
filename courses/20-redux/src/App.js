import "./App.css";
import CityInput from "./CityInput";

import {useState} from "react";

import ImageList from "./ImageList";
import {useSelector} from "react-redux";

function App() {
    const imgIndex = useSelector(state => state?.cityViewReducer?.clickImgIndex)
    const isLoading = useSelector(state => state?.cityViewReducer?.isLoading)

    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)

    return <div className="App">
        <CityInput cbUpdateImages={updateImages}/>
        <h1>{imgIndex}</h1>
        <ImageList images={images}/>
        {isLoading && <img src='https://i.stack.imgur.com/kOnzy.gif'/>}

    </div>
}

export default App;
