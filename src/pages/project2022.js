import React from 'react';
import Grid from '@mui/material/Grid';
import unicef from '../img/project2022/unicef.png'
import flames from '../img/wide-flames.gif'
import donate from '../img/project2022/donate.png'
import Logo1 from '../img/project2022/amer.png'
import Logo2 from '../img/project2022/Fazer.png'
import Logo3 from '../img/project2022/canyon.png'
import Logo4 from '../img/project2022/veho.png'
export default class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props.text)
    return (
      this.props.text ?
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          
          <Grid item xs={12} className="pageHeader">
            <div className='heightLimitDiv'>
              <img className="divBackgroundImage" src={flames}/>
              <div className="overImageHead">
                <h1 className="project2022header">THREE PEAKS</h1>
                <p className="project2022paragraph">{this.props.text[0]}</p>
              </div>
            </div>
          </Grid>
          <Grid>
            <div className="heightDiv">
              <h1 className="project2022header">UNICEF</h1>
              <div className="overImage">
                  <p className="project2022paragraph">{this.props.text[1]}</p>
                  <p className="project2022paragraph">{this.props.text[2]}</p>
              </div>
              <img className="verticalBackgroundImage" style={{opacity: "60%"}} src={unicef}/>
            </div>
          </Grid>
          <Grid>
            <div style={{textAlign: "center", paddingTop: "5%"}}>
              <a className="project2022Link" href="https://oma.unicef.fi/en_US/team/bold-projects-three-peaks" target="_blank">
                <img className="project2022Link" src={donate}></img>
              </a>
            </div>
            <p className="project2022paragraph">{this.props.text[3]}</p>
            <p className="project2022paragraph">{this.props.text[4]}</p>
            <p className="project2022paragraph">PROJECT 2022 SPONSORS</p>
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