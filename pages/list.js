import React from 'react'
import { Container } from 'next/app';
import Link from 'next/link'
import Head from '../components/head';
import IngList from '../components/IngList';

class Route extends React.Component {
  static getInitialProps({ query: { selected }}) {
    return ({ selected });
  }
  render() {
    const { selected } = this.props;
    return (
      <Container>
        <Head title="title!"/>
        <IngList selected={selected}/>
      </Container>
    );
  }
}

export default Route;
