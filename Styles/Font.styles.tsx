import styled from 'styled-components';

type Alignments = 'left' | 'center' | 'right'

export const StyledH2 = styled.h2<{ align?: Alignments }>`
  ${({ align }) => `text-align: ${align ? align : 'left'}`};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
export const StyledH4 = styled.h4<{ align?: Alignments }>`
  ${({ align }) => `text-align: ${align ? align : 'left'}`};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
export const StyledH1 = styled.h1<{ align?: Alignments }>`
  ${({ align }) => `text-align: ${align ? align : 'left'}`};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

