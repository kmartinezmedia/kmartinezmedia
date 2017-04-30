import React from 'react';
import './styles.scss';
import address from 'img/address.svg';

class Browser extends React.Component {
  render() {
    const {cover} = this.props.work.fields;
    return (
      <div className="browser-container">
        <div className="address-bar"  style={{backgroundImage: `url(${address})`}}></div>
        <div className="screen-insert">
          <img src={cover[0].url} alt=""/>
        </div>
      </div>
    );
  }
}

export default Browser;