import { useEffect, useState } from "react";
import Experties from "../components/sections/portfolio/Experties";
import OurProcess from "../components/sections/portfolio/OurProcess";
import Services from "../components/sections/portfolio/Services";
import TabBar from "../components/sections/portfolio/TabBar";
import GetStartedSection from "../components/shared/GetStartedSection";
import PageHeader from "../components/shared/PageHeader";
import { usePortfolio } from "../hook/usePortfolio"; // ✅ Make sure this is correct
import { fetchCategories } from "../api/portfolio.api";
import Testimonials from "../components/sections/homePage/Testimonials";

function Portfolio() {
  const [categories, setCategories] = useState([]);
  const [catError, setCatError] = useState(null);
  const [catLoading, setCatLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // console.log("selected ", selectedCategory);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  } = usePortfolio({ limit: 6, category: selectedCategory });

  const allServices = data?.pages.flatMap((page) => page.entries) || [];



  useEffect(() => {

    const getCategories = async () => {
      try {
        setCatLoading(true);
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setCatError(err.message || "Failed to fetch categories");
      } finally {
        setCatLoading(false);
      }
    };

    getCategories();
  }, []);


  return (
    <div className="relative overflow-x-hidden">
      <PageHeader
        bgColorClass="bg-gradient-to-r from-red-500 to-yellow-500 "
        heading="Our Service &"
        subheading="Portfolio"
        description="Comprehensive construction and interior solutions tailored to meet your specific needs and exceed expectations"
      />

      <TabBar categories={categories}
        onSelectCategory={(category) => setSelectedCategory(category)}

      />
      <Services
        services={allServices}
        isLoading={isLoading}
        isError={isError}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />

      <Experties />
      <OurProcess />
      <Testimonials />
      <GetStartedSection
        heading="Ready to Start"
        subheading="Your Project?"
        description="Let's discuss your construction or interior project and bring your vision to life"
        buttonOne={{
          show: true,
          text: "Get Free Construction",
          link: "tel:+911234567890",
          icon: true,
        }}
        buttonTwo={{
          show: true,
          text: " Learn About Us",
          link: "#projects",
        }}
      />
    </div>
  );
}

export default Portfolio;
