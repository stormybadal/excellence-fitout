import React from 'react'
import Heading from '../../shared/Heading'
import { FaComments, FaClipboardList, FaHammer, FaHandshake } from 'react-icons/fa'

const steps = [
  {
    icon: FaComments,
    title: "Consultation",
    description: "Initial meeting to understand your requirements and vision",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: FaClipboardList,
    title: "Planning",
    description: "Detailed project planning, design, and timeline development",
    gradient: "from-orange-400 to-red-400",
  },
  {
    icon: FaHammer,
    title: "Execution",
    description: "Professional execution with regular progress updates",
    gradient: "from-red-400 to-blue-400",
  },
  {
    icon: FaHandshake,
    title: "Delivery",
    description: "Final inspection, handover, and ongoing support",
    gradient: "from-yellow-300 to-blue-400",
  },
];

const OurProcess = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <Heading title="Our" highlight="Process" description="How we deliver exceptional results" />


        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center flex flex-col items-center">
                {/* Gradient Icon Box */}
                <div
                  className={`w-16 h-16 rounded-[15px] flex items-center justify-center text-white text-xl mb-4 shadow-md bg-gradient-to-br ${step.gradient} transition-transform duration-300 hover:scale-110`}
                >
                  <IconComponent />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-blue-100 text-sm max-w-[220px]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess