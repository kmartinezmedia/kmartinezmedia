import React from 'react';
import './styles.scss';

class ImageGrid extends React.Component {

  render() {
    const {images} = this.props;

    let imagesForGrid;
    if (this.props.noUrl) {
      imagesForGrid = (
        images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.image} alt=""/>
              </div>
            )
          })
        )
    } else {
      imagesForGrid = (
        images.map((image, index) => {
          return (
            <div className="image" onClick={() => this.props.goFullScreen(index)} key={index}>
              <img src={image.url} alt=""/>
              <div className="fullscreen">
                <i className="icon icon-resize-full"></i>
              </div>
            </div>
          )
        })
      );
    }

    return (
      <div className="image-grid"> {imagesForGrid} </div>
    );
  }
}

export default ImageGrid;