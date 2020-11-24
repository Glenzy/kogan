
import { FC } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as Header from './Header.styles';

const StyledHeader: FC = () => {
  const router = useRouter()
  return (
    <Header.Base>
      <Header.NavHeader>
        <Header.Container>
          <Header.Logo>
            <Header.StyledLogo src="logo.png" alt="Kogan logo" />
          </Header.Logo>
          <Header.StyledHeaderType>
            {router.asPath === '/lightning-talk' ? ' Lightning Talk - React Performance' : 'Coding Challenge'}
          </Header.StyledHeaderType>
          <Header.LinkWrapper>
            <Link href='/'><Header.StyledLink active={router.asPath === '/'}>Home</Header.StyledLink></Link>
            <Link href='/lightning-talk'><Header.StyledLink active={router.asPath === '/lightning-talk'}>Lightning Talk</Header.StyledLink></Link>
          </Header.LinkWrapper>
        </Header.Container>
      </Header.NavHeader>
    </Header.Base>
  );
};
export default StyledHeader;
