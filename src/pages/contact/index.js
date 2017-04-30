import React from 'react';
import axios from 'axios';
import {Utils} from 'cmx-components';
import NavBar from 'components/nav-bar';
import HeroHeading from 'components/hero-heading';
import HeroSection from 'components/hero-section';
import SplitSection from 'components/split-section';
import ProjectInfo from 'components/project-info';
import './styles.scss';

class Contact extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      sent: false
    };
  }

  sendContact = () => {
    const {email, name, message} = this;
    if ( email.value != '' || name.value != '' || message.value != '') {
      const data = {
        to: this.email.value,
        subject: `Portfolio inquiry from ${this.name.value}`,
        text: this.message.value
      };
      const params = Utils.toQueryString(data);
      console.log(params)
      axios.post(`${process.env.API_URL}/contact?${params}`).then((resp)=> {
        console.log(resp);
        if (resp.data == 'sent') {
          this.setState({sent: true})
        }
      })
    }
  }

  render() {
    const {sent} = this.state;
    const {route} = this.props;
    
    let form;
    let success;
    
    if (!sent) {
      form = (
        <form method="get" action="">
          <div className="row">
            <label htmlFor="name">Name</label>
            <input type="text" className="text" id="name" name="name" required ref={(input) => this.name = input}/>
          </div>
          <div className="row">
            <label htmlFor="email">Email</label>
            <input type="text" className="text" id="customer_mail" name="email" type="email" required ref={(input) => this.email = input}/>
          </div>
          <div className="row">
            <label htmlFor="message">Message</label>
            <textarea name="detail" id="detail" name="message" required ref={(input) => this.message = input}></textarea>
          </div>
          <div className="row">
            <div className="button" style={{display: 'table'}} onClick={() => this.sendContact()}>Submit</div>
          </div>
        </form>
      );
    } else {
      success = (
        <p>{'Thank you for reaching out. I will be in touch with you shortly.'}</p>
      );
    }
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
            {form}
            {success}
          </SplitSection>
        </div>
      </div>
    );
  }
}

export default Contact;