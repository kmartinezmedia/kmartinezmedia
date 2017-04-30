import React from 'react';
import './styles.scss';

class ProjectInfo extends React.Component {
  render() {
    const {name, link} = this.props;
    let firstCol;
    let middleColumn;

    if (this.props.name) {
      firstCol = (
        <div className="col"><span>Project:</span><b>{name}</b></div>
      )
    } else {
      firstCol = (
        <div className="col">
          <span>{this.props.firstColLabel}:</span><b>{this.props.firstColValue}</b>
        </div>
      )
    }

    if (this.props.year) {
      middleColumn = (
        <div className="col">
          <span>Year:</span><b>{this.props.year}</b>
        </div>
      )
    } else {
      middleColumn = (
        <div className="col">
          <span>{this.props.middleLabel}:</span><b>{this.props.middleValue}</b>
        </div>
      )
    }
    return (
      <section className="project-info">
        {firstCol}
        {middleColumn}
        <div className="col">
          <a href={link} target="_blank"><b>{link}</b></a>
        </div>
      </section>
    );
  }
}

export default ProjectInfo;