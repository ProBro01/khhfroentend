import React from 'react'
import { Link } from 'react-router-dom'
// hooks
import { useSelector, useDispatch } from 'react-redux'
// action
import { currentcropsetter } from  "../actions/currentcropaction.js"
// hooks
import { useHistory } from 'react-router-dom'

export const Croppage = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const crop = useSelector(state => state.cropreducer)
    const currentcrop = useSelector(state => state.currentcropreducer)

    function setSpecificCrop(event) {
        var croptobesetted = crop[event.target.getAttribute("cropindex")]
        dispatch(currentcropsetter(croptobesetted))
        history.push("/specifedcrop")
    }

    return (
        crop.map((element, index) => {
            return (
                <div key={index} cropindex={index} onClick={
                    (event) => {
                        setSpecificCrop(event)
                    }
                }>
                    <img src={`http://192.168.185.14:4000/image/getimage/crop/${element.banner_image}`} cropindex={index} />
                    <p>{element.cropName}</p>
                    <p>{element.typeofcrop}</p>
                </div>
            )
        })
    )
}
