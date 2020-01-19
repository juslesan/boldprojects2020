import React from 'react';
import Grid from '@material-ui/core/Grid';
import img1 from '../img/voyage/000828370021.jpg'

export default class Bold100 extends React.Component {
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
          <h1>Bold 100</h1>
        </Grid>
        <Grid item xs={12} sm={6} className="sideBox2">
          <p className="textSideBoxLeft2">
          Our first project was a 100 km long ultra marathon called BOLD100. In the summer of 2017 our members Linus and Eddie ran from Tammisaari to Helsinki to raise funds for breast cancer research. They ran for 15 hours and in collaboration with Pink Ribbon we raised 12170 euros for the cancer fond.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} className="sideBox2">
          <img src={img1} alt="bold100" className="sideBoxImg"/>
        </Grid>
      </Grid>
    )
  }
}