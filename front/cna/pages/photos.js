import React from 'react'

import Head from 'next/head'
import Nav from '../components/nav'

export default function Photos() {
  return (
    <div>
      <Head>
        <title>Photos</title>
      </Head>
      <Nav title="Photos" />
      <div>
        PHOTOS
      </div>
    </div>
  );
}
