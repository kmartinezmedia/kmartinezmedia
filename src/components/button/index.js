import React from 'react';
import './styles.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={`button`} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

export default Button;