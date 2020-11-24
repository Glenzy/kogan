
import { CarouselProvider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { StyledSlider } from './Carouself.styles';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fith from './Fith';
import Sixth from './Sixth';

function Carousel() {

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={6}
    >
      <StyledSlider>
        <Slide index={0}><First /></Slide>
        <Slide index={1}><Second /></Slide>
        <Slide index={2}><Third /></Slide>
        <Slide index={3}><Fourth /></Slide>
        <Slide index={4}><Fith /></Slide>
        <Slide index={5}><Sixth /></Slide>
      </StyledSlider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}

export default Carousel
