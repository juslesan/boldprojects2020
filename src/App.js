import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Frontpage from './pages/frontpage.js'
import Portfolio from './pages/portfolio'
import News from './pages/news'
import Contact from './pages/contact'
import Info from './pages/info'
import Construction from './pages/construction'
import Project2022 from './pages/project2022'
import bold100Content from './content/bold100'
import voyageContent from './content/voyage'
import bold100TestContent from './content/bold100Test'
import offroadContent from './content/offroad'
import project2022Content from './content/project2022'

import ppContent from './content/paastapaahan'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ThreeBars from './components/threeBars.js';
import ls from 'local-storage'

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        lang: null
      }
    }

    componentDidMount() {
        this.setState({
          lang: ls.get('lang') || "eng"
        })
      }

    handleLang = (e) => {
        this.setState({lang: e.target.id})
        ls.set('lang', e.target.id);

    }
    render () {
        const voyageImages = [
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/voyage/small/000828370021.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/voyage/small/000828390014.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/voyage/small/000828360002.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/voyage/small/000828390010.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/voyage/small/000828370013.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/voyage/small/000828370027.jpeg"
        ]
        const offRoadImages = [
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/1.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/2.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/3.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/4.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/5.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/6.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/7.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/8.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/offroad/9.jpg"
        ]
        const pioneersImages = [
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/bold100test/images-2022-04-23T21_15_48/DSC06410.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/bold100test/images-2022-04-23T21_15_48/DSC06425.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/bold100test/images-2022-04-23T21_15_48/DSC06486.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/bold100test/images-2022-04-23T21_15_48/DSC06498.jpeg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/bold100test/images-2022-04-23T21_15_48/DSC06507.jpeg",
        ]
        const paastaImages = [
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/1.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/2.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/3.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/4.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/5.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/6.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/7.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/8.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/9.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/10.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/11.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/12.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/13.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/14.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/15.jpg",
            "https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/paastapaahan/16.jpg"
        ]
        return (
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} className="content">
                <ThreeBars language={this.state.lang} langHandler={this.handleLang}/>
                <Router>
                    <Route  exact path="/" render={() => 
                        <Frontpage language={this.state.lang} rollAmount={7}/> }
                    />
                    <Route path="/boldvoyage" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={6} head="Bold Voyage" imgs={voyageImages} text={voyageContent[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/bold100" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={1} head="Bold 100" imgs={["https://boldprojects-storage.s3.eu-north-1.amazonaws.com/img/bold100/rsz_boldmaalikuva.jpg"]} text={bold100Content[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/bold100pioneers" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={5} head="Bold 100 Pioneers" imgs={pioneersImages} text={bold100TestContent[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/offroad" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={5} head="Bold Offroad" imgs={offRoadImages} text={offroadContent[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/paastapaahan" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={5} head="Päästä Päähän" imgs={paastaImages} text={ppContent[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/news" render={() =>
                        <News language={this.state.lang}/>}
                    />
                    <Route path="/info" render={() =>
                        <Info language={this.state.lang}/>}
                    />
                    <Route path="/contact" render={() =>
                        <Contact language={this.state.lang}/>}
                    />
                    <Route path="/project2022" render={() =>
                        <Project2022 language={this.state.lang} text={project2022Content[this.state.lang]}/>}
                    />
                     <Route path="/construction" render={() =>
                        <Construction/>}
                    />
                </Router>
            </Container>
            </React.Fragment>
    )}   
}