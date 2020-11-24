import { Container, Row, Col } from 'react-grid-system';
import { StyledH2 } from 'Styles/Font.styles';
import Carousel from 'Components/Carousel';

interface Props {}

function LightningTalk(props: Props) {
  const {} = props

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
