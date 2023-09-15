import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';



import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
  <Div1>
    <Link href="/">
      <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
        {/*<DiCssdeck size="3rem" />*/}
        <img src="/images/logo.png" alt="Logo" style={{ width: "3rem", height: "3rem", marginRight: "10px", marginTop: "5px" }} />
         <Span>Portfolio</Span>
      </div>
    </Link>
  </Div1>

  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>

  <Div3>
    <SocialIcons href="https://github.com/Barnabasbanny">
      <AiFillGithub size="3rem" />
    </SocialIcons>

    <SocialIcons href="https://www.linkedin.com/in/shaibu-anibe/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>

    <SocialIcons href="https://www.instagram.com/barnabasbany/">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
  </Div3>
</Container>
);

export default Header;
