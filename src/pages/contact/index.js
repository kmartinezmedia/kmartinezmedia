import React from 'react';
import NavBar from 'components/nav-bar';
import HeroHeading from 'components/hero-heading';
import HeroSection from 'components/hero-section';
import SplitSection from 'components/split-section';
import Device from 'components/device';
import ProjectInfo from 'components/project-info';
import './styles.scss';
import macbook from 'img/gold_macbook.png';
import contactImage from 'img/contact.jpg';
import address from 'img/address.svg';

class Contact extends React.Component {
  render() {
    const {route} = this.props;
    return (
      <div className="contact-page">
        <NavBar />
        <HeroSection hugeHeading="contact">
          <HeroHeading heading={"Get in touch"} meta={"I'm passionate about design, programming and technology. Have an idea for a project? Want to get in touch? Shoot me a message below"}>
          </HeroHeading>
        </HeroSection>
        <div className="content">
        <ProjectInfo firstColLabel="Email" firstColValue="kmartinezmedia@gmail.com" middleLabel="Phone" middleValue="813-298-8364"/>
         <SplitSection title="Contact">
          <form action="send_contact.php" method="post">
            <div className="row">
              <label htmlFor="name">Name</label>
              <input type="text" className="text" id="name" name="name"/>
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <input type="text" className="text" id="customer_mail" name="customer_mail" type="email" />
            </div>
            <div className="row">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="text" id="subject" name="subject" />
            </div>
            <div className="row">
              <label htmlFor="message">Message</label>
              <textarea name="detail" id="detail"></textarea>
            </div>
            <div className="row">
              <input type="submit" className="button" value="Send Message" />
            </div>
          </form>
        </SplitSection>
        </div>
      </div>
    );
  }
}

export default Contact;