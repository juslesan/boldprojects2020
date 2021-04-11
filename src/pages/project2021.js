import React from 'react';
import Grid from '@material-ui/core/Grid';
import Background from '../img/project2021/background.png'
import Donate from '../img/project2021/Donate_button.png'
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
          <Grid item xs={12} sm={12}>
            <h1>Päästä Päähän</h1>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className="project2021Texts">
              <p className="project2021text">{this.props.text[0]}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <a href="" className="donateLink">
              <img src={Donate} className="donateLinkImg"/>
            </a>
          </Grid>
        </Grid>
      :
        <div></div>
    )
  }
}