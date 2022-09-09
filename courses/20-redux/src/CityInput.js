import {useEffect, useState} from "react";
import "./CityInput.scss";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import {useDispatch} from "react-redux";
import {fetchAsyncAwait, fetchImageAsync, fetchImageInAction} from "./actions/cityViewActions";

const CityInput = ({cbUpdateImages}) => {
    const dispatch = useDispatch()

    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])

    // useEffect using function in component
    useEffect(() => fetchCity(city), [city])

    // useEffect using dispatch action
    // useEffect(() => dispatch(fetchImageInAction()), [])

    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' &&
        newCity !== city && setCity(newCity)
    }

    const fetchCity = city =>
        axios.get(BasicUrl, {
            params: {
                query: city,
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(res => {
            let {data: {results}} = res
            let imageList = results.map(item => ({
                des: item.alt_description,
                regular: item.urls.regular,
                // thumb: item.urls.thumb
                url: item.urls.thumb
            }))
            setImages(imageList)
            cbUpdateImages(imageList)
            console.log('tidied data', imageList)

        }).catch(err => console.log('fetch city http error!', err))


    return (
        <div className="searchBar">
            <input
                className="inputCity"
                type="text"
                placeholder="Search City here ..."
                onKeyDown={cbInput}
            />
            <button onClick={() => dispatch(fetchImageInAction())}>Fetch from Action</button>
            <button onClick={() => dispatch(fetchImageAsync())}>Fetch with Async Action</button>
            <button onClick={() => dispatch(fetchAsyncAwait())}>Fetch Async Await</button>
            {/*{JSON.stringify(images)}*/}
        </div>
    )
}

export default CityInput