import React from 'react'
import { useSelector } from 'react-redux'

export const Specifiedcrop = () => {

    const currentcrop = useSelector(state => state.currentcropreducer)
  return (
    <div>{currentcrop.description}</div>
  )
}
