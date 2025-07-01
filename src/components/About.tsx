import React from 'react';
import { Code, Lightbulb, Users } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Developer working at desk" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate frontend developer with 5 years of experience
              creating elegant solutions in the digital world. My journey in web
              development started when I built my first HTML page in college,
              and I've been hooked ever since.
            </p>
            <p className="text-gray-600 mb-8">
              I specialize in building responsive, accessible, and performant
              web applications using modern technologies like React, TypeScript,
              and Tailwind CSS. I'm dedicated to writing clean code and creating
              intuitive user experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Development</h4>
                <p className="text-sm text-gray-600">
                  Clean, modern and maintainable code.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Creative</h4>
                <p className="text-sm text-gray-600">
                  Innovative solutions to complex problems.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Collaborative</h4>
                <p className="text-sm text-gray-600">
                  Great team player and communicator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};