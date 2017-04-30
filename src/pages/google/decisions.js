import React from 'react';
import './styles.scss';
import HeroSection from 'components/hero-section';
import SplitSection from 'components/split-section';
import Device from 'components/device';
import ProjectInfo from 'components/project-info';
import Video from 'components/video';
import {research, planningData} from './data.js';
import axios from 'axios';

class Decisions extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {appExamples: []}
  }

  componentDidMount = () => {
    axios.get('airtable/google').then((resp)=> {
      console.log(resp.data)
      this.setState({appExamples: resp.data.records})
    })
  }

  render() {

    const {appExamples} = this.state;

    const hero = (
      <HeroSection hugeHeading="google">
        <SplitSection title="Photo gallery prototype" meta="I’d like to take you through the thought process of  building the photo gallery transition from grid to detail view.">
          <Device iframe type="mobile" styles={{float: "right"}}><iframe id="framer" src={"http://share.framerjs.com/amvw7i8dagk8/"} frameBorder="0"></iframe></Device>
        </SplitSection>
      </HeroSection>
    );

    const directions = (
      <SplitSection
        title="Excercise">
        <p>
          {"You're designing a mobile photo gallery interface. A designer on the team delivers mockups for a grid view and detailed photo view and asks you to help define the transition between the two states. If you have additional time, you can consider secondary actions, such as items in the detail view toolbar."}
        </p>
        <ul>
          <li><p>{"How might you build a smooth transition from the grid view to the detail view?"}</p></li>
          <li><p>{"How could you use gestures to enhance the interactivity? e.g. should users swipe to move between images?"}</p></li>
        </ul>
      </SplitSection>
    );

    const researchData = (
      research.map( (item, i) => {
        return (
          <div className="research-row" key={i}>
            <div className="app">{item.app}</div>
            <div className="caption">{item.caption}</div>
          </div>
        )
      })
    );

    const researchIntro = (
      <SplitSection title="Research">
      <p>{"Before tackling this challenge, I gathered inventory on  how some of my most frequently used applications approached this type of transition."}</p>
      {researchData}
      </SplitSection>
    );

    const exampleItems = (
      appExamples.map((item, index) => {
        const {grid, caption} = item.fields;
          return (
            <div key={index} className="item">
              {caption}
            </div>
          )
        })
    )

    const examples = (
      <section>
        <div className="resarch-grid">
        </div>
      </section>
    );

    const challenges = (
      <SplitSection
        title="Challenges">
        <p>{"After this research and some feedback from friends and family about these transitions, I decided to use the scaling technique. The challenge would not be in scaling the image symmetrically, but with transitioning the remaining items behind the grid and the new items to the lightbox view. In almost every example, I noticed a small flash with this approach, split second where the white background shines through before the detail lightbox effect transitions fully.  For this to transition to work as intended I would need to ensure the transition felt natural, purposeful, and cohesive. Also, if I wanted to enhance the interactivity by allowing the user to swipe between the images this would add even more complexity on how I would structure this."}</p>
      
      </SplitSection>
    );

    const brainstorming = (
      <SplitSection
        title="Brainstorming">
        <p>{"When brainstorming I wrote down a few ideas and some pros and cons for each proposed solution."}</p>
        <div className="research-row">
          <div className="app">{"Idea 1:"}</div>
            <div className="caption">
              <p>{"Have a grid of thumbnails. On tap, animate active thumbnail to center of screen and siblings before and after so user could swipe between."}</p>
              <div style={{marginBottom: "10px"}}>
                <span className="green">{"Pros:"}</span><span> {"No duplication"}</span>
              </div>
              <div>
                <span className="red">{"Cons:"}</span><span> {"Keeping things in order and timing would be crucial. If wanted to implement swipe down to close the detail view then the thumbnails would not be in correct position on grid view yet."}</span>
              </div>
            </div>
          </div>
          <div className="research-row">
            <div className="app">{"Idea 2:"}</div>
            <div className="caption">
              <p>{"Have grid of thumbnails. On tap, animate active thumbnail to center of screen and clone items from array that come before and after active thumbnail. Position those two cloned images before and after active thumbnail so can swipe."}</p>
              <div style={{marginBottom: "10px"}}>
                <span className="green">{"Pros:"}</span><span> {"Detail to grid view transition issues would be minimal since thumbnails stay put."}</span>
              </div>
              <div>
                <span className="red">{"Cons:"}</span><span> {"Cons: When swiping quickly could get jerky if user swipes quickly since only loading one before and after."}</span>
              </div>
            </div>
          </div>
      </SplitSection>
    );

    const planningImagesGrid = (
      planningData.map((image, index) => {
        return (
          <div className="planning-image" key={index}>
            <img src={image.image} alt=""/>
            <p>{image.caption}</p>
          </div>
        )
      })
    );

    const planning = (
      <SplitSection title="Planning">
        <p>{"To help me understand how I would need to structure all of the pieces I started to sketch out some ideas. The sketches below show how I laid out the solution I ended up building. This particular solution satisfied all of my requirements and was structured in way that I could implement additional features later without breaking."}</p>
        <div className="image-grid"> {planningImagesGrid} </div>
      </SplitSection>
    );


    const approach = (
       <SplitSection
        title="Approach">
          <p>
          {"Before I get into the technical details it would be helpful to understand the framework I choose to use and why this influenced my decision to approach problem the way I did."}
          </p>
          <p>{"For the development, I opted to use Framer.js initially because I wanted to have a quick turnaround with great performance. For mobile, in particular, this is where Framer shines. So what is Framer? Framer’s creator, Koen Bok, was working as a designer at Facebook and observed that colleagues who used prototypes were more successful at presenting their work. He started building something in JavaScript to make prototyping quicker and easier, and also included a tool to import designs directly from Photoshop. It was all open source, freely downloadable on GitHub, and it still is."}</p>
          <p>{"So Framer’s magic is just the good old front-end web package at work: HTML, CSS, and JavaScript. A Framer project is actually just a static website. And then the idea sprouted to make Framer Studio: a way of using Framer.js without having to switch between editor, web browser, and Framer Generator (the tool that imports your design). Framer Studio also uses CoffeeScript, a friendlier version of JavaScript."}</p>
          <p>{"However, I choose to use a custom Framer local dev environment instead of Framer Studio because I wanted to work within my editor of choice, Sublime, and so I could easily share my code without relying on purchase or download of Framer Studio. This environment was a simple setup web developers should be familiar with. I used node and npm for the packages, gulp to compile the coffeescript to javascript, and browserify for the live reload."}</p>
          <p>{"If you’ve ever used a visual design tool, you’ll already be familiar with the concept of a Layer. Without content, it’s simply a rectangle. But it can contain an image, a video, audio, text, and much more. In Framer layers have many types of properties. Ones that define its position, appearance, and even interactivity. Almost every layer property can be animated. Multiple properties can be animated at once. You can then continue to define the curve, time, delay and many more custom animation options."}</p>
          <p>{"Also, Framer comes with common components. Think of a component as a bundle of layers, with pre-defined interactions. Like the PageComponent, which allows you to add swipeable layers without having to create all the elements from scratch. They’re completely customizable, but work out of the box. This was the biggest selling point for me so I could quickly iterate and focus on the transition and interaction logic. From here l could go on explaining how I structured my code, but If you can take a look at my code I have added some comments to help guide you along in there and give you get a better idea of how I accomplished my solution."}</p>
          <p>{"If there is anything you would like me to expand upon or if there are any questions, feel free to get in touch at kmartinezmedia@gmail.com. Thank you for your time and consideration."}</p>
      </SplitSection>
    );

    return (
      <div className="decisions-content">
        {hero}
        <div className="content">
          <ProjectInfo name="Photo gallery prototype" link={"https://goo.gl/8ZgI10"} />
          <SplitSection title="Welcome">
            <div className="download">
              <p>{"At the top of this page I have included an interactive version of my prototype to play around with as you read along. Tap on the thumbnails, swipe between pages, double tap to zoom or swipe down to return to grid. You can do all of this on your desktop computer or you can view the prototype full screen on any device using the url below."}</p>
              <div>
                <span>View prototype here:</span><a href="https://goo.gl/8ZgI10">{"https://goo.gl/8ZgI10"}</a>
                <div className="login" style={{marginTop: "30px", marginBottom: "30px"}}>
                  <div><span>Username:</span> <span>google</span></div>
                  <div><span>Password:</span> <span>martinez</span></div>
                </div>
              </div>
              <div>
                <span>Download prototype code here:</span><a href="public/kmartinez_prototype_code.zip" download> Download the code </a>
              </div>
              <p>  {"As we all know, more and more of us find ourselves both taking and viewing more photos than ever before. There is a real need to be able to browse a mass amount of photos at once, view select ones in greater detail, and finally oscillate seamlessly between these two actions. So, without further ado, I am excited to share with you how I delivered on my promise of creating a harmonious photo browsing experience."}</p>
            </div>
          </SplitSection>
          {directions}
          {researchIntro}
          {examples}
          {challenges}
          {brainstorming}
          {planning}
          {approach}
        </div>
      </div>
    );
  }
}

export default Decisions;