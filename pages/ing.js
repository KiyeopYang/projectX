import React from 'react'
import { Container } from 'next/app';
import Head from '../components/head';
import Ing from '../components/Ing';

class Route extends React.Component {
  static getInitialProps({ query: { selected, ing }}) {
    return ({ selected, ing });
  }
  render() {
    const { selected, ing } = this.props;
    return (
      <Container>
        <Head title="Ing"/>
        <Ing selected={selected} ing={ing}/>
      </Container>
    );
  }
}

export default Route;
