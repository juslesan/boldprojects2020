import React from 'react'
import Grid from '@mui/material/Grid';

export default function TextOnly(props) {
  if (props.text) {
    return (
      <Grid item xs={12}>
        <p className="textBox italics">
          {props.text}
        </p>
      </Grid>
    )
  }
  return(<p>Something went wrong</p>)
}