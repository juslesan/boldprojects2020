import React from 'react';
import Grid from '@material-ui/core/Grid';
import unicef from '../img/project2022/unicef.png'
export default class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props.text)
    return (
      this.props.text ?
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} className="pageHeader">
            <h1>THREE PEAKS</h1>
          </Grid>
          <Grid>
            
            <p className="infoText">{this.props.text[0]}</p>
          </Grid>
          <Grid>
            <p>UNICEF</p>
            <img src={unicef}/>
          </Grid>
        </Grid>
        :
        <div></div>
    )
  }
}