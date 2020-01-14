import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} className="pageHeader">
          <h1>Info</h1>
        </Grid>

      </Grid>
    )
  }
}