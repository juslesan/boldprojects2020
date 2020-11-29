import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageRight from './portfolioRoll/imageRight'
const classNames = require('classnames');

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryToggle: false,
      currentRoll: 0,
      rollAmount: 0
    }
    this.rollTime = this.props.rollTime
    this.rollInterval = null
  }

  componentDidMount() {
    this.setState({rollAmount: this.props.rollAmount}) 
  }

  changeCurrentRoll = (id, e) => {
    this.setState({currentRoll: id})
  }

  galleryToggler = () => {
    if (this.state.galleryToggle) {
      this.setState({galleryToggle: false})
    } else {
      this.setState({galleryToggle: true})
    }
  }
  
  render() {
    clearInterval(this.rollInterval)
    this.rollInterval = setInterval(() => {
      this.setState(this.state.currentRoll < this.state.rollAmount - 1 ? 
                      {currentRoll: this.state.currentRoll + 1}
                    :
                      {currentRoll: 0}
                    )
    }, this.rollTime)
    let cls = classNames({
      'fadeout': this.state.galleryToggle
    })
    return (
      <div>
        <div>
          <div className="splitscreen leftSplit2">
          </div>

          <div className="splitscreen rightSplit">
          </div>
        </div>
        <Grid container spacing={3} alignItems="flex-start" justify="center" className={cls}>
          <Grid item xs={12} className="pageHeader">
            <h1>{this.props.head}</h1>
          </Grid>
          <ImageRight text={this.props.text} imgs={this.props.imgs}/>

        </Grid>
      </div>
    )
  }
}