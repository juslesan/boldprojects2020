import React from 'react';
import Grid from '@mui/material/Grid';
import Donate from '../img/project2021/Donate_button.png'
import Logo1 from '../img/project2021/annette-tillander-logo.svg'
import Logo2 from '../img/project2021/Tukikummit-logo.png'
import Logo3 from '../img/project2021/Skatepro_logo_main_2019_black.jpg'
import Logo4 from '../img/project2021/Grabbarna-flytt-logo-1.png'

export default class Project2020 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    
    return (
      this.props.text ?
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={12}>
            <h1>Päästä Päähän</h1>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="project2021Texts">
              <p className="project2021text">{this.props.text[0]}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              <i class="arrow down"></i>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <a href="https://www.lahjoituslomake.fi/tukikummit/bold-projects/paasta-paahan-2021/" className="donateLink">
              <img src={Donate} className="donateLinkImg"/>
            </a>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              <p className="project2021text">{this.props.text[1]}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo1}/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo2}/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo3}/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo4}/>
          </Grid>
        </Grid>
      :
        <div></div>
    )
  }
}