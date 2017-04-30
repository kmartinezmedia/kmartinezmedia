import React from 'react';
import NavBar from 'components/nav-bar';
import HeroHeading from 'components/hero-heading';
import HeroSection from 'components/hero-section';
import SplitSection from 'components/split-section';
import Device from 'components/device';
import ProjectInfo from 'components/project-info';
import aboutHero from 'img/about-hero.jpg';
import me from 'img/me.png';

class About extends React.Component {
  render() {
    const {route} = this.props;
    return (
      <div className="about-page">
      <NavBar />
      <HeroSection hugeHeading="about">
        <HeroHeading heading={"Be bold, brave & brilliant"} meta={"With a background in film and media production, I've always been a visual storyteller driven by a need to understand and influence my audience"}>
        </HeroHeading>
      </HeroSection>
      <div className="content">
      <ProjectInfo firstColLabel="Name" firstColValue="Katherine Martinez" middleLabel="Current city" middleValue="New York City" />
       <section className="split-section">
          <div className="left">
            <img src={me} alt="" className="me"/>
          </div>
          <div className="right">
             <p>{"My name is Katherine Martinez and I'm designer/developer living in New York City. With a background in film and media production, I've always been a visual storyteller driven by a need to understand and influence my audience."}</p>
            <p> {"As a a designer, it’s my job to make sure I have a full understanding of my end users and their context. That’s true for any designer, anywhere – from the industrial designer creating bic pens (can you imagine? who is this person?) to the fashion designer creating a sassy pant suit, to someone creating a mobile app for diabetics. "}</p>
            <p> {"We designers need a good understanding of our users before we start designing, and we need to get continuous feedback throughout the design process to make sure the design direction meets users’ expectations and solves real problems. It’s part of our process; it’s how we make things that people like and want to use."} </p>
            <p> {" My research most often involves interviewing people, observing them in their environment, and creating product prototypes for them to interact with and react to. I am a relentless problem solver with unquenchable curiosity who can't help but analyze and try to improve everything I see."} </p>
            <p> {" I am comfortable aloft in abstract and strategic thought, but I am also very grounded by organization and concrete details. I believe that technology can revolutionize how people learn, communicate and create and I’m passionate about shaping products and services that help people focus on what they do best: be human."} </p>
          </div>
        </section>  
      </div>
    </div>
    );
  }
}

export default About;