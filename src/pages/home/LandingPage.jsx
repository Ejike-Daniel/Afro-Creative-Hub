import Container from "../../components/Container";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import Statistics from "./Statistics";

const LandingPage = () => {
  return (
    <Container>
      <Hero />
      <GallerySection />
      <Statistics />
    </Container>
  );
};

export default LandingPage;
