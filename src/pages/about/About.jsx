import Container from "../../components/Container";
import AboutHero from "./AboutHero";
import FAQ from "./FAQ";
import Purpose from "./Purpose";

const About = () => {
  return (
    <Container>
      <AboutHero />
      <Purpose />
      <FAQ />
    </Container>
  );
};

export default About;
