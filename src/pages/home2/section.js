import React from 'react'
import FrameworkGrid from 'components/framework-grid';
import newYou1 from 'img/newLeftPhone.png';
import newYou2 from 'img/newRightPhone.png';
import Device from 'components/device';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import _ from 'lodash';


class HomeSection extends React.Component {

	componentDidMount = () => {
	}

  render() {

    let link;

    if (!this.props.work.fields.customPage) {
      link = <Link className="button-link" to={`work/${this.props.work.id}`}>learn more</Link>
    } else {
      link = <Link className="button-link" to={`work/${this.props.work.fields.customPageUrl}`}>learn more</Link>
    }

    let deviceImage;

    if (this.props.work.fields.subdomain == "newyou") {
      deviceImage = (
        <div className="image">
          <img className="split left" src={newYou1} alt=""/>
          <img className="split right" src={newYou2} alt=""/>
        </div>
      );
    } else {
    	if (this.props.work.fields.noDevice == true) {
    		deviceImage = (
	        <div className="image">
	        	<div className="device-container">
      			  <img className="device laptop" src={this.props.work.fields.cover[0].url} alt=""/>
	        	</div>
	        </div>
	      );
    	} else {
    		deviceImage = (
	        <div className="image">
	          <Device type={this.props.work.fields.type} work={this.props.work} carousel={this.props.work.fields.carouselActive} />
	        </div>
	      );
    	}
    }
    return (
      <section className="alternate" id={this.props.work.fields.subdomain}>
        <div className="text">
          <h1>{this.props.work.fields.name}</h1>
          <p>{this.props.work.fields.about}</p>
          <FrameworkGrid logos={this.props.work.fields.frameworkLogos}/>
          {link}
        </div>
        {deviceImage}
      </section>
		);
  }
}

export default HomeSection;