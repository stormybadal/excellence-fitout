import { useParams } from "@tanstack/react-router";
import Header from "../components/sections/PortfolioDetails/Header";
import Info from "../components/sections/PortfolioDetails/Info";
import Feature from "../components/sections/PortfolioDetails/Feature";
import Gallery from "../components/sections/PortfolioDetails/Gallery";
import BackNavigation from "../components/shared/BackNavigation";
import GetStartedSection from "../components/shared/GetStartedSection";

import { useEffect } from "react";
import { usePortfolioById } from "../hook/usePortfolio";
export default function PortfolioDetail() {
  const { slug } = useParams({ from: "/portfolio/$slug" });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading, isError } = usePortfolioById(slug);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>data not found!</p>;



  return (
    <div >
      <BackNavigation label="Back to Portfolio" href="/portfolio" />
      <Header
        heading={data?.heading + " & " + data?.subheading}
        tagline={data?.tagline}
        image={data?.images?.[data.images.length - 1]} // Last image
      />

      <Info
        subheading={data.subheading}
        description={data.description}
        image={data.images?.[data.images.length - 1]}
      />

      <Feature features={data.features} />

      <Gallery image={data.images} />
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

    </div>
  );
}
