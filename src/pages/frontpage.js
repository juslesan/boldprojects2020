import React from 'react';
import Grid from '@material-ui/core/Grid';
// import {linkBalls} from '../components/common';
// import roller from './frontpageRoll/roller'
// import content from '../content/about'
import boldgif from '../img/image00001.gif'
import linkButton from '../img/club/club_button.png'
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

      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item xs={12} alt="img0" className="pageHeader">
          <img className="frontGif" src={boldgif}></img>
        </Grid>
        <Grid item xs={12} alt="img0" className="pageHeader">
          <a className="linkButtonLink" href="/club">
            <img className="linkButton" src={linkButton}></img>
          </a>
        </Grid>
      </Grid>
    )
  }
}