import React, { Component } from 'react';
import { ProjectCard } from './ProjectCard';
import simpleChatbotImage from '../assets/images/simple_chatbot.jpg';
import portfolioImage from '../assets/images/portfolio.jpg'; // ✅ your image import
import jsonchatbotImage from '../assets/images/json_chatbot.jpg';
import zenityImage from '../assets/images/zenity.jpg';

export const Projects = () => {
  const projects = [  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing projects and skills (this website).',
    image: portfolioImage,
    tags: ['React', 'Tailwind CSS', 'vite'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/kulanigayathree/portfolio'
  },{
    title: 'Soren',
    description: 'A smart little CHATBOT powered by JSON, turning simple data into friendly conversations.',
    image: jsonchatbotImage,
    tags: ['Python','HTML','CSS'],
    liveLink: 'http://127.0.0.1:5000/',
    githubLink: 'https://github.com/kulanigayathree/json_chatbot-python'
  }, {
    title: 'Simple Chatbot',
    description: 'A smart little chatbot that chats, helps, and keeps it simple.',
    image: simpleChatbotImage,
    tags: ['Python', 'JavaScript' , 'HTML','CSS'],
    liveLink: 'http://127.0.0.1:5000/',
    githubLink: 'https://github.com/kulanigayathree/Simple-chatbot-python-1'
  },{
    title: 'Zenity',
    description: 'StressRelief Mobile App Design',
    image: zenityImage,
    tags: ['figma'],
    figmaLink: 'https://www.figma.com/design/G7nkttyGtzkhLJjOkuva9l/ZENITY?node-id=0-1',
    githubLink: 'https://github.com/kulanigayathree/Figma-StressRelief/blob/main/ZENITY.fig'
  }];
 
 return <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f7a8c]">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with
            attention to detail and focus on user experience.
          </p>
          <div className="w-20 h-1 bg-[#022b3a] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
      </div>
    </section>;
};