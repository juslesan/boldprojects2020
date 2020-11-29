import React from 'react';
import Grid from '@material-ui/core/Grid';
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
            <h1>Bold Projects 2021</h1>
          </Grid>
          <Grid item xs={12} style={{textAlign: "center"}}>
            <h2>{this.props.text}</h2>
          </Grid>
        </Grid>
      :
        <div></div>
    )
  }
}