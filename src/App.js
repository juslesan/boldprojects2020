import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Frontpage from './pages/frontpage.js'
import Portfolio from './pages/portfolio'
import News from './pages/news'
import Contact from './pages/contact'
import Info from './pages/info'
import Gallery from './pages/gallery'
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
import bold100 from './img/bold100/rsz_boldmaalikuva.jpg'
import bold100Content from './content/bold100'
import voyageContent from './content/voyage'
import bold100TestContent from './content/bold100Test'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ThreeBars from './components/threeBars.js';

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        lang: "eng"
      }
    }
    handleLang = (e) => {
        this.setState({lang: e.target.id})
    }
    render () {
        return (
            <React.Fragment>
            <CssBaseline />
            <ThreeBars language={this.state.lang} langHandler={this.handleLang}/>
            <Container maxWidth="md" className="content">
                <Router>
                    <Route  exact path="/" render={() => 
                        <Frontpage language={this.state.lang} rollAmount={8}/> }
                    />
                    <Route path="/boldvoyage" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={6} head="Bold Voyage" imgs={[voyage1, voyage2, voyage3, voyage3, voyage3, voyage4, voyage5, voyage5, voyage6, voyage6]} text={voyageContent[this.state.lang]} rollTime={15000}/>}
                    />
                    <Route path="/bold100" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={3} head="Bold 100" imgs={[bold100,bold100,bold100,bold100,bold100]} text={bold100Content[this.state.lang]} rollTime={15000}/>}
                    />
                    <Route path="/bold100test" render={() =>
                        <Portfolio language={this.state.lang} rollAmount={5} head="Bold 100 TEST" imgs={[bold100test1,bold100test2,bold100test3,bold100test4,bold100test5]} text={bold100TestContent[this.state.lang]} rollTime={15000}/>}
                    />
                    <Route path="/news" render={() =>
                        <News language={this.state.lang}/>}
                    />
                    <Route path="/info" render={() =>
                        <Info language={this.state.lang}/>}
                    />
                    <Route path="/gallery" render={() =>
                        <Gallery/>}
                    />
                    <Route path="/contact" render={() =>
                        <Contact/>}
                    />
                    {/* <Route path="/newspaper/1" render={() =>
                        <Issue1/>}
                    />
                    <Route path="/newspaper/2" render={() =>
                        <Issue2/>}
                    />
                    <Route path="/newspaper/3" render={() =>
                        <Issue3/>}
                    />
                    <Route path="/newspaper/4" render={() =>
                        <Issue4/>}
                    /> */}
                </Router>
            </Container>
            </React.Fragment>
    )}   
}