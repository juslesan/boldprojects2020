import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function headOnTopBoxWide(props) {
  if (props.img) {
    return (
      <Grid item xs={12} sm={12} className="headOnTopBoxWide">
        <img alt="only" src={props.img} className="headOnTopImage">
        </img>
      </Grid>
    )
  }
  return(<p>Something went wrong</p>)
}