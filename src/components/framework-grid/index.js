import React from 'react';
import './styles.scss';

class FrameworkGrid extends React.Component {

  render() {
    const {logos} = this.props;
    const images = (
      logos.map( (logo, index) => {
        return <div key={index} className="framework-logo" style={{backgroundImage: `url(${logo.url})`}}></div>
      })
    );
    return (
      <div className="framework-grid-container"> {images} </div>
    );
  }
}

export default FrameworkGrid;