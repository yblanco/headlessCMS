import React from 'react'

import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Seleccione</title>
    </Head>
    <Nav title="SELECCIONE" />
    <div className="App-content">
      Seleccione
    </div>
  </div>
)

export default Home
