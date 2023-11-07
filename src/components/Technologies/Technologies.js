import React from 'react';
import { DiWordpress, DiReact, } from 'react-icons/di';
import { SiAntdesign } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <br></br>
    <SectionText>
      I have worked with a range of technologies in web development, with a major in frontend development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.Js <br />
            Next.Js <br />
            Redux <br />
            Tailwind Css 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>WordPress</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML <br />
            CSS <br />
            JavaScript 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiAntdesign size="3rem" />
        <ListContainer>
          <ListTitle>Graphics Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Illustrator <br />
            Photoshop <br />
            CorelDraw 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
