import { Container, Row, Col } from 'react-grid-system';
import { StyledH4 } from 'Styles/Font.styles';
import { StyledImg } from './Carouself.styles';

function Fith() {
  return (
    <Container>
      <Row>
        <Col xs={12}><StyledH4 align="center">... and After</StyledH4></Col>
        <Col xs={12}>
          <StyledImg src='/optimised-render-memoisation.png' />
        </Col>
      </Row>
    </Container>
  )
}

export default Fith
