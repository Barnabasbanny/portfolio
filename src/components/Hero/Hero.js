import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There, I Am <br />
        Barnabas Shaibu 
      </SectionTitle>
      <SectionText>
      I'm an experienced frontend software engineer specializing in user-centric, high-performance web applications. With expertise in responsive design and strong collaboration skills, I deliver outstanding digital experiences. My portfolio showcases successful projects, and I'm committed to continuous learning and innovation. Let's collaborate on your next project for exceptional results!

      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1b6NKWFwt4eFmxTGeCigGkd9rDhx5luqR/view?usp=sharing'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;