import React from 'react';
import Grid from '@material-ui/core/Grid';
import roller from './bold100testRoll/roller'

export default class Bold100Test extends React.Component {
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
      <Grid container spacing={3} alignItems="flex-start" justify="center">
        <Grid item xs={12} className="pageHeader">
          <h1>Bold 100 TEST</h1>
        </Grid>
        {roller(this.state.currentRoll)}

      </Grid>
    )
  }
}