import ContactFormSection from "../components/sections/contactPage/ContactFormSection";
import ContactHero from "../components/sections/contactPage/ContactHero";
import Faq from "../components/sections/contactPage/Faq";
import GetStarted from "../components/sections/contactPage/GetStarted";
import LocationSection from "../components/sections/contactPage/LocationSection";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <LocationSection />
      <Faq />
      <GetStarted />
    </>
  );
}

export default Contact;
