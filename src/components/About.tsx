import React from 'react';
import { Code, Brain, Users } from 'lucide-react';
import aboutImage from '../assets/images/about_us.jpg'; // ✅ New import

export const About = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img src={aboutImage} alt="About me" className="rounded-lg shadow-lg w-full h-auto object-cover" /> {/* ✅ Changed here */}
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
             
             <p className="text-gray-600 mb-6">
              <strong>Where curiosity meets code and data tells a story.</strong>
            </p>
           
            <p className="text-gray-600 mb-6">
              I'm a passionate tech enthusiast currently pursuing my degree at SLIIT, 
              with a growing interest in the world of data science. 
              My journey began when I created a simple web project at university, 
              which sparked my curiosity in combining coding with real-world problem solving.
            </p>
           
            <p className="text-gray-600 mb-8">
              Since then, I’ve been exploring data-driven tools like 
              Power BI, SQL, and R — discovering how data can be transformed into meaningful insights.
              While I’ve dabbled in frontend development using tools like React and Tailwind CSS,
              my true focus is finding a career path where data meets creativity and impact.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Analytical Thinker</h4>
                <p className="text-sm text-gray-600">
                  I love diving into data to find the “why” behind the numbers.
                </p>
              </div>
             
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Brain className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Creative Developer</h4>
                <p className="text-sm text-gray-600">
                   Merging design with logic through clean, user-friendly code.
                </p>
              </div>
            
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2"> Team Collaborator</h4>
                <p className="text-sm text-gray-600">
                  Strong communication and teamwork are core to how I work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};