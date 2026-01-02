import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-experience-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A summary of my professional experience and internships
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 rounded-full flex items-center justify-center z-10">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl bg-gray-900 border border-white 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              sm:ml-44 sm:mr-44 ml-8 transform transition duration-300 hover:scale-105`}
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>
              <h4 className="text-sm text-gray-300">
                {exp.company}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {exp.date}
              </p>

              <p className="mt-4 text-gray-400">
                {exp.desc}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
