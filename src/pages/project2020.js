import React from 'react';
import Grid from '@material-ui/core/Grid';
import content from '../content/project2020'
import trail from '../img/project2020/trail.png'
import mieli from '../img/project2020/mieli.png'
export default class Project2020 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    
    return (
      this.props.text ?
        <Grid container spacing={6} alignItems="top" justify="center">
          <Grid item xs={12} className="pageHeader">
            <h1>Bold Offroad</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="project2020Texts">
              <p className="project2020textFirst">Bold Offroad</p>
              <p className="project2020text" style={{marginTop: "0"}}>{this.props.text[0]}</p>
              <p className="project2020text">{this.props.text[1]}</p>
              <p className="project2020text">{this.props.text[2]}</p>

              <a href="https://potti.mieli.fi/oma-mielipotti/16-2675" className="mieliLink">
                <img src={mieli} className="mieliLinkImg"/>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={trail} className="trailImg"/>
          </Grid>
        </Grid>
      :
        <div></div>
    )
  }
}