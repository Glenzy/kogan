import { Container, Row, Col } from 'react-grid-system';
import { StyledH2, StyledH4 } from 'Styles/Font.styles';
import {StyledList, StyledUL, StyledImg} from './Carouself.styles';
function First() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
        <StyledH4>What is React performance?</StyledH4>
        </Col>
        <Col xs={6}>
     <StyledUL>
       <StyledList>Perceptable slowness</StyledList>
       <StyledList>Juttery animations</StyledList>
       <StyledList>Unresponsive UI</StyledList>
     </StyledUL>
        </Col>
        <Col xs={6}>
          <StyledImg src='/first.jpeg' />
        </Col>
      </Row>
    </Container>
  )
}

export default First
