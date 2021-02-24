import React, { FC } from 'react';
import styled from '@emotion/styled';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';

import Navbar from '../components/Navbar';
import { useGetImages } from '../hooks';
import { HeaderProps } from '../interfaces';
import { breakpoints as bp } from '../styles/variables';

const ImgStyled = styled(({ ...rest }: GatsbyImageFluidProps) => (
  <Img {...rest} />
))`
  @media (max-width: ${bp.sm}px) {
    margin-top: 60px;
  }
  @media (min-width: ${bp.lg}px) {
    margin-top: 0;
  }
  margin-top: 64px;
  display: inline-block;
`;

const Header: FC<HeaderProps> = ({ setDrawerWidth }): JSX.Element => {
  const { profileImg } = useGetImages();

  return (
    <section
      id="header"
      className="section scrollspy"
      style={{ display: 'contents' }}
    >
      <Navbar setDrawerWidth={setDrawerWidth} />
      <ImgStyled fluid={profileImg.childImageSharp.fluid} alt="Profile Shot" />
    </section>
  );
};

export default Header;
