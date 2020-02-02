import React from 'react';
import Grid from '@material-ui/core/Grid';
import {linkBalls} from '../components/common';
import roller from './frontpageRoll/roller'
import content from '../content/about'

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoll: 0,
      rollAmount: 0
    }
    this.rollTime = 6000
    this.rollInterval = null
  }

  componentDidMount() {
    this.setState({rollAmount: this.props.rollAmount}) 
  }

  changeCurrentRoll = (id, e) => {
    this.setState({currentRoll: id})
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
    return (
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} className="pageHeader">
          <h1>Bold Projects</h1>
        </Grid>
        {roller(this.state.currentRoll, content, this.props.language)}
        <Grid container justify="center" alignItems="center" className="frontpageRoll">
          {linkBalls(this.state.rollAmount, this.state.currentRoll, this.changeCurrentRoll)}
        </Grid>
      </Grid>
    )
  }
}