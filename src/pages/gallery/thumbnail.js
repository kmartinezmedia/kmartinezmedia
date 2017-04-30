import React from 'react';
import "./styles.scss";

class PhotoThumbnail extends React.Component {

  componentWillUpdate(nextProps, nextState) {
    // this.calcThumbnail();
    // console.log(nextProps.thumbnailWidth)
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
  }

  render() {
    const {
      thumbnail,
      activeImage,
      clickedThumbnail,
      margin,
      photoGridWidth,
      columns,
      thumbnailWidth,
      thumbnailHeight,
      activeScale,
      activeYPos
    } = this.props;

    if (thumbnailWidth) {
      const rowIndex = Math.floor(thumbnail.id/columns);
      const columnIndex = thumbnail.id % columns == 0 ? 0 : 1;
      const xPos = margin + (columnIndex * (thumbnailWidth + margin/2));
      const yPos = rowIndex * (thumbnailHeight + margin/2);
      return (
        <div
          className="photo-thumbnail"
          onClick={clickedThumbnail.bind(this, thumbnail)}
          style={{
            width: `${thumbnailWidth}px`,
            height: `${thumbnailHeight}px`,
            backgroundImage: `url('${thumbnail.image}')`,
            zIndex: activeImage == thumbnail.id ? '111' : '1',
            position: 'absolute',
            left: activeImage == thumbnail.id ? 0 : xPos,
            top: activeImage == thumbnail.id ? activeYPos : yPos,
            transform: activeImage == thumbnail.id ? `scale(${activeScale})` : 'scale(1)'
          }}>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default PhotoThumbnail;