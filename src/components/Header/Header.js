import Link from 'next/link';
import React from 'react';
import { AiFillAlert, AiFillBuild, AiFillCode, AiFillFacebook, AiFillFire, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTrophy } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
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
        <SocialIcons href="https://github.com/mehedi-01">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mehedi-01/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://leetcode.com/mehedi-01/">
          <AiFillCode size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.hackerrank.com/mehedi_01">
          <AiFillTrophy size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.freecodecamp.org/mehedi-01">
          <AiFillFire size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/mehedi.376766">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
