import React from 'react';
import Grid from '@material-ui/core/Grid';
import flames from '../img/long-flames.gif'
import ukr from '../img/ukr.png'
import logo from '../img/Logo_black.png'

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid container spacing={2} alignItems="center" justify="center" className="frontcont">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} className="frontLeftGrid">
          <div className="frontGifContainer">
            {/* <img className="frontGif" src={flames}></img> */}
            <p className="frontGifText">
              Bold Projects is a nonprofit association founded in Helsinki in 2018. With our annual daring endeavors we want to help charities raise awareness and funds. Our projects are eco-friendly, creative and bold.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <div className="frontRightContainer">
            <img className="frontRightImage" src={ukr}/>
            <div className="frontRightText">
              <img className="frontLogo" src={logo}></img>
              <a href="/project2022" className="frontLink">
                <p className="frontLink" style={{marginTop: "0"}}>Project 2022</p>
              </a>
              <a href="https://oma.unicef.fi/en_US/team/bold-projects-three-peaks" target="_blank" className="frontLink">
                <p className="frontLink">Donate</p>
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    )
  }
}