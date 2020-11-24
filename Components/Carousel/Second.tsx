import { Container, Row, Col } from 'react-grid-system';
import { StyledH4 } from 'Styles/Font.styles';
import { StyledList, StyledUL, StyledImg } from './Carouself.styles';
function Second() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <StyledH4>Slow renders</StyledH4>
        </Col>
        <Col xs={6}>
          <StyledUL>
            <StyledList>Anything that is perceivable</StyledList>
            <StyledList>Rendering too many components</StyledList>
            <StyledList>A large library, data source or list of items</StyledList>
          </StyledUL>
        </Col>
        <Col xs={6}>
          <StyledImg src='/slow-render.png' />
        </Col>
      </Row>
    </Container>
  )
}

export default Second
