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
        <Grid container spacing={6} alignItems="center" justify="center">
          <Grid item xs={12} className="pageHeader">
            <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", height: "30vw"}}>Project launch in January</h1>
          </Grid>
        </Grid>
      :
        <div></div>
    )
  }
}