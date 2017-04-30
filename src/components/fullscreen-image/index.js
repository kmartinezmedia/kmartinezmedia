import React from 'react'
import './styles.scss';

class FullscreenImage extends React.Component {
  closeExpanded = () => {
    const {startX, startY, width, height, image, clickedImage} = this.props.params;

    const expandedContainer = document.getElementById("expanded-container");
    TweenLite.to(expandedContainer, 0.3, 
      {
        backgroundColor: "transparent"
      }
    );
    const imageCopy = document.getElementById("image-copy");
    TweenLite.to(imageCopy, 0.3,
      {
        x: startX,
        y: startY,
        scale: 1,
        className: '-=active',
        onComplete: function() {
          TweenLite.set(document.querySelector("body"), {overflow: "auto"});
          TweenLite.set(clickedImage, {opacity: 1});
          TweenLite.to(imageCopy, 0, {opacity: 0});
          TweenLite.to(expandedContainer, 0, {zIndex: "-1", height: 0});
        }
      }
    );
  }
  render() {
    return (
      <div className="expanded-container" id="expanded-container" onClick={this.closeExpanded}>
        <div className="expanded-image" id="image-copy" onClick={this.closeExpanded}></div>
      </div>
    );
  }
}

export default FullscreenImage;