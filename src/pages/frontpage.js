import React from 'react';
import Grid from '@material-ui/core/Grid';
// import {linkBalls} from '../components/common';
// import roller from './frontpageRoll/roller'
// import content from '../content/about'
import boldgif from '../img/image00001.gif'
import linkButton from '../img/club/club_button.png'
import project2020 from '../img/project2020/project2020.png'

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
      <div>
        <div>
          <div className="splitscreen leftSplit">
          </div>

          <div className="splitscreen rightSplit">
          </div>
        </div>

        <Grid container spacing={10} alignItems="center" justify="center" className="frontcont">
          {/* <Grid item xs={12} sm={12}>
            <div style={{height: "7vh"}}></div>
          </Grid> */}
          <Grid item xs={12} sm={6}>
              <img className="frontGif" src={boldgif}></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="frontFont">Kaikilla on oikeus hyvään elämään.</h1>
          </Grid>
        </Grid>
      </div>
    )
  }
}