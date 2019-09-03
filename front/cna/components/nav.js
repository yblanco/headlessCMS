import React from 'react'
import Link from 'next/link'

import getInfo from '../service/info';

const Nav = ({ title, logoData }) => {
  return (
    <div style={{ textAlign: "center"}}>
      <h1> <img src={logoData} alt="logo" /> {title} <img src="" alt="logo" /></h1>
      <hr/>
      <nav>
        <button><Link href='/'><a>Home</a></Link></button>
        <button><Link href='/posts'><a>Posts</a></Link></button>
        <button><Link href='/photos'><a>Photos</a></Link></button>
      </nav>
      <hr/>
    </div>
  );
}

Nav.getInitialProps = async () => {
  const res = await getInfo();
  const { data } = res;
  const { api } = data;
  const { project_logo:logoData } = api;
  return { logoData };
}

export default Nav
