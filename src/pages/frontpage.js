import React from 'react';
import Grid from '@material-ui/core/Grid';
import boldgif from '../img/bold_gradient_mesh_text_2s_lowres.gif'
import projectLink from '../img/project2021/PP_button.png'
export default class Frontpage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="frontPage">

        <Grid container spacing={10} alignItems="center" justify="center" className="frontcont">
          <Grid item xs={12} sm={6}>
              <img className="frontGif" src={boldgif}></img>
              <a href="/project2021" className="mieliLink">
                <img src={projectLink} className="mieliLinkImg"/>
              </a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="frontFont">Bold Projects is a nonprofit association founded in Helsinki in 2018. With our annual daring endeavors we want to help charities raise awareness and funds. Our projects are eco-friendly, creative and bold.</h1>
          </Grid>
        </Grid>
      </div>
    )
  }
}