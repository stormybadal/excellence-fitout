import React from 'react';
import Heading from '../../shared/Heading.Jsx';

const certifications = [
  {
    name: "ISO 9001",
    description: "Quality Management",
    colorClass: "text-orange-500",
  },
  {
    name: "ISO 14001",
    description: "Environmental Management",
    colorClass: "text-red-500",
  },
  {
    name: "OHSAS 18001",
    description: "Health & Safety",
    colorClass: "text-blue-500",
  },
  {
    name: "DM Approved",
    description: "Dubai Municipality",
    colorClass: "text-rose-500",
  },
];

const Certifications = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">

<Heading  title="Certifications &" highlight="Accreditations" description="Recognized for our commitment to quality and safety"   addBreakLine={true}/> 

      <div className="p-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-orange-50 rounded-xl shadow-md p-6 text-center">
            <h3 className={`text-3xl font-bold ${cert.colorClass}`}>
              {cert.name}
            </h3>
            <p className="text-gray-700 mt-2">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
