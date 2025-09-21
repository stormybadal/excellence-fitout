import ContactFormSection from "../components/sections/contactPage/ContactFormSection";
import Faq from "../components/sections/contactPage/Faq";
import LocationSection from "../components/sections/contactPage/LocationSection";
import contactHeroBG from '../assets/contactUsPage/contactUsHeroBg.jpg'
import PageHeader from "../components/shared/PageHeader";
import GetStartedSection from "../components/shared/GetStartedSection";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader
        bgImage={contactHeroBG}
        heading="Get In"
        subheading="Touch"
        description="
      Ready to start your construction or interior project? Contact us today for a free consultation and quote"
      />
      <ContactFormSection />
      <LocationSection />
      <Faq />

      <GetStartedSection
        heading="Ready to Get"
        subheading="Started?"
        description="Don't wait any longer. Contact us today and let's bring your construction or interior project to life."
        buttonOne={{
          show: true,
          text: "Call Now: +971552146089",
          link: "tel:+971552146089",
          icon: true
        }}
        buttonTwo={{
          show: true,
          text: "View Our Work",
          link: "/projects",
        }}
      />
    </>
  );
}

export default Contact;
