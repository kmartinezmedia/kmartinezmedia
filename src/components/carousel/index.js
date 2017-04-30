import React from 'react'
import './styles.scss';

class Carousel extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	activeSlide: 0,
	  	slideLength: null
	  };
	}
	
	componentDidMount = () => {
    const timer = setInterval(this.timer, 5000);
		 this.setState({timerId: timer, slideLength: this.props.slides.length});
  }

  componentWillUnmount = () => {
  	clearInterval(this.state.timerId);
  }

  timer = () => {
  	const {activeSlide, slideLength} = this.state;
  	if (activeSlide < slideLength - 1) {
  		this.setState({ activeSlide: activeSlide + 1 });
		} else {
			this.setState({ activeSlide: 0 });
		}
	}

  render() {
  	const {classNames, slides, width, styles, carouselHeight} = this.props;
  	const {activeSlide} = this.state;
  	const activeStyles = {
      left: `-${activeSlide * 100}%`
    }
    const carouselSlides = (
  	 	slides.map((slide, index) => {
    		return (
    			<div key={index} className={`${activeSlide == index ? 'active slide' : 'slide'}`} style={{backgroundImage: `url(${slide.url})`, height: carouselHeight}}>
          </div>
    			)
    	})

  	)
    const classes = `carousel-container`;
    return (
      <div className={classes} style={styles}>
        <div className="carousel" style={activeStyles} >
          {carouselSlides}
        </div>
      </div>
    );
  }
}

export default Carousel;