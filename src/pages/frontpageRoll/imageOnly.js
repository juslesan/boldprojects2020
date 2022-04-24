import React from 'react'
import Grid from '@mui/material/Grid'

export default function ImageOnly(props) {
  if (props.img) {
    return (
      <Grid item xs={12} className="imageBox">
        <img alt="only" src={props.img} className="imageBoxImg">
        </img>
      </Grid>
    )
  }
  return(<p>Something went wrong</p>)
}