import React from 'react';
import Grid from '@mui/material/Grid';
import donate from '../img/project2022/donate.png'
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
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          
          <Grid item xs={12} className="pageHeader">
            <div className='heightLimitDiv'>
              <img className="divBackgroundImage" src="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/wide-flames.gif"/>
              <div className="overImageHead">
                <h1 className="project2022header" style={{fontFamily: "Recoleta-Bold"}}>THREE PEAKS</h1>
                <p className="project2022paragraph">{this.props.text[0]}</p>
              </div>
            </div>
          </Grid>
          <Grid>
              <h1 className="project2022header">UNICEF</h1>
              <div className="unicefBackground">
                <div className="unicefBackgroundText">
                  <p className="project2022paragraph">{this.props.text[1]}</p>
                  <p className="project2022paragraph">{this.props.text[2]}</p>
                </div>
              </div>
          </Grid>
          <Grid>
            <div style={{textAlign: "center", paddingTop: "4%"}}>
              <a className="project2022Link" href="https://oma.unicef.fi/en_US/team/bold-projects-three-peaks" target="_blank">
                <img className="project2022Link" src={donate}></img>
              </a>
            </div>
            <p className="project2022paragraph">{this.props.text[3]}</p>
            <p className="project2022paragraph">PROJECT 2022 SPONSORS</p>
          </Grid>
          <Grid item xs={2} sm={2}>
            <img className="projectLogo" src="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/project2022/amer.png"/>
          </Grid>
          <Grid item xs={2} sm={2}>
            <img className="projectLogo" src="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/project2022/Fazer.png"/>
          </Grid>
          <Grid item xs={2} sm={2}>
            <img className="projectLogo" src="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/project2022/canyon.png"/>
          </Grid>
          <Grid item xs={2} sm={2}>
            <img className="projectLogo" src="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/project2022/veho.png"/>
          </Grid>
          <Grid>
            <div style={{height: "1vw", width: "100vw"}}></div>
          </Grid>
        </Grid>
        :
        <div></div>
    )
  }
}