import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from 'components/nav-bar';
import HeroSection from 'components/hero-section';
import HeroHeading from 'components/hero-heading';
import axios from 'axios';
import HomeSection from './section.js';
import './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {works: [], carouselImages: []};
  }
  componentDidMount() { 

    axios.get(`${process.env.API_URL}/work`).then((resp)=> {
      this.setState({works: resp.data})
      resp.data.map( (item, index) => {
        const image = {
          name: item.fields.name,
          year: item.fields.year,
          image: item.fields.cover
        };
      })
    })
  }

  scrollToWork = () => {
    zenscroll.to(document.getElementById('content'));
  };


  render() {
    const {works} = this.state;

    const sections = (
      works.map( (work, index) => {
        return <HomeSection key={index} index={index} work={work}/>
      })
    )

    const heroLinks = (
      <div className="heading-links">
        <span><a onClick={this.scrollToWork} style={{color: "#50e3c2"}}>Work</a></span>
        <span style={{color: "rgba(81, 227, 193,0.5)", paddingRight: "40px"}}>¬</span>
        <span><Link to="about" style={{color: "#3fabf5"}}>About</Link></span>
        <span style={{color: "rgba(63, 171, 245, 0.5)", paddingRight: "40px"}}>¬</span>
         <span><Link to="contact" style={{color: "#B359F3"}}>Contact</Link></span>
        <span style={{color: "rgba(179, 89, 243, 0.5)", paddingRight: "40px"}}>¬</span>
      </div>
    );

    return (
      <div className="home-page">
        <NavBar />
        <HeroSection hugeHeading="katherine">
          <HeroHeading heading="Digital designer and developer" meta="I produce elegant solutions with a human-centered design approach, helping people make better products, services and all other kinds of experiences">
            {heroLinks}
          </HeroHeading>
        </HeroSection>
        <div className="content" id="content">
          {sections}
        </div>
      </div>
    );
  }
}

export default Home;