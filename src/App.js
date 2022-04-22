import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Frontpage from './pages/frontpage.js'
import Portfolio from './pages/portfolio'
import News from './pages/news'
import Contact from './pages/contact'
import Info from './pages/info'
import Club from './pages/club'
import Construction from './pages/construction'
import Project2021 from './pages/project2021'
import Project2022 from './pages/project2022'
import bold100test1 from './img/bold100test/DSC06410.jpg'
import bold100test2 from './img/bold100test/DSC06425.jpg'
import bold100test3 from './img/bold100test/DSC06486.jpg'
import bold100test4 from './img/bold100test/DSC06498.jpg'
import bold100test5 from './img/bold100test/DSC06507.jpg'
import voyage1 from './img/voyage/000828370021.jpg'
import voyage2 from './img/voyage/000828390014.jpg'
import voyage3 from './img/voyage/000828360002.jpg'
import voyage4 from './img/voyage/000828390010.jpg'
import voyage5 from './img/voyage/000828370013.jpg'
import voyage6 from './img/voyage/000828370027.jpg'
import offroad1 from './img/offroad/1.jpg'
import offroad2 from './img/offroad/2.jpg'
import offroad3 from './img/offroad/3.jpg'
import offroad4 from './img/offroad/4.jpg'
import offroad5 from './img/offroad/5.jpg'
import offroad6 from './img/offroad/6.jpg'
import offroad7 from './img/offroad/7.jpg'
import offroad8 from './img/offroad/8.jpg'
import offroad9 from './img/offroad/9.jpg'
import pp1 from './img/paastapaahan/1.jpg'
import pp2 from './img/paastapaahan/2.jpg'
import pp3 from './img/paastapaahan/3.jpg'
import pp4 from './img/paastapaahan/4.jpg'
import pp5 from './img/paastapaahan/5.jpg'
import pp6 from './img/paastapaahan/6.jpg'
import pp7 from './img/paastapaahan/7.jpg'
import pp8 from './img/paastapaahan/8.jpg'
import pp9 from './img/paastapaahan/9.jpg'
import pp10 from './img/paastapaahan/10.jpg'
import pp11 from './img/paastapaahan/11.jpg'
import pp12 from './img/paastapaahan/12.jpg'
import pp13 from './img/paastapaahan/13.jpg'
import pp14 from './img/paastapaahan/14.jpg'
import pp15 from './img/paastapaahan/15.jpg'
import pp16 from './img/paastapaahan/16.jpg'
import bold100 from './img/bold100/rsz_boldmaalikuva.jpg'
import bold100Content from './content/bold100'
import voyageContent from './content/voyage'
import bold100TestContent from './content/bold100Test'
import offroadContent from './content/offroad'
import project2020Content from './content/project2020'
import project2021Content from './content/project2021'
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
        console.log(project2022Content[this.state.lang])
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
                        <Portfolio language={this.state.lang} rollAmount={6} head="Bold Voyage" imgs={[voyage1, voyage2, voyage3, voyage4, voyage5, voyage6]} text={voyageContent[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/bold100" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={1} head="Bold 100" imgs={[bold100]} text={bold100Content[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/bold100pioneers" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={5} head="Bold 100 Pioneers" imgs={[bold100test1,bold100test2,bold100test3,bold100test4,bold100test5]} text={bold100TestContent[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/offroad" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={5} head="Bold Offroad" imgs={[offroad1, offroad2, offroad3, offroad4, offroad5, offroad6, offroad7, offroad8, offroad9]} text={offroadContent[this.state.lang]} rollTime={6000}/>}
                    />
                    <Route path="/paastapaahan" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={5} head="Päästä Päähän" imgs={[pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15, pp16]} text={ppContent[this.state.lang]} rollTime={6000}/>}
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
                    <Route path="/project2021" render={() =>
                        <Project2021 language={this.state.lang} text={project2021Content[this.state.lang]}/>}
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