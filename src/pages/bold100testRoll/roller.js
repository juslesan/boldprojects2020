import React from 'react'
import ImageLeft from './imageRight'
import img1 from '../../img/bold100test/DSC06410.jpg'
import img2 from '../../img/bold100test/DSC06425.jpg'
import img3 from '../../img/bold100test/DSC06486.jpg'
import img4 from '../../img/bold100test/DSC06498.jpg'
import img5 from '../../img/bold100test/DSC06507.jpg'
import ImageRight from '../bold100testRoll/imageRight'

export default function roller(currentRoll) {
  const text = "Many had shown interest for our projects and we wanted to give the opportunity to others to participate. In 2018 we planned a 100 km long route that went around Greater Helsinki. Two inspiring people, both named Emil, decided to take on the challenge. They ran for about 20 hours before reaching the goal."
  if (currentRoll === 0) {
    return(
      <ImageRight text={text} img={img1}/>
    )
  }
  if (currentRoll === 1) {
    return(
      <ImageRight text={text} img={img2}/>
    )
  }
  if (currentRoll === 2) {
    return(
      <ImageRight text={text} img={img3}/>
    )
  }
  if (currentRoll === 3) {
    return(
      <ImageRight text={text} img={img4}/>
    )
  }
  if (currentRoll === 4) {
    return(
      <ImageRight text={text} img={img5}/>
    )
  }
}