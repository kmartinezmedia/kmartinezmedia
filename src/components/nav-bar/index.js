import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './styles.scss'
import MobileNav from './mobile-nav.js';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav animated fadeIn">
        <div className="nav-desktop">
          <Link to="/" className="logo">Katherine Martinez</Link>
          <div className="links">
              <div className="pages">
                <NavLink exact to="/" className="nav-item" activeClassName="active">{'Work'}</NavLink>
                <NavLink to="/about" className="nav-item" activeClassName="active">{'About'}</NavLink>
                <NavLink to="/contact" className="nav-item" activeClassName="active">{'Contact'}</NavLink>
              </div>
              <a className="nav-icon"href="https://github.com/kmartinezmedia" target="_blank">
                  <i className="icon icon-github"></i>
                </a>
               <a className="nav-icon"href="https://www.instagram.com/katmartinez08/" target="_blank">
                  <i className="icon icon-instagram"></i>
                </a>
                <a className="nav-icon"href="https://twitter.com/KMartinezMedia" target="_blank">
                  <i className="icon icon-twitter"></i>
                </a>
                <a className="nav-icon"href="https://www.linkedin.com/in/kmartinezmedia" target="_blank">
                  <i className="icon icon-linkedin-square"></i>
                </a>
            </div>
          </div>
          <MobileNav slideNavPlacement="left"/>
      </div>
    );
  }
}

export default NavBar;