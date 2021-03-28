import React from 'react';
import Grid from '@material-ui/core/Grid';
import content from '../content/project2021'
import Finland from '../img/project2021/Finland.png'
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
            <h1 className="portfolioHeader">Päästä Päähän</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="project2021Texts">
              <p className="project2021text">{this.props.text[0]}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={Finland} className="trailImg"/>
          </Grid>
        </Grid>
      :
        <div></div>
    )
  }
}