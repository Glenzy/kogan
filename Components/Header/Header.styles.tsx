import styled from 'styled-components';

export const HEIGHT = '7.2rem';
export const ITEM_HEIGHT = '5.6rem';

export const Base = styled.header`
  display: block;
  height: ${HEIGHT};
`;

export const NavHeader = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${HEIGHT};
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${ITEM_HEIGHT};
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin-left: 4rem;
`;

export const StyledLogo = styled.img`
  flex-basis: 20rem;
  max-width: 20rem;
`

export const StyledHeaderType = styled.h1`
align-items: center;
font-weight: 100;
justify-content: flex-end;
`