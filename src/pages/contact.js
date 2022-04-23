import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContactFrame from '../components/contactFrame'
import content from '../content/contact.json'
export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {

    return (
      <Grid container spacing={5} alignItems="top" justify="center" className="contact">
        <Grid item xs={12} sm={12} className="pageHeader">
          <h1>Contact</h1>
        </Grid>
        <Grid item xs={12} sm={6} >
          <p className="contactInfoTop">{content[this.props.language]}</p>
        </Grid>
        <Grid item xs={12} sm={6} >
          <p className="contactInfoTop">Instagram: bold.projects</p>
        </Grid>
        <Grid item xs={12} sm={6} >
          <p className="contactInfoBottom"> info.boldprojects@gmail.com</p>
        </Grid>
        <Grid item xs={12} sm={6} >
          <p className="contactInfoBottom"> Facebook: Bold Projects</p>
        </Grid>
        <ContactFrame img="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/contact/images-2022-04-23T20_54_24/Valtteri.jpeg" title="President" name="Valtteri Ikäheimo" phone="+358 45 650 5715"/>
        <ContactFrame img="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/contact/images-2022-04-23T20_54_24/Eddie.jpeg" title="Head of Communication" name="Eddie Myrskog" phone="+358 40 531 6455"/>
        <ContactFrame img="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/contact/images-2022-04-23T20_54_24/Linus.jpeg" title="Vice President" name="Linus Lehto" phone="+358 40 059 6392"/>
        <ContactFrame img="https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/contact/images-2022-04-23T20_54_24/Bernhard.jpeg" title="Creative" name="Bernhard Forstén" phone="+358 40 085 8697"/>
      </Grid>
    )
  }
}
