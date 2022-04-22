import React from 'react'
import Grid from '@mui/material/Grid';

export default function ContactFrame(props) {

  return (
    <Grid item xs={12} sm={3} className="contactFrame">
      <img src={props.img} className="contactImg"/>
      <p>{props.title}</p>
      <p className="contactName">{props.name}</p>
      <p className="contactPhone">{props.phone}</p>
    </Grid>
  )
  
}