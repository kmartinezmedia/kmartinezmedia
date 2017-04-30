import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// pages declaration
import Home from 'pages/home';
import About from 'pages/about';
import Contact from 'pages/contact';
import Work from 'pages/work';
import WorkDetail from 'pages/work/detail.js';
import GoogleInterview from 'pages/google';

//error pages
import NotFoundPage from 'pages/error/404.js';
import Bug from 'pages/error/bug.js';
import Maintenance from 'pages/error/maintenance.js';
import Traffic from 'pages/error/traffic.js';

//assets
import NavBar from 'components/nav-bar';
import 'styles/base.scss';

class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="stage">
          { this.props.children }
        </div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
    document.querySelector('html').classList.add('ios');
    document.querySelector('body').classList.add('ios');
  }
  render(
    (
      <Router>
        <div className="app-container">
          <div className="stage">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} heading={'Life is short. Do stuff that matters.'} />
              <Route path="/work/:id" component={WorkDetail} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} heading={'Let\'s get in touch.'} />
              <Route path="/google" component={GoogleInterview} />
              <Route path="/bug" component={Bug} />
              <Route path="/maintenance" component={Maintenance} />
              <Route path="/traffic" component={Traffic} />
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    ),
    document.getElementById('app')
  );
});