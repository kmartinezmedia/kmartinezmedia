import React from 'react';
import { Helmet } from "react-helmet";
import './styles.scss';

import {
  BackgroundImage,
  Button,
  Column,
  Container,
  Heading,
  Paragraph,
  Row,
  Section,
  PromoCard
} from 'cmx-components';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {

    return (
      <Section>
        <Heading>{'home page'}</Heading>
      </Section>
    );
  }
};
