import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import video from '../video/promo.mp4'
import img1 from '../img/gallery/000828370015.jpg'
import img2 from '../img/gallery/ICEWAVE.jpg'
import img3 from '../img/gallery/Mathias.jpg'
import img4 from '../img/gallery/rsz__dsf9742.jpg'
import img5 from '../img/gallery/rsz_1pic2.jpg'
import img6 from '../img/gallery/rsz__dsf1101.jpg'
import img7 from '../img/bold100test/DSC06425.jpg'
import img8 from '../img/gallery/rsz_dos_men_1.jpg'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Grid container spacing={4} alignItems="flex-start" justify="left">
        <Grid item xs={12} className="pageHeader">
          <h1>Gallery</h1>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={img1} className="gallery1Img"/>
          <p className="galleryImgText"> Bold Voyage x Notes Magazine</p>
        </Grid>
        <Grid item xs={12} sm={7}>
          <div className="videoCont">
              <Video autoPlay loop muted
                  controls={[]}
                  onCanPlayThrough={() => {
                  }}
                  style={{width: "100%"}}>
                  <source src={video} type="video/mp4" />
                  
                  {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
              </Video>
          </div>
          <p className="galleryImgText">Bold Projects</p>
        </Grid>

        <Grid item xs={12} sm={5}>
          <img src={img4} className="gallery2Img"/>
          <p className="galleryImgText">Bold Voyage x Annette Tillander</p>
        </Grid>
        <Grid item xs={12} sm={1}>
        </Grid>
        <Grid item xs={12} sm={6} className="gallery3">
          <img src={img6} className="gallery3Img"/>
          <p className="galleryImgText">Bold Voyage x Fazer</p>
        </Grid>

        <Grid item xs={12} sm={5}>
          <img src={img8} className="gallery2Img"/>
          <p className="galleryImgText">Bold Voyage x Finnlines</p>
        </Grid>
        <Grid item xs={12} sm={1}>
        </Grid>
        <Grid item xs={12} sm={6} className="gallery3">
          <img src={img7} className="gallery3Img"/>
          <p className="galleryImgText">BOLD 100´19</p>
        </Grid>

        <Grid item xs={12} sm={5}>
          <img src={img5} className="gallery2Img"/>
          <p className="galleryImgText">Eco friendly boating</p>
        </Grid>
        <Grid item xs={12} sm={1}>
        </Grid>
        <Grid item xs={12} sm={6} className="gallery3">
          <img src={img3} className="gallery3Img"/>
          <p className="galleryImgText">Modern farming takes the farming into account</p>
        </Grid>
 
        <Grid item xs={12} sm={12} className="gallery4">
          <img src={img2} className="gallery4Img"/>
          <p className="galleryImgText">Modern farming takes the farming into account</p>
        </Grid>
      </Grid>
    )
  }
}