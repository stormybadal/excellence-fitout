import React from "react";
import { CheckCircle } from "lucide-react";
import constructionVideo from "../../../assets/aboutPage/video.mp4"; // Import your video file
const Badge = ({ children, className = "" }) => (
  <div
    className={`inline-flex items-center rounded-full px-6 py-2 text-sm font-medium transition-colors ${className}`}
  >
    {children}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-lg border bg-white shadow-sm ${className}`}
  >
    {children}
  </div>
);

const OurStory = () => {
  return (
    <section className="py-16 px-4 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-orange-500 text-white hover:bg-orange-600">
              OUR STORY
            </Badge>

            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Building Dreams{" "}
                <span className="text-orange-500">Since 2010</span>
              </h2>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2010, Dubai Construction Pro began as a vision to transform 
                  the construction landscape in the UAE. What started as a small team of 
                  passionate builders has grown into one of Dubai's most trusted 
                  construction and interior maintenance companies.
                </p>

                <p>
                  Over the years, we have successfully completed more than 500 projects, 
                  ranging from residential villas to commercial high-rises, each reflecting 
                  our commitment to quality, innovation, and client satisfaction.
                </p>

                <p>
                  Today, we continue to push boundaries, embracing sustainable building 
                  practices and cutting-edge technologies to create spaces that not only 
                  meet but exceed our clients' expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
           <video
  src={constructionVideo} // import your mp4 like the image
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
/>


              {/* Licensed Badge */}
              <div className="absolute bottom-6 right-6">
                <Card className="p-4 bg-white/95 backdrop-blur-sm border-none shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Licensed & Certified
                      </div>
                      <div className="text-sm text-gray-600">
                        Dubai Municipality Approved
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-2 grid md:grid-cols-2 gap-8 max-w-2xl">
          <Card className="p-4 bg-orange-50 border-none rounded-2xl">
            <div className="text-center">
              <div className="text-2xl lg:text-2xl font-bold text-orange-500">
                500+
              </div>
              <div className="text-gray-700 font-bold">Projects Completed</div>
            </div>
          </Card>

          <Card className="p-4 bg-orange-50 border-none rounded-2xl">
            <div className="text-center">
              <div className="text-2xl lg:text-2xl font-bold text-blue-600">
                15+
              </div>
              <div className="text-gray-700 font-bold">Years Experience</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
