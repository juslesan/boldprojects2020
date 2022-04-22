import React from 'react';
import Grid from '@mui/material/Grid';
import ImageRight from './portfolioRoll/imageRight'
const classNames = require('classnames');

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          {/* <div className="splitscreen leftSplit2">
          </div>

          <div className="splitscreen rightSplit">
          </div> */}
        </div>
        <Grid container spacing={3} alignItems="flex-start" justifyContent="center">
          <Grid item xs={12} className="pageHeader">
            <h1 className="portfolioHeader">{this.props.head}</h1>
          </Grid>
          <ImageRight text={this.props.text} imgs={this.props.imgs}/>
        </Grid>
      </div>
    )
  }
}