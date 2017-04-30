import React from 'react';
import './styles.scss';

class HeroHeading extends React.Component {
  render() {
    const {heading, meta} = this.props;
    const classNames = this.props.className ? `${this.props.className} hero-heading` : 'hero-heading';
    return (
      <div className={classNames}>
        <h1 className="heading">{heading}</h1>
        <p className="meta">{meta}</p>
        {this.props.children}
      </div>
    );
  }
}

export default HeroHeading;