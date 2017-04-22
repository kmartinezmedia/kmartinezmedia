import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Home from 'pages/Home';
import './styles/base.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="*" component={Home} />
  </Router>
), document.querySelector('#app'));