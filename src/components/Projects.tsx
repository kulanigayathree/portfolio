import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import simpleChatbotImage from '../assets/images/simple_chatbot.jpg';
import portfolioImage from '../assets/images/portfolio.jpg';
import jsonchatbotImage from '../assets/images/json_chatbot.jpg';
import zenityImage from '../assets/images/zenity.jpg';
import WeatherPipelineImage from '../assets/images/Weather Pipeline.jpg';
import SentimentAnalyzerImage from '../assets/images/SentimentAnalyzer.jpg';
import { Filter, Code, Palette, Brain, Globe, TrendingUp} from 'lucide-react';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark/light themes, and showcases my projects and skills in an elegant design.',
      image: portfolioImage,
      tags: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      category: 'Web Development',
      liveLink: '#', // Current website
      githubLink: 'https://github.com/kulanigayathree/portfolio',
      status: 'Live',
      featured: true
    },
     {
      title: 'Weather Pipeline (Test API)',
      description: 'A small project demonstrating a basic data pipeline that fetches weather data (or mock data), stores it in a SQLite database, and runs queries for analysis. Perfect for learning how to build an end-to-end data ingestion and storage pipeline using Python.',
      image: WeatherPipelineImage,
      tags: ['Python 3', 'Requests', 'Pandas', 'SQLite3', 'python-dotenv', 'Logging'],
      category: 'Data Science',
      githubLink: 'https://github.com/kulanigayathree/weather-pipeline-demo',
      status: 'Complete'
    },
    {
      title: 'Sentiment Analyzer',
      description: 'It includes creating a small dataset, training a model, testing its accuracy, and making predictions on custom sentences.',
      image: SentimentAnalyzerImage,
      tags: ['Python', 'Pandas', 'Scikit-Learn'],
      category: 'Data Science',
      githubLink: 'https://github.com/kulanigayathree/SentimentAnalyzer',
      status: 'Complete'
    },
    {
      title: 'Soren - JSON Chatbot',
      description: 'An intelligent chatbot powered by JSON data structures. Soren can understand user queries and provide contextual responses by processing structured data, making conversations feel natural and informative.',
      image: jsonchatbotImage,
      tags: ['Python', 'JSON', 'HTML', 'CSS', 'Natural Language Processing'],
      category: 'AI/ML',
      githubLink: 'https://github.com/kulanigayathree/json_chatbot-python',
      status: 'Completed',
      featured: true
    },
    {
      title: 'Simple Interactive Chatbot',
      description: 'A lightweight, interactive chatbot application with a clean web interface. Built using Python Flask backend with JavaScript frontend, offering real-time chat functionality and user-friendly interactions.',
      image: simpleChatbotImage,
      tags: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS'],
      category: 'AI/ML',
      githubLink: 'https://github.com/kulanigayathree/Simple-chatbot-python-1',
      status: 'Completed'
    },
    {
      title: 'Zenity - Stress Relief App Design',
      description: 'A comprehensive mobile app design focused on mental wellness and stress relief. Features intuitive navigation, calming color schemes, and user-centered design principles to promote mental health awareness.',
      image: zenityImage,
      tags: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
      category: 'Design',
      figmaLink: 'https://www.figma.com/design/G7nkttyGtzkhLJjOkuva9l/ZENITY?node-id=0-1',
      githubLink: 'https://github.com/kulanigayathree/Figma-StressRelief/blob/main/ZENITY.fig',
      status: 'Design Complete'
    },
  ];

  const categories = [
    { name: 'All', icon: <Filter size={16} />, count: projects.length },
    { name: 'Web Development', icon: <Globe size={16} />, count: projects.filter(p => p.category === 'Web Development').length },
    { name: 'Data Science', icon: <TrendingUp size={16} />, count: projects.filter(p => p.category === 'Data Science').length },
    { name: 'AI/ML', icon: <Brain size={16} />, count: projects.filter(p => p.category === 'AI/ML').length },
    { name: 'Design', icon: <Palette size={16} />, count: projects.filter(p => p.category === 'Design').length }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f7a8c]">
            My Projects
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
            Explore my journey through code, design, and innovation. Each project represents 
            a step forward in my development as a technology enthusiast and problem solver.
          </p>
          <div className="w-20 h-1 bg-[#022b3a] mx-auto"></div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#1f7a8c] mb-2">{projects.length}</div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#1f7a8c] mb-2">
              {new Set(projects.flatMap(p => p.tags)).size}
            </div>
            <div className="text-gray-600">Technologies Used</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#1f7a8c] mb-2">
              {featuredProjects.length}
            </div>
            <div className="text-gray-600">Featured Projects</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#1f7a8c] mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-600">Categories</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-[#1f7a8c] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.name
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Projects Section */}
        {selectedCategory === 'All' && featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-[#1f7a8c] rounded"></div>
                <h3 className="text-2xl font-bold text-[#022b3a]">Featured Projects</h3>
                <div className="w-8 h-1 bg-[#1f7a8c] rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-2 -right-2 bg-[#1f7a8c] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    Featured
                  </div>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-center text-[#022b3a] mb-8">All Projects</h3>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Code size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No projects found in this category
            </h3>
            <p className="text-gray-500">
              Try selecting a different category or check back later for updates!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#bfdbf7] to-indigo-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#022b3a] mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's connect and create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-[#022b3a] text-white font-semibold rounded-lg hover:bg-[#1a4156] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/kulanigayathree"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-[#1f7a8c] text-[#1f7a8c] font-semibold rounded-lg hover:bg-[#1f7a8c] hover:text-white transition-all duration-300"
              >
                View More on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};