import React from 'react';
import './styles.scss';

class WorkPanels extends React.Component {

  constructor(props) {
    super(props);
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    this.state = {
      windowWidth: windowWidth,
      windowHeight: windowHeight,
      wrapperWidth: 0,
      heroHeight: 0,
      stageHeight: 0,
      maxTimes: 0,
      translate: 0,
      showLeftArrow: false,
      showRightArrow: false,
      timesRight: 0
    };
  }

  updateStates = () => {
    const windowWidth = window.innerWidth;
    const wrapperWidth = document.querySelectorAll('.work-panels-inner')[0].scrollWidth;
    const maxTimes = Math.round(wrapperWidth / windowWidth);
    const stageHeight = document.querySelectorAll('.stage-container')[0].offsetHeight;
    const heroHeight = document.querySelectorAll('.hero-heading')[0].offsetHeight;
    this.setState({
      windowWidth: windowWidth,
      wrapperWidth: wrapperWidth,
      stageHeight: stageHeight,
      heroHeight: heroHeight,
      maxTimes: maxTimes
    })
  }

  componentDidMount = () => {
    this.updateStates();
    window.addEventListener('resize', this.updateStates);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateStates);
  }

  getMouse = (e) => {
    const {translate, windowWidth, timesRight, maxTimes} = this.state;
    const threshHoldRight = windowWidth - (windowWidth/4);
    const threshHoldLeft = windowWidth/4;
    const mousePos = e.clientX;
    const containerWidth = document.querySelectorAll('.work-panels-inner')[0].scrollWidth;
    // if (mousePos > threshHold && translate > -containerWidth - windowWidth) {
    //   const rounded = Math.round(translate + -mousePos/50);
    //   this.setState({translate: rounded})
    // }

    // if (mousePos < windowWidth/2 && translate <= 0) {
    //   const rounded = Math.round(translate + mousePos * 1.4);
    //   this.setState({translate: rounded})
    // }

    if (mousePos > threshHoldRight && timesRight < maxTimes) {
      this.setState({showRightArrow: true});
    } else {
      this.setState({showRightArrow: false});
    }

    if (mousePos < threshHoldLeft && timesRight !=0) {
      this.setState({showLeftArrow: true})
    } else {
     this.setState({showLeftArrow: false}) 
    }

  }

  resetArrows = () => {
    const {showLeftArrow, showRightArrow} = this.state;
    this.setState({showLeftArrow: false, showRightArrow: false});
  }

  showLess = () => {
    const {windowWidth, translate, wrapperWidth, timesRight} = this.state;
    if (timesRight > 0) {
      console.log(document.querySelectorAll('.work-panels-inner')[0].offsetLeft);
      this.setState({timesRight: timesRight - 1, translate: (timesRight - 1) * 100 });
    }
  }

  showMore = () => {
    const {windowWidth, translate, wrapperWidth, timesRight, maxTimes} = this.state;
    console.log(timesRight, maxTimes);
    if (timesRight < maxTimes) {
      this.setState({timesRight: timesRight + 1, translate: (timesRight + 1) * 100 });
    }
  }

  render() {
    const {translate, showLeftArrow, showRightArrow, stageHeight, heroHeight} = this.state;
    const {data} = this.props;

    const panels = (
      data.map((work, index) => {
        const containerHeight = stageHeight - heroHeight - 164;
        const style = {
          backgroundPosition: `${work.position}`,
          backgroundImage: `url("${work.image}")`,
          backgroundSize: `${work.size}`,
          height: `${containerHeight}px`,
          backgroundColor: `${work.bgColor}`
        };
        return (
          <a key={index} href={work.immediateLink} className='panel' style={style} target="_blank"></a>
        )
      })
    );
    const leftClass = showLeftArrow ? 'left-arrow active' : 'left-arrow';

    const rightClass = showRightArrow ? 'right-arrow active' : 'right-arrow';
    return (
      <div className='work-panels-outer' onMouseMove={this.getMouse} onMouseLeave={this.resestArrows}>
        <div className={leftClass} onClick={this.showLess}>go back</div>
        <div className={rightClass} onClick={this.showMore}>see more</div>
        <div className="work-panels-inner" style={{transform: `translateX(-${translate}%)`}}>
          {panels}
        </div>
      </div>
    );
  }
}

export default WorkPanels;