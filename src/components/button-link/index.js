import React from 'react';
import {Link} from 'react-router';
import './styles.scss';

class ButtonLink extends React.Component {
  render() {
    const {path, children} = this.props;
    return (
      <Link to={path}> {children} </Link>
    );
  }
}

export default ButtonLink;