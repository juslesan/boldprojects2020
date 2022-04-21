import React from 'react';
import Grid from '@material-ui/core/Grid';
import unicef from '../img/project2022/unicef.png'
import flames from '../img/wide-flames.gif'
import donate from '../img/project2022/donate.png'
import Logo1 from '../img/project2022/amer.png'
import Logo2 from '../img/project2022/Fazer.png'
import Logo3 from '../img/project2022/canyon.png'
import Logo4 from '../img/project2022/veho.png'
export default class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props.text)
    return (
      this.props.text ?
        <Grid container spacing={6} alignItems="center" justify="center">
          
          <Grid item xs={12} className="pageHeader">
          <div className='heightLimitDiv'>
            <img className="divBackgroundImage" src={flames}/>
            <div className="overImage">
              <h1>THREE PEAKS</h1>
              <p className="project2022paragraph">{this.props.text[0]}</p>
            </div>
          </div>
          </Grid>
          <Grid>
          <div className='heightDiv'>
            <p className="project2022paragraph">UNICEF</p>
            <img className="verticalBackgroundImage" style={{opacity: "80%"}} src={unicef}/>
            <div className="overImage">
              <p>
                <p className="project2022paragraph">{this.props.text[1]}</p>
                <p className="project2022paragraph">{this.props.text[2]}</p>
              </p>
            </div>
            
          </div>
          </Grid>
          <Grid>
            <div style={{textAlign: "center", paddingTop: "5%"}}>
              <a className="frontLink" href="https://oma.unicef.fi/en_US/team/bold-projects-three-peaks" target="_blank">
                <img className="frontLink" src={donate}></img>
              </a>
            </div>
            <p className="project2022paragraph">{this.props.text[3]}</p>
            <p className="project2022paragraph">{this.props.text[4]}</p>
            <p className="project2022paragraph">PROJECT 2022 SPONSORS</p>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo1}/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo2}/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo3}/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <img className="projectLogo" src={Logo4}/>
          </Grid>
        </Grid>
        :
        <div></div>
    )
  }
}