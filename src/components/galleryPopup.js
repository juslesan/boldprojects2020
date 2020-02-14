import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class PortfolioLInks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: this.props.current,
    }
  }
  rollLeft = () => {
    if (this.state.current === 0) {
      this.setState({current: this.props.imgs.length -1})
    } else {
      this.setState({current: this.state.current - 1})
    }
  }
  rollRight = () => {
    if (this.state.current === this.props.imgs.length -1) {
      this.setState({current: 0})
    } else {
      this.setState({current: this.state.current + 1})
    }
  }
  render () {
    return (
      <div>
        {this.props.visible ? 
        <div className="galleryPopup">
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid key="txt" item xs={12} sm={3} className="">
              <i className="arrow left" onClick={this.rollLeft}/>
            </Grid>
            <Grid key="txt" item xs={12} sm={6} >
              <img alt="galleryPopup" src={this.props.imgs[this.state.current]} className="galleryPopupImg"/>
            </Grid>
            <Grid key="txt" item xs={12} sm={3} className="">
              <i className="arrow right" onClick={this.rollRight}/>
            </Grid>
            <Grid>
              <p className="closeGallery" onClick={this.props.galleryToggler}>
                Close
              </p>
            </Grid>
          </Grid>

        </div>
        :
        <div></div>
        }
      </div>
    )
  }
}