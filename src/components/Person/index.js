import React from 'react';

import Hero from '../Hero';
import Banner from '../Banner';

import imgAvatar from '../../images/avataaars (1).svg';

const Person = () => (
  <Hero>
    <Banner title="START BOOTSTRAP" subtitle="Graphic Artist - Web Designer - Illustrator" img={imgAvatar} />
  </Hero>
);
export default Person;
