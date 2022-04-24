import React from 'react'
import Grid from '@mui/material/Grid';

export default function ImageLeft(props) {
  if (props.text && props.img) {
    const gridList = []
    gridList.push(
      <Grid key="img" item xs={12} sm={6} className="sideBox">
        <img alt="left" src={props.img} className="sideBoxImg">
        </img>
      </Grid>
    )
    gridList.push(
      <Grid key="txt" item xs={12} sm={6} className="sideBox">
        <p className="italics textSideBoxRight">
          {props.text}
        </p>
      </Grid>
    )
    return (gridList)
  }
  return(<p>Something went wrong</p>)
}