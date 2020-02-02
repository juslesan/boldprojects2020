import React from 'react'
import ImageRight from './imageRight'

export default function roller(currentRoll, imgs, text, popup) {
    return(
      <ImageRight text={text} img={imgs[currentRoll]} popup={popup}/>
    )
  
}