import React from 'react';
import './styles.scss';

class InnerStage extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = `inner-stage animated krmFadeDown ${className ? className : ''}`;
    return (
      <div className={classNames}> {this.props.children} </div>
    );
  }
}

export default InnerStage;