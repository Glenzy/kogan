import { Container, Row, Col } from 'react-grid-system';
import { StyledH4 } from 'Styles/Font.styles';
import { StyledList, StyledUL, StyledImg } from './Carouself.styles';
function Third() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <StyledH4>How to fix?</StyledH4>
        </Col>
        <Col xs={6}>
          <StyledUL>
            <StyledList>useMemo and useCallback</StyledList>
            <StyledList>Co-locating state from global </StyledList>
            <StyledList>Splitting context or any global state to consumers and dispatchers</StyledList>
            <StyledList>Code splitting</StyledList>
          </StyledUL>
        </Col>
        <Col xs={6}>
          <StyledImg src='/optimised-render-memoisation.png' />
        </Col>
      </Row>
    </Container>
  )
}

export default Third
