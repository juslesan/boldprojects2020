import React from 'react'
import Grid from '@mui/material/Grid'

export default function ImageRight(props) {

  if (props.text && props.img) {
    const gridList = []
    gridList.push(
      <Grid key="txt" item xs={12} sm={6} className="sideBox">
        <p className="italics textSideBoxLeft">
          {props.text}
        </p>
      </Grid>
    )
    gridList.push(
      <Grid key="img" item xs={12} sm={6} className="sideBox">
        <img alt="right" src={props.img} className="sideBoxImg">
        </img>
      </Grid>
    )
    return (gridList)
  }
  return(<p>Something went wrong</p>)
}