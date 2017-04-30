import React from 'react';
import './styles.scss';
import axios from 'axios';
import _ from 'lodash';
import gold7 from 'img/gold_iphone7plus.png';
import ipad from 'img/blackipad.png';
import silver6 from 'img/silver_iphone6.png';
import macbook from 'img/gold_macbook.png';
import tv from 'img/tv.png';
import Browser from 'components/browser';
import Carousel from 'components/carousel';


class Device extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      bgImage: null
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.API_URL}/backgrounds`).then((resp)=> {
      const bgImage = _.shuffle(resp.data)[0];
      const image = bgImage.fields.image[0].url;
      this.setState({bgImage: image});
    })
  }

  render() {

    const {type, work, image} = this.props;
    const {bgImage} = this.state;

    let productImage;

    if (image) {
      productImage = image;
    } else if (work) {
      if (work.fields.subdomain == "cmx") {
        productImage = work.fields.images[0].url; 
      } else {
        productImage = work.fields.cover[0].url; 
      }
    } else {
      productImage = bgImage;
    }

    let inner;
    if (this.props.iframe) {
      inner = this.props.children;
    } else if (!this.props.carousel) {
      if (type == "laptop") {
        inner = (
          <div className="screen" style={{backgroundImage: `url(${bgImage})`}}>
            <Browser work={work} />
          </div>
        );
      } else {
        inner = <div className="screen" style={{backgroundImage: `url(${productImage})`}}></div>
      }
    } else {
      inner = <Carousel slides={work.fields.images} carouselHeight="100%"/>
    }

    let deviceImage;
    
    if (type == "mobile") {
      deviceImage = gold7;
    } else if (type == "tablet") {
      deviceImage = ipad;
    } else if (type == "laptop") {
      deviceImage = macbook;
    } else if (type == "video") {
      deviceImage = tv;
    }

    let styles;
    if (this.props.styles) {
      styles = this.props.styles;
    }

    let containerStyles;
    if (this.props.full) {
      containerStyles = {width: "100%"};
    }

    return (
      <div className="device-container" style={containerStyles}>
        <div className={`device ${type}`} style={styles}>
          <img src={deviceImage} alt=""/>
          {inner}
        </div>
      </div>
    )
  }
}

export default Device;