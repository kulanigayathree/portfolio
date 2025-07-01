import React, { Component } from 'react';
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  const projects = [{
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
    image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Redux', 'Tailwind CSS', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with team collaboration features.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    tags: ['React', 'TypeScript', 'Firebase', 'DnD Kit'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasting application using geolocation and weather API.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking application with workout plans and progress visualization.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['React Native', 'Redux', 'Firebase', 'Health API'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    title: 'Recipe Finder',
    description: 'Recipe search application with filtering by dietary restrictions and ingredients.',
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
    tags: ['React', 'Context API', 'Food API', 'Styled Components'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }, {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills (this website).',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
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