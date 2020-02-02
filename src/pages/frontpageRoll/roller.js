import React from 'react'
import ImageLeft from './imageLeft'
import ImageRight from './imageRight'
import ImageOnly from './imageOnly'
import TextOnly from './textOnly'
import img1 from '../../img/voyage/000828370021.jpg'
import img2 from '../../img/voyage/000828390014.jpg'
import img3 from '../../img/voyage/000828360019.jpg'
import img4 from '../../img/voyage/000828390010.jpg'
import img6 from '../../img/voyage/000828370013.jpg'
import img7 from '../../img/voyage/000828360004.jpg'
import img8 from '../../img/voyage/000828370027.jpg'

export default function roller(currentRoll, content, language) {
  if (currentRoll === 0) {
    return(
      <ImageRight text="Lorem lipsum lörs lärä toimiiko tämä no hyvä" img={img1}/>
    )
  }
  if (currentRoll === 1) {
    return(
      <ImageLeft text="Lorem lipsum lörs lärä toimiiko tämä no hyvä" img={img2}/>
    )
  }
  if (currentRoll === 2) {
    return(
      <ImageOnly img={img3}/>
    )
  }
  if (currentRoll === 3) {
    return(
      <ImageRight text="Lorem lipsum lörs lärä toimiiko tämä no hyvä" img={img4}/>
    )
  }
  if (currentRoll === 4) {
    return(
      <TextOnly text="Lorem lipsum lörs lärä toimiiko tämä no hyvä. Lorem lipsum lörs lärä toimiiko tämä no hyvä. "/>
    )
  }
  if (currentRoll === 5) {
    return(
      <ImageRight text="Lorem lipsum lörs lärä toimiiko tämä no hyvä" img={img6}/>
    )
  }
  if (currentRoll === 6) {
    return(
      <ImageOnly img={img7}/>
    )
  }
  if (currentRoll === 7) {
    return(
      <ImageRight text="Lorem lipsum lörs lärä toimiiko tämä no hyvä" img={img8}/>
    )
  }
}