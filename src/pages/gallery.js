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
import img9 from '../img/gallery/nätram.jpg'
import Fade from 'react-reveal/Fade';

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
      <Grid container spacing={3} alignItems="flex-start" justify="left">
        <Grid item xs={12} alt="img0" className="pageHeader">
          <h1>Gallery</h1>
        </Grid>
        <Grid item xs={12} sm={12}>
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
        
        <Grid item xs={12} sm={6}>
          <Fade>
            <img src={img1} alt="img1" className="gallery1Img"/>
            <p className="galleryImgText"> Bold Voyage x Notes Magazine</p>
          </Fade>
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <Fade>
            <img src={img4} alt="img2"className="gallery2Img"/>
            <p className="galleryImgText">Bold Voyage x Annette Tillander</p>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6} className="gallery3">
          <Fade>
            <img src={img6} alt="img3" className="gallery3Img"/>
            <p className="galleryImgText">Bold Voyage x Fazer</p>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Fade>
            <img src={img8} alt="img4" className="gallery2Img"/>
            <p className="galleryImgText">Bold Voyage x Finnlines</p>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6} className="gallery3">
          <Fade>
            <img src={img7} alt="img5" className="gallery3Img"/>
            <p className="galleryImgText">BOLD 100´19</p>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6} className="gallery3">
          <Fade>
            <img src={img9} alt="img6" className="gallery2Img"/>
            <p className="galleryImgText">Eco friendly boating</p>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={12} className="gallery4">
          <Fade>
            <img src={img2} alt="img7" className="gallery4Img"/>
            <p className="galleryImgText">Last to appear, first to go</p>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6} className="gallery3">
          <Fade>
            <img src={img3} alt="img8" className="gallery3Img"/>
            <p className="galleryImgText">Modern farming takes the farming into account</p>
          </Fade>
        </Grid>

        <Grid item xs={12} sm={6} className="gallery3">
          <Fade>
            <img src={img5} alt="img9" className="gallery4Img"/>
            <p className="galleryImgText">Lifevest</p>
          </Fade>
        </Grid>
      </Grid>
    )
  }
}