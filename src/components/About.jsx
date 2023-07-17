import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-20 lg:pt-28 px-8 lg:px-40 w-full h-full text-white"
    >
      <div className="">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 red-border">
            About
          </p>
        </div>

        <p className="text-xl mt-4">
        Hi I am Mohit Saraswat, an 8 years experienced Web developer, Frontend Engineer living in Pune, India. 
        I am a Computer Science Engineer, currently working with awesome folks at Citi from last 1.5 years.
        </p>
        <br />
        <p className="text-xl">
        I am a quick learner with strong work ethics and good problem-solving skills.
        I am a great team player who works closely with the team to plan, design and develop robust solutions in a timely manner.
        </p>
      </div>
    </div>
  );
};

export default About;
