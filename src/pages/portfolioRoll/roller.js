import React from 'react'
import ImageRight from './imageRight'

export default function roller(currentRoll, imgs, text) {
    return(
      <ImageRight text={text} img={imgs[currentRoll]}/>
    )
  
}