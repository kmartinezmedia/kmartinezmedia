import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="page-container not-found-page">
        <h1>
          {'Page Not Found'}
        </h1>
        <div className="links-container">
          {'Go to the '}
          <Link to={'/'}>
            {'home page'}
          </Link>
          {' or '}
          <Link to={'/contact'}>
            {'contact us'}
          </Link>
        </div>

      </div>
    );
  }
}