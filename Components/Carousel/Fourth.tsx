import { Container, Row, Col } from 'react-grid-system';
import { StyledH4 } from 'Styles/Font.styles';
import { StyledImg } from './Carouself.styles';

function Fourth() {
  return (
    <Container>
      <Row>
        <Col xs={12}><StyledH4 align="center">Before..</StyledH4></Col>
        <Col xs={12}>
          <StyledImg src='/slow-render.png' />
        </Col>
      </Row>
    </Container>
  )
}

export default Fourth
