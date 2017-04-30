import React from 'react'
import './styles.scss';

class SplitSection extends React.Component {
  render() {
    let title;
    if (this.props.title) {
      title = <h1 className="heading">{this.props.title}</h1>
    }
    let meta;
    if (this.props.meta) {
      meta = <p className="meta">{this.props.meta}</p>
    }
    return (
      <section className="split-section">
        <div className="left">
          {title}
          {meta}
        </div>
        <div className="right">
           {this.props.children}
        </div>
      </section>
    );
  }
}

export default SplitSection;