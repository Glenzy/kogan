import { Container, Row, Col } from 'react-grid-system';
import Carousel from 'Components/Carousel';

function LightningTalk() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Carousel />
        </Col>
      </Row>
    </Container>
  )
}

export default LightningTalk;
