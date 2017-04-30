import React from 'react';
import {myWorks} from './data.js';
import WorkPanels from 'components/work-panels';
import './styles.scss';

class Work extends React.Component {
  render() {
    const {route} = this.props;
    return (
      <div>
        <WorkPanels data={myWorks} />
      </div>
    );
  }
}

export default Work;