import React from 'react';
import Grid from '@material-ui/core/Grid';
// import content from '../content/club'
import map from '../img/club/map.png'

export default class Club extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Grid container spacing={5} alignItems="flex-start" justify="center">
        <Grid item xs={12} className="pageHeader">
          <h1>Bold Running Club</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
            <p className="">
              With the Bold Running Club we offer running experience four times a week. On Monday, Wednesday, Thursday and Saturday at 18.00 we welcome you to join us for a run. Running is more fun together with friends and we desperately need friends times like these.
            </p>
            <p>
            Beginners and experienced runners of all ages are welcome and it's obviously free of charge. Also, you don't have to participate four times a week, join us when you feel like it and as often as you like. 
            </p>
            <p>
            We like to vary the distances we run and you can see in the table below what distance we are running on what day. Running pace according to the runners. 
            </p>
            <p>
            First run: Monday, May 11th at 18.00.
            </p>
            <p>
            Monday: 5 km <br/>
            Wednesday: 10 km <br/>
            Thursday: 7 km <br/>
            Saturday: 15 km
            </p>
            <p>
            No registration needed and if you have any questions, feel free to ask them via Instagram direct message or message 0405316455 (Eddie Myrskog)
            </p>
        </Grid>
  
        <Grid item xs={12} sm={6}>
            <p className="">
              We meet and finish at Cargo coffee on Gräsvikskajen 8, Mondays, Wednesdays, Thursdays and Saturdays. On weekdays we start at 18.00 and on Saturday at 10.00. We ask you to arrive 10 minutes before start. Hope to see you there! 
            </p>
            <img src={map} className="map">
            </img>
        </Grid>
      </Grid>
    )
  }
}