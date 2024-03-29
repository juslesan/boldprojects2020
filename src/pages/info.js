import React from 'react';
import Grid from '@mui/material/Grid';
import content from '../content/about'

export default class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} className="pageHeader">
          <h1>Info</h1>
        </Grid>
        <Grid>
          <p className="infoText">{content[this.props.language]}</p>
        </Grid>
      </Grid>
    )
  }
}