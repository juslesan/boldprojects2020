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
    const infoText = "Bold Projects är en ideell förening grundad i Helsingfors 2018. Med våra årliga modiga prestationer vill vi uppmärksamma och samla in pengar för aktuella samhälleliga problem. Våra projekt är miljövänliga, kreativa och djärva."
    return (
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} className="pageHeader">
          <h1>Info</h1>
        </Grid>
        <Grid>
          <p className="infoText">{infoText}</p>
        </Grid>
      </Grid>
    )
  }
}