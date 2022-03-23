import React from 'react'
import { Link } from 'react-router-dom'
// hooks
import { useSelector, useDispatch } from 'react-redux'
// action
import { currentcropsetter } from  "../actions/currentcropaction.js"

export const Croppage = () => {

    const dispatch = useDispatch()
    const crop = useSelector(state => state.cropreducer)
    const currentcrop = useSelector(state => state.currentcropreducer)

    function setSpecificCrop(event) {
        console.log(event.target)
        var croptobesetted = crop[event.target.getAttribute("cropindex")]
        console.log(croptobesetted)
        dispatch(currentcropsetter(croptobesetted))
    }

    return (
        crop.map((element, index) => {
            return (
                <div key={index} cropindex={index} onClick={
                    (event) => {
                        setSpecificCrop(event)
                    }
                }>
                    <img src={`http://192.168.113.14:4000/image/getimage/crop/${element.banner_image}`} cropindex={index} />
                    <p>{element.cropName}</p>
                    <p>{element.typeofcrop}</p>
                </div>
            )
        })
    )
}
