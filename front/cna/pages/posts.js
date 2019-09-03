import React from 'react'

import Head from 'next/head'
import Nav from '../components/nav'

export default function Post() {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Nav title="Posts" />
      <div>
        Posts
      </div>
    </div>
  );
}
