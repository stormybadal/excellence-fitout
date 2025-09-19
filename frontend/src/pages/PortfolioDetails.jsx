import { useParams } from "@tanstack/react-router";
import Header from "../components/sections/PortfolioDetails/Header";
import Info from "../components/sections/PortfolioDetails/Info";
import Feature from "../components/sections/PortfolioDetails/Feature";
import Gallery from "../components/sections/PortfolioDetails/Gallery";
import Review from "../components/sections/PortfolioDetails/Review";
import BackNavigation from "../components/shared/BackNavigation";
import GetStartedSection from "../components/shared/GetStartedSection";

import { useEffect } from "react";
export default function PortfolioDetail() {
  const { slug } = useParams({ from: "/portfolio/$slug" });
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
    <BackNavigation label="Back to Portfolio" href="/portfolio"/>
<Header/>
   <Info/>
   <Feature/>
   <Gallery/>
   <Review/>
<GetStartedSection
  heading="Ready to Get"
  subheading="Started?"
  description="Don't wait any longer. Contact us today and let's bring your construction or interior project to life."
  buttonOne={{
    show: true,
    text: "Call Now: +91 1234567890",
    link: "tel:+911234567890",
    icon: true
  }}
  buttonTwo={{
    show: true,
    text: "View Our Work",
    link: "#"
  }}
/>

    </>
  );
}
