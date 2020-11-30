import React from 'react';
import Grid from '@material-ui/core/Grid';
import boldgif from '../img/image00002.gif'

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="frontPage">
        <div>
          <div className="splitscreen leftSplit">
          </div>

          <div className="splitscreen rightSplit">
          </div>
        </div>

        <Grid container spacing={10} alignItems="center" justify="center" className="frontcont">
          <Grid item xs={12} sm={6}>
              <img className="frontGif" src={boldgif}></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="frontFont">Kaikilla on oikeus hyvään elämään.</h1>
          </Grid>
        </Grid>
      </div>
    )
  }
}