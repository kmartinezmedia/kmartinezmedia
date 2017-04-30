import React from 'react'
import './styles.scss';
import NavBar from 'components/nav-bar';
import Device from 'components/device';
import HeroSection from 'components/hero-section';
import SplitSection from 'components/split-section';
import ProjectInfo from 'components/project-info';
import ImageGrid from 'components/image-grid';
import FullscreenImage from 'components/fullscreen-image';
import axios from 'axios';

class WorkDetail extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {work: null};
  }

	componentDidMount = () => {
    const id = this.props.match.params.id;
    axios.get(`${process.env.API_URL}/work/${id}`).then((resp)=> {
      this.setState({work: resp.data});
    })
	}

  goFullScreen = (index) => {
    this.setState({activeImageParams: index});
  }

  render() {
    const {activeImageParams} = this.state;

    if (this.state.work != null) {
      const {about, approach, challenge, company, cover, frameWorkLogos, images, link, name, type, year, carouselActive} = this.state.work.fields;

      let aboutSection;

      if (about) {
        aboutSection = <SplitSection title="About"> <p>{about}</p> </SplitSection>
      }

      let challengeSection;

      if (challenge) {
        challengeSection = <SplitSection title="Challenge"> <p>{challenge}</p> </SplitSection>
      }

      let approachSection;
      if (approach) {
        approachSection = <SplitSection title="Approach"> <p>{approach}</p> </SplitSection>
      }

      return (
        <div className="work-detail-page" id="work-detail">
          <FullscreenImage params={activeImageParams}/>
          <NavBar />
          <HeroSection>
            <Device type={type} work={this.state.work} carousel={carouselActive} />
          </HeroSection>
          <ProjectInfo name={name} link={link} year={year} />
          {aboutSection}
          {challengeSection}
          {approachSection}
          <SplitSection>
            <ImageGrid images={images} goFullScreen={(index) => this.goFullScreen(index)}/>
          </SplitSection>
        </div>
      );
    } else {
      return (<div></div>)
    }
  }
}
export default WorkDetail;