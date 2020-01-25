import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Frontpage from './pages/frontpage.js'
import Bold100 from './pages/bold100'
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


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ThreeBars from './components/threeBars.js';

export default function App() {
    const bold100TestText = "Many had shown interest for our projects and we wanted to give the opportunity to others to participate. In 2018 we planned a 100 km long route that went around Greater Helsinki. Two inspiring people, both named Emil, decided to take on the challenge. They ran for about 20 hours before reaching the goal." 
    const voyageText = "The association’s second project was named Bold Voyage. We wanted to do something that would make an impact on the alarming state the Baltic Sea was in. We decided that we would row from Stockholm to Helsinki, and in partnership with Baltic Sea Action Group raise funds for a cleaner Baltic Sea. After 500 km rowed we arrived in Helsinki and the funds raised once again exceeded the 12000 euro mark."
    return (
        <React.Fragment>
        <CssBaseline />
        <ThreeBars/>
        <Container maxWidth="md" className="content">
            <Router>
                <Route  exact path="/" render={() => 
                    <Frontpage rollAmount={8}/> }
                />
                <Route path="/boldvoyage" render={() =>
                    <Portfolio rollAmount={6} head="Bold Voyage" imgs={[voyage1, voyage2, voyage3, voyage4, voyage5, voyage6]} text={voyageText}/>}
                />
                <Route path="/bold100" render={() =>
                    <Bold100/>}
                />
                <Route path="/bold100test" render={() =>
                    <Portfolio rollAmount={5} head="Bold 100 TEST" imgs={[bold100test1,bold100test2,bold100test3,bold100test4,bold100test5]} text={bold100TestText}/>}
                />
                <Route path="/news" render={() =>
                    <News/>}
                />
                <Route path="/info" render={() =>
                    <Info/>}
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
  );
}