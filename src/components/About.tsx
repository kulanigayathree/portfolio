import React from 'react';
import { Code, Brain, Users, GraduationCap, Award, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f7a8c]">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get to know more about my journey, passion for technology, and what drives me forward
          </p>
          <div className="w-20 h-1 bg-[#022b3a] mx-auto"></div>
        </div>

        {/* Personal Introduction */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#bfdbf7] to-indigo-50 p-8 rounded-xl shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6 text-[#022b3a]">My Story</h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                I'm a passionate <strong className="text-[#1f7a8c]">Third Year IT undergraduate</strong> at SLIIT with an insatiable curiosity for data science and technology. 
                My journey began with a fascination for how data can tell stories and drive meaningful decisions.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                What excites me most is the intersection of technology and problem-solving—transforming raw data into actionable insights 
                that can make a real difference. I believe in continuous learning and am always eager to take on new challenges that push my boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values/Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-[#1f7a8c]">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1f7a8c] transition-colors duration-300">
                <Brain className="text-blue-600 group-hover:text-white" size={28} />
              </div>
              <h4 className="font-bold text-lg mb-3 text-[#022b3a]">Data-Driven Thinking</h4>
              <p className="text-gray-600">
                I love discovering patterns in data and using analytical thinking to solve complex problems and make informed decisions.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1f7a8c] transition-colors duration-300">
                <Lightbulb className="text-green-600 group-hover:text-white" size={28} />
              </div>
              <h4 className="font-bold text-lg mb-3 text-[#022b3a]">Innovation & Learning</h4>
              <p className="text-gray-600">
                Constantly exploring new technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1f7a8c] transition-colors duration-300">
                <Target className="text-purple-600 group-hover:text-white" size={28} />
              </div>
              <h4 className="font-bold text-lg mb-3 text-[#022b3a]">Impact-Focused</h4>
              <p className="text-gray-600">
                Committed to using technology and data science to create solutions that make a positive impact on businesses and society.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-50 py-12 px-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-[#1f7a8c]">Education & Academic Journey</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* University Details */}
            <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#022b3a]">University Education</h4>
                  <p className="text-gray-600">Current Academic Pursuit</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Institution:</span>
                  <span className="text-gray-800">SLIIT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Degree:</span>
                  <span className="text-gray-800">BSc (HONS) IT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Expected Graduation:</span>
                  <span className="text-gray-800">2027</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Current GPA:</span>
                  <span className="text-[#1f7a8c] font-bold">3.1</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Focus Areas:</strong> Data Science, Software Development, Database Management, Web Technologies
                  </p>
                </div>
              </div>
            </div>

            {/* A-Level Results */}
            <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#022b3a]">Advanced Level</h4>
                  <p className="text-gray-600">Academic Foundation</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Stream:</span>
                  <span className="text-gray-800">Physical Science</span>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold text-gray-700 mb-3">Subject Results:</h5>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-gray-700">Combined Mathematics</span>
                      <span className="font-bold text-[#1f7a8c]">C</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-gray-700">Physics</span>
                      <span className="font-bold text-[#1f7a8c]">C</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-gray-700">Chemistry</span>
                      <span className="font-bold text-[#1f7a8c]">C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1f7a8c]">Certifications & Professional Development</h3>
              <p className="text-gray-600">Continuous learning and skill enhancement</p>
            </div>
          </div>
          
          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 - Web Development */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-2" size={20} />
                <h5 className="font-bold text-gray-800">Programming Languages</h5>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▪</span>
                  Introduction to C – Sololearn
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▪</span>
                  Introduction to C++ – Sololearn
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▪</span>
                  Introduction to Java – Sololearn
                </li>
              </ul>
            </div>
            
            {/* Box 2 - Data Science */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Brain className="text-green-600 mr-2" size={20} />
                <h5 className="font-bold text-gray-800">Data Science & AI</h5>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">▪</span>
                  Introduction to Data Science – Cisco Networking Academy
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">▪</span>
                  Visualize Your Data – Sololearn
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">▪</span>
                  Coding for Data – Sololearn
                </li>
                 <li className="flex items-start">
                  <span className="text-green-500 mr-2">▪</span>
                  Introduction to Modern AI – Cisco Networking Academy
                </li>
                 <li className="flex items-start">
                  <span className="text-green-500 mr-2">▪</span>
                  Prompt Engineering – Sololearn
                </li>
              </ul>
            </div>
            
            {/* Box 3 - Academic Courses */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-purple-600 mr-2" size={20} />
                <h5 className="font-bold text-gray-800">Academic Projects</h5>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▪</span>
                  Database Design Systems
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▪</span>
                  Software Engineering
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▪</span>
                  System Analysis & Design
                </li>
              </ul>
            </div>
            
            {/* Box 4 - Personal Development */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Target className="text-orange-600 mr-2" size={20} />
                <h5 className="font-bold text-gray-800">Personal Growth</h5>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▪</span>
                  Problem-Solving Skills
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▪</span>
                  Team Collaboration
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▪</span>
                  Self-Directed Learning
                </li>
              </ul>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-8 p-6 bg-gradient-to-r from-[#bfdbf7] to-indigo-50 rounded-lg">
            <h4 className="font-bold text-lg text-[#022b3a] mb-3 text-center">Looking Ahead</h4>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              My goal is to leverage my growing expertise in data science and software development to contribute to innovative projects 
              that solve real-world problems. I'm particularly interested in opportunities where I can apply machine learning and 
              data analysis to drive business insights and create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};