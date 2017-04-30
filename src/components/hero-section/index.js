import React from 'react';
import './styles.scss';

class HeroSection extends React.Component {
  render() {
    let image;
    if (this.props.image) {
      image = {backgroundImage: `url(${this.props.image})`};
    }
    let heroText;
    if (this.props.heroText) {
      heroText = (
        <div className="bold">
        <h1>Be bold,</h1>
        <h2>brave & </h2>
        <h2>brilliant.</h2>
        </div>
      )
    }

    if (this.props.aboutText) {
      heroText = (
        <div className="bold black">
        <h1>Get in touch</h1>
        </div>
      )
    }
    return (
      <div id="hero-section" className="hero-section" style={image}>
        <div className="huge-heading">{this.props.hugeHeading}</div>
        <div className="vertically-center">
          <div className="animated krmFadeDown">
            {this.props.children}
            {heroText}
          </div>
        </div>
        <div className="scroll-down">
          <p className="center-align">Scroll</p>
          <p className="center-align">👇</p>
        </div>
      </div>
    );
  }
}

export default HeroSection;