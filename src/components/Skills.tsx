import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  Settings, 
  Globe, 
  Server,
  BarChart3,
  Smartphone,
  GitBranch,
  Figma,
  Monitor,
  Star,
  TrendingUp
} from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-[#1f7a8c]',
      bgColor: 'from-[#bfdbf7] to-blue-50',
      skills: [
        { name: 'React', icon: '⚛️', level: 'Advanced', experience: '2+ years' },
        { name: 'JavaScript', icon: '🟨', level: 'Advanced', experience: '2+ years' },
        { name: 'TypeScript', icon: '🔷', level: 'Intermediate', experience: '1+ year' },
        { name: 'HTML/CSS', icon: '🌐', level: 'Expert', experience: '3+ years' },
        { name: 'Tailwind CSS', icon: '💨', level: 'Intermediate', experience: '1+ year' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'bg-[#022b3a]',
      bgColor: 'from-gray-100 to-gray-50',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 'Intermediate', experience: '1+ year' },
        { name: 'Express.js', icon: '⚡', level: 'Intermediate', experience: '1+ year' },
        { name: 'MongoDB', icon: '🍃', level: 'Intermediate', experience: '1+ year' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-[#1f7a8c]',
      bgColor: 'from-[#bfdbf7] to-indigo-50',
      skills: [
        { name: 'R Programming', icon: '📊', level: 'Intermediate', experience: '1+ year' },
        { name: 'SQL', icon: '🗄️', level: 'Advanced', experience: '2+ years' },
        { name: 'Power BI', icon: '📈', level: 'Beginner', experience: '6+ months' }
      ]
    },
    {
      title: 'Tools & Design',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-[#022b3a]',
      bgColor: 'from-gray-100 to-gray-50',
      skills: [
        { name: 'Git & GitHub', icon: '🔀', level: 'Intermediate', experience: '2+ years' },
        { name: 'Android Studio', icon: '🤖', level: 'Beginner', experience: '6+ months' },
        { name: 'Figma', icon: '🎨', level: 'Intermediate', experience: '1+ year' },
        { name: 'VS Code', icon: '💻', level: 'Advanced', experience: '3+ years' }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Advanced':
        return 'bg-[#bfdbf7] text-[#022b3a] border-[#1f7a8c]';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Beginner':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getLevelStars = (level) => {
    const stars = {
      'Expert': 5,
      'Advanced': 4,
      'Intermediate': 3,
      'Beginner': 2
    };
    return stars[level] || 2;
  };

  const currentlyLearning = [
    { name: 'Python', icon: '🐍', status: 'Improving' },
    { name: 'Docker', icon: '🐳', status: 'Exploring' },
    { name: 'AWS', icon: '☁️', status: 'Learning' },
    { name: 'Pandas', icon: '🐼', status: 'Learning' }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f7a8c]">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
            A comprehensive overview of my technical expertise across different domains
            of software development and data analysis, refined through academic projects and personal exploration.
          </p>
          <div className="w-20 h-1 bg-[#022b3a] mx-auto"></div>
        </div>

        {/* Skills Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-[#bfdbf7] to-blue-50 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-[#022b3a] mb-2">
              {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Skills</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#bfdbf7] to-blue-50 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-[#022b3a] mb-2">4</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#bfdbf7] to-blue-50 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-[#022b3a] mb-2">
              {skillCategories.reduce((total, category) => 
                total + category.skills.filter(skill => skill.level === 'Advanced' || skill.level === 'Expert').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Advanced+</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#bfdbf7] to-blue-50 rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-[#022b3a] mb-2">{currentlyLearning.length}</div>
            <div className="text-sm text-gray-600">Learning</div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
              onMouseEnter={() => setActiveCategory(categoryIndex)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`${category.color} p-4 rounded-xl text-white mr-4 shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#022b3a] mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-4 bg-white/80 backdrop-blur-sm rounded-lg border transition-all duration-300 ${
                      activeCategory === categoryIndex 
                        ? 'shadow-md border-[#1f7a8c]/30 scale-102' 
                        : 'shadow-sm border-gray-200 hover:shadow-md hover:border-[#1f7a8c]/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <div>
                          <span className="font-semibold text-[#022b3a] text-lg">
                            {skill.name}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            {skill.experience}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Skill Level Stars */}
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < getLevelStars(skill.level)
                                ? 'text-[#1f7a8c] fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {getLevelStars(skill.level)}/5
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="bg-gradient-to-br from-[#bfdbf7] to-indigo-50 p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="text-[#1f7a8c] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-[#022b3a]">
                Currently Learning & Exploring
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Continuously expanding my skillset and staying updated with the latest technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentlyLearning.map((skill, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/50"
              >
                <div className="text-center">
                  <span className="text-3xl mb-3 block">{skill.icon}</span>
                  <h4 className="font-semibold text-[#022b3a] mb-2">{skill.name}</h4>
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
                    {skill.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              <strong>Next Goals:</strong> Machine Learning fundamentals, Cloud deployment, and Advanced React patterns
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#022b3a] text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Together</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on a project or discussing technology? 
              I'm always eager to apply my skills to new challenges and learn from experienced developers.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#1f7a8c] text-white font-semibold rounded-lg hover:bg-[#1a6b7a] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};