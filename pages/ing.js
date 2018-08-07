import React from 'react'
import { Container } from 'next/app';
import Link from 'next/link'
import Head from '../components/head';
import Ing from '../components/Ing';
import { resolve } from 'path';

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
