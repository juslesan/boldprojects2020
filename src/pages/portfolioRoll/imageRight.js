import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function ImageRight(props) {

  if (props.text && props.imgs) {
    const gridList = []
    gridList.push(
      <Grid key="txt" item xs={12} sm={6} className="sideBox2">
        <div className="scrollableText">
          {props.text.map((t)=>
            <p>{t}</p>
          )}
        </div>
      </Grid>
    )
    gridList.push(
      <Grid key="img" item xs={12} sm={6} className="sideBox2">
        <div className="scrollableImgs">
        {props.imgs.map((img) => 
          <img alt="right" src={img} className="sideBoxImg2" onClick={props.popup}>
          </img>
        )}
        </div>
      </Grid>
    )
    return (gridList)
  }
  return(<p>Something went wrong</p>)
}