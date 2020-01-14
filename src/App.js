import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Frontpage from './pages/frontpage.js'
import Bold100 from './pages/bold100'
import Bold100Test from './pages/bold100test'
import BoldVoyage from './pages/boldVoyage'
import News from './pages/news'
import Contact from './pages/contact'
import Info from './pages/info'
import Gallery from './pages/gallery'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ThreeBars from './components/threeBars.js';

export default function App() {
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
                    <BoldVoyage/>}
                />
                <Route path="/bold100" render={() =>
                    <Bold100/>}
                />
                <Route path="/bold100test" render={() =>
                    <Bold100Test/>}
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