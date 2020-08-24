import React from 'react';
import Grid from '@material-ui/core/Grid';
import map from '../img/club/map.png'

export default class Club extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      this.props.text ?
        <Grid container spacing={4} alignItems="flex-start" justify="center">
          <Grid item xs={12} className="pageHeader">
            <h1>Bold Running Club</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
              <p className="">
                {this.props.text[0]}
              </p>
              <p>
                {this.props.text[1]}
              </p>
              <p>
                {this.props.text[2]}
              </p>
              <p className="clubDayFirst">
                {this.props.text[3]}
              </p>
              <p className="clubDay">
                {this.props.text[4]}
              </p>
              <p className="clubDayLast">
                {this.props.text[5]}
              </p>
              <p>
                {this.props.text[6]}
              </p>
              <p>
                {this.props.text[7]}
              </p>
          </Grid>
    
          <Grid item xs={12} sm={6}>
              <p className="">
                {this.props.text[9]}
              </p>
              <img src={map} className="map">
              </img>
          </Grid>
        </Grid>
        :
        <div></div>
    )
  }
}