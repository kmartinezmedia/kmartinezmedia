import React from 'react';
import './styles.scss';
import NavBar from 'components/nav-bar';
import HeroHeading from 'components/hero-heading';
import Decisions from './decisions.js';

class Google extends React.Component {
	
	constructor(props) {
	  super(props);
	  this.state = {correctPassword: true};
	}

	componentDidMount = () => {
		var password;

		var correctPassword="martinez";

		password=prompt('Please enter the password provided to view this page!','');
		
		if (password==correctPassword) {
  		this.setState({correctPassword: true})
		} else {
			this.setState({correctPassword: false})
		}
	}

  render() {
  	const {correctPassword} = this.state;
  	let inner;

  	if (correctPassword == true) {
  		inner = <Decisions/>
  	} else {
  		inner = (
  			<div className="hero-section">
	        <div className="vertically-center">
	          <div className="animated krmFadeDown">
	              <HeroHeading heading="Uh oh!" meta="Looks like you got the password incorrect. Try reloading to enter password again...">
	            </HeroHeading>
	          </div>
	        </div>
      	</div>
  		);
  	}
    return (
      <div className="google-interview">
      	<NavBar />
      	{inner}
      </div>
    );
  }
}

export default Google;