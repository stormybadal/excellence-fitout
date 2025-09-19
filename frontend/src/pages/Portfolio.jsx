import { useEffect } from "react";
import Experties from "../components/sections/portfolio/Experties";
import OurProcess from "../components/sections/portfolio/OurProcess";
import Services from "../components/sections/portfolio/Services";
import TabBar from "../components/sections/portfolio/TabBar";
import GetStartedSection from "../components/shared/GetStartedSection";
import PageHeader from "../components/shared/PageHeader";

function Portfolio() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return <>
  <PageHeader
  bgColorClass="bg-gradient-to-r from-red-500 to-yellow-500"
  heading="Our Service &"
  subheading="Portfolio"
  description="Comprehensive construction and interior solutions tailored to meet your specific needs and exceed expectations"  
/>
  <TabBar/>
  <Services/>
  <Experties/>
  <OurProcess/>
  
<GetStartedSection
  heading="Ready to Start"
  subheading="Your Project?"
  description="Let's discuss your construction or interior project and bring your vision to life"
  buttonOne={{
    show: true,
    text: "Get Free Construction",
    link: "tel:+911234567890",
    icon: true
  }}
  buttonTwo={{
    show: true,
    text: " Learn About Us",
    link: "#projects"
  }}
/>


  </>

  
}

export default Portfolio;
