import React from 'react';
import Heading from '../../shared/Heading.jsx';

const teamMembers = [
  {
    name: "Ahmed Al Rashid",
    title: "CEO & Founder",
    description: "15+ years in construction industry, Civil Engineering degree from AUS",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    titleColor: "text-orange-500"
  },
  {
    name: "Sarah Mitchell",
    title: "Head of Interior Design",
    description: "Award-winning interior designer with international experience",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    titleColor: "text-red-500"
  },
  {
    name: "Mohammed Hassan",
    title: "Project Manager",
    description: "PMP certified with expertise in large-scale construction projects",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    titleColor: "text-blue-500"
  },
  {
    name: "Lisa Chen",
    title: "Quality Assurance Director",
    description: "Quality control specialist ensuring excellence in every project",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    titleColor: "text-rose-500"
  }
];

const Team = () => {
  return (
    <section className="py-16 px-4 bg-[var(--color-background)] text-gray-800">

      <Heading title="Meet Our" highlight="Expert Team" description="The professionals behind our success" addBreakLine={true} />

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className={`font-medium ${member.titleColor}`}>{member.title}</p>
              <p className="text-gray-600 text-medium mt-1">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
