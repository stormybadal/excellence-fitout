import React from 'react'
const steps = [
  {
    number: "1",
    title: "Consultation",
    description: "Initial meeting to understand your requirements and vision",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    number: "2",
    title: "Planning",
    description: "Detailed project planning, design, and timeline development",
    gradient: "from-orange-400 to-red-400",
  },
  {
    number: "3",
    title: "Execution",
    description: "Professional execution with regular progress updates",
    gradient: "from-red-400 to-blue-400",
  },
  {
    number: "4",
    title: "Delivery",
    description: "Final inspection, handover, and ongoing support",
    gradient: "from-yellow-300 to-blue-400",
  },
];

const OurProcess = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-2">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Process</span>
        </h2>
        <p className="text-lg text-blue-100 mb-12">How we deliver exceptional results</p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              {/* Gradient Number Box */}
              <div
                className={`w-16 h-16 rounded-[15px] flex items-center justify-center font-bold text-white text-lg mb-4 shadow-md bg-gradient-to-br ${step.gradient}`}
              >
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-blue-100 text-sm max-w-[220px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess