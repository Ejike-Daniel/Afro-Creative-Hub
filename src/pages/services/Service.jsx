import Container from "../../components/Container";
import Analysis from "./Compos/Analysis";
import ContentSection from "./Compos/ContentSection";
import HappyClients from "./Compos/HappyClientsReview";
import Provision from "./Compos/Provision";
import Section from "./Compos/Section";

const Service = () => {
  return (
  
<Container>
  <Provision/>
  <Section/>
  <ContentSection/>
  <Analysis/>
  <HappyClients/>
</Container>

  )
};

export default Service;
