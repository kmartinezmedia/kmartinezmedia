import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class MobileNav extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mobileNavOpen: false
    };
  }

  static defaultProps = {
    slideNavPlacement: 'left',
  };

  toggleMobileNav = () => {
    const { mobileNavOpen } = this.state;
    this.setState({mobileNavOpen: !mobileNavOpen});
  };

  render() {
    const { mobileNavOpen } = this.state;

    return (
      <div className="mobile-nav-container">
        <div className="inner">
          <Link to={'/'} className="logo">Katherine Martinez</Link>
          <div className={`mobile-nav-hamburger-ctr ${mobileNavOpen ? 'active' : ''}`} onClick={this.toggleMobileNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={`mobile-slide-nav
            ${this.props.slideNavPlacement}
            ${mobileNavOpen ? 'open' : ''}`}>
          <div>
            <NavLink exact to="/" activeClassName="active" onClick={this.toggleMobileNav}>Work</NavLink>
            <i className="fa fa-angle-right"></i>
          </div>
          <div>
            <NavLink to="/about" activeClassName="active" onClick={this.toggleMobileNav}>About</NavLink>
            <i className="fa fa-angle-right"></i>
          </div>
          <div>
            <NavLink to="/contact" activeClassName="active" onClick={this.toggleMobileNav}>Contact</NavLink>
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNav;