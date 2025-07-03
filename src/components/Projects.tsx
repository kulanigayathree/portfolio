import React, { Component } from 'react';
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  const projects = [  {
    title: 'Simple Chatbot',
    description: 'A smart little chatbot that chats, helps, and keeps it simple.',
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
    tags: ['Python'],
    githubLink: 'https://github.com/kulanigayathree/Simple-chatbot-python-1'
  }, {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills (this website).',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Tailwind CSS', 'vite'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/kulanigayathree/portfolio'
  }];
  return <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with
            attention to detail and focus on user experience.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
      </div>
    </section>;
};