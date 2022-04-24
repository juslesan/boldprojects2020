import React from 'react'
import Grid from '@mui/material/Grid';

export default function headOnTopBoxNarrow(props) {
  if (props.img) {
    return (
      <Grid item xs={12} sm={12} className="headOnTopBoxNarrow">
        <img alt="only" src={props.img} className="headOnTopImage">
        </img>
      </Grid>
    )
  }
  return(<p>Something went wrong</p>)
}