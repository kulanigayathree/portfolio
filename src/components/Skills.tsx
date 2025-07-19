import React from 'react';
export const Skills = () => {
  const frontendSkills = [{
    name: 'React',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'TypeScript',
    level: 80
  }, {
    name: 'HTML/CSS',
    level: 95
  }, {
    name: 'Tailwind CSS',
    level: 60
  }];
  const backendSkills = [{
    name: 'Node.js',
    level: 60
  }, {
    name: 'Express',
    level: 65
  }, {
    name: 'MongoDB',
    level: 75
  },];
  const dataSkills = [
  {
    name: 'R',
    level: 70
  },
  {
    name: 'SQL',
    level: 90
  }
];
  const toolsSkills = [{
    name: 'Git',
    level: 75
  }, {
    name: 'Android Studio',
    level: 50
  }, {
    name: 'Power BI',
    level: 40
  }, {
    name: 'Figma',
    level: 80
  },];
  const SkillBar = ({
    name,
    level
  }: {
    name: string;
    level: number;
  }) => <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-[#1f7a8c] h-2.5 rounded-full" style={{
        width: `${level}%`
      }}></div>
      </div>
    </div>;
  return <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f7a8c]">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here's a breakdown of my technical skills.
          </p>
          <div className="w-20 h-1 bg-[#022b3a] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm 
          transition duration-300 ease-in-out hover:shadow-lg hover:opacity-90 
          transition duration-500 ease-in-out transform hover:rotate-1 hover:scale-105">
            <h3 className="text-xl font-bold mb-6 text-center">Frontend</h3>
            {frontendSkills.map((skill, index) => <SkillBar key={index} name={skill.name} level={skill.level} />)}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm  
          transition duration-300 ease-in-out hover:shadow-lg hover:opacity-90 
          transition duration-500 ease-in-out transform hover:rotate-1 hover:scale-105">
            <h3 className="text-xl font-bold mb-6 text-center">Backend</h3>
            {backendSkills.map((skill, index) => <SkillBar key={index} name={skill.name} level={skill.level} />)}
          </div>
           <div className="bg-gray-50 p-6 rounded-lg shadow-sm 
            transition duration-300 ease-in-out hover:shadow-lg hover:opacity-90 
            transition duration-500 ease-in-out transform hover:rotate-1 hover:scale-105">
            <h3 className="text-xl font-bold mb-6 text-center">Data Skills</h3>
            {dataSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm
          transition duration-300 ease-in-out hover:shadow-lg hover:opacity-90 
          transition duration-500 ease-in-out transform hover:rotate-1 hover:scale-105">
            <h3 className="text-xl font-bold mb-6 text-center">
              Tools & Others
            </h3>
            {toolsSkills.map((skill, index) => <SkillBar key={index} name={skill.name} level={skill.level} />)}
          </div>
        </div>
      </div>
    </section>;
};