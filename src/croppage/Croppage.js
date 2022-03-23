import React from 'react'
// hooks
import { useSelector } from 'react-redux'

export const Croppage = () => {

    const crop = useSelector(state => state.cropreducer)
    console.log(crop)
    return (
        crop.map((element, index) => {
            return (
                <div key={index}>
                    <img src={`http://192.168.113.14:4000/image/getimage/crop/${element.banner_image}`} />
                    <p>{element.cropName}</p>
                    <p>{element.typeofcrop}</p>
                </div>
            )
        })
    )
}
