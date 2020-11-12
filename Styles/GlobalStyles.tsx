import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  body, dl, dt, dd,
 ul, ol, li,
 h1, h2, h3, h4, h5, h6,
 pre,
 form, fieldset,
 p, blockquote,
 figure, figcaption,
 table, th, td {
   margin: 0; 
   padding: 0;
 }
 html {
   font-size: 62.5%;
 }
 body {
   font-family: 'Roboto', 'Helvetica Neu', Arial;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.40;
  }

  p, button {
    letter-spacing: 0.05rem;
    font-size: 1.7rem;
    line-height: 2.4rem;
  }
`;
