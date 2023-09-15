import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There, I Am <br />
        Shaibu Barnabas 
      </SectionTitle>
      <SectionText>
      I'm an experienced React frontend developer specializing in user-centric, high-performance web applications. With expertise in responsive design and strong collaboration skills, I deliver outstanding digital experiences. My portfolio showcases successful projects, and I'm committed to continuous learning and innovation. Let's collaborate on your next project for exceptional results!

      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/drive/folders/1bsT-z1n_BkVp2Y161Dtd3d4KQ_0yQZ3W?usp=sharing'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;