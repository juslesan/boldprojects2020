import React from 'react';
import Grid from '@mui/material/Grid';
import map from '../img/club/map.png'

export default class Club extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
        <Grid container spacing={4} alignItems="flex-start" justify="center">
          <Grid item xs={12} className="pageHeader">
            <h1 style={{marginTop: "30vh"}}>Page still under construction</h1>
          </Grid>
        </Grid>
    )
  }
}