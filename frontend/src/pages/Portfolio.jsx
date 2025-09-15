import Experties from "../components/sections/portfolio/Experties";
import OurProcess from "../components/sections/portfolio/OurProcess";
import PortfolioHero from "../components/sections/portfolio/PortfolioHero";
import ReadyProject from "../components/sections/portfolio/ReadyProject";
import Services from "../components/sections/portfolio/Services";
import TabBar from "../components/sections/portfolio/TabBar";

function Portfolio() {
  return <>
  <PortfolioHero/>
  <TabBar/>
  <Services/>
  <Experties/>
  <OurProcess/>
  <ReadyProject/>
  </>
}

export default Portfolio;
