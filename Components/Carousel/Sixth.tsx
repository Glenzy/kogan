import { Container, Row, Col } from 'react-grid-system';
import { StyledH4 } from 'Styles/Font.styles';
import { StyledList, StyledUL, StyledImg } from './Carouself.styles';

function Sixth() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <StyledH4>GOT YA!!!</StyledH4>
        </Col>
        <Col xs={6}>
          <StyledUL>
            <StyledList>Memoisation  and object comparisons.</StyledList>
            <StyledList>useMemo/useCallback dependancies</StyledList>
            <StyledList>Pure functions make it easy</StyledList>
            <StyledList>Assumptions</StyledList>
          </StyledUL>
        </Col>
        <Col xs={6}>
          <StyledImg src='/gotya.jpeg' />
        </Col>
      </Row>
    </Container>
  )
}

export default Sixth
