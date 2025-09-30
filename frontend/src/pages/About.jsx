import React, { useEffect } from 'react'
import OurStory from '../components/sections/aboutPage/OurStory'
import MissionVision from '../components/sections/aboutPage/MissionVission'
import Team from '../components/sections/aboutPage/Team'
import Certifications from '../components/sections/aboutPage/Certifications'
import PageHeader from '../components/shared/PageHeader'
import aboutHeroBG from '../assets/aboutPage/aboutHeroBG.jpg'
import GetStartedSection from '../components/shared/GetStartedSection'
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader
        bgImage={aboutHeroBG}
        heading="About"
        subheading="Excellence interior & contracting llc"
        description="Building the future of Dubai with innovative construction solutions and exceptional craftsmanship since 2010"
      />
      <OurStory />
      <MissionVision />
      {/* <Team /> */}
      <Certifications />

      <GetStartedSection
        heading="Ready to Work"
        subheading="With Us?"
        description="Join hundreds of satisfied clients who have trusted us with their construction and interior projects"
        buttonOne={{
          show: false,
          text: "",
          link: "",
          icon: true
        }}
        buttonTwo={{
          show: true,
          text: "Start Your Project Today",
          link: "#projects"
        }}
      />
    </>
  )
}

export default About