import { Head } from 'next/document';
import React, { FC } from 'react';
import * as Header from './Header.styles';

const StyledHeader: FC = () => {
  return (
    <Header.Base>
      <Header.NavHeader>
        <Header.Container>
          <Header.Logo>
            <Header.StyledLogo src="logo.png" alt="Kogan logo" />
          </Header.Logo>
          <Header.StyledHeaderType>
            Coding Challenge
          </Header.StyledHeaderType>
        </Header.Container>
      </Header.NavHeader>
    </Header.Base>
  );
};
export default StyledHeader;
