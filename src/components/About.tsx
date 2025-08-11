import React, { useState } from 'react';
import { Code, Brain, Users, GraduationCap, Award, BookOpen, Target, Heart, Lightbulb, X, Eye } from 'lucide-react';

export const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Certificate data - using correct paths for public folder
  const certificates = {
    programming: [
      { name: 'Introduction to C – Sololearn', image: './certificates/IntroC_Sololern.png' },
      { name: 'Introduction to C++ – Sololearn', image: './certificates/IntroC++_Sololearn.png' },
      { name: 'Introduction to Java – Sololearn', image: './certificates/IntroJava_Sololearn.png' }
    ],
    dataScience: [
      { name: 'Introduction to Data Science – Cisco Networking Academy', image: './certificates/data-science-certificate.png' },
      { name: 'Visualize Your Data – Sololearn', image: './certificates/Visualize_your_data_Sololearn.png' },
      { name: 'Coding for Data – Sololearn', image: './certificates/Coding_for_Data_Sololearn.png' },
      { name: 'Introduction to Modern AI – Cisco Networking Academy', image: './certificates/IntroMorden_AI_CNA.png' },
      { name: 'Prompt Engineering – Sololearn', image: './certificates/Prompt_Engineering_Sololearn.png' }
    ]
  };

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeCertificate();
      }
    };

    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

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
            
            {/* Box 1 - Programming Languages with Certificate Viewer */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Code className="text-blue-600 mr-2" size={20} />
                  <h5 className="font-bold text-gray-800">Programming Languages</h5>
                </div>
                <div className="bg-blue-200 p-1 rounded-full">
                  <Eye className="text-blue-600" size={16} />
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                {certificates.programming.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">▪</span>
                    <button
                      onClick={() => openCertificate(cert)}
                      className="text-left hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                    >
                      {cert.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-xs text-blue-600 font-medium">
                Click certificates to view full size
              </div>
            </div>
            
            {/* Box 2 - Data Science & AI with Certificate Viewer */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Brain className="text-green-600 mr-2" size={20} />
                  <h5 className="font-bold text-gray-800">Data Science & AI</h5>
                </div>
                <div className="bg-green-200 p-1 rounded-full">
                  <Eye className="text-green-600" size={16} />
                </div>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                {certificates.dataScience.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">▪</span>
                    <button
                      onClick={() => openCertificate(cert)}
                      className="text-left hover:text-green-600 hover:underline transition-colors cursor-pointer"
                    >
                      {cert.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-xs text-green-600 font-medium">
                Click certificates to view full size
              </div>
            </div>
            
            {/* Box 3 - Academic Projects (unchanged) */}
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
            
            {/* Box 4 - Personal Development (unchanged) */}
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
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▪</span>
                  Curiosity & Continuous Improvement
                </li>
                 <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▪</span>
                  Adaptability & Flexibility
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▪</span>
                  Documentation Skills
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▪</span>
                  Resilience & Patience
                </li>
              </ul>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-8 p-6 bg-gradient-to-r from-[#bfdbf7] to-indigo-50 rounded-lg">
            <h4 className="font-bold text-lg text-[#022b3a] mb-3 text-center">Looking Ahead</h4>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              I aim to apply my expertise in data science and software development to create innovative 
              solutions for real world challenges. I’m especially interested in using machine learning and 
              data analytics to deliver valuable insights and drive impactful outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeCertificate}
        >
          <div 
            className="relative max-w-4xl max-h-full bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-semibold text-gray-800 truncate pr-4">
                {selectedCertificate.name}
              </h3>
              <button
                onClick={closeCertificate}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-200"
                aria-label="Close certificate viewer"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Certificate Image */}
            <div className="p-4">
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.name} Certificate`}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-md"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTIwSDIyNVYxODBIMTc1VjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN0cm9rZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM2QjcyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIyMDAiIHk9IjIxMCI+Q2VydGlmaWNhdGUgbm90IGZvdW5kPC90ZXh0PgoKPC9zdmc+';
                  e.target.alt = 'Certificate image not found';
                }}
              />
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t text-center">
              <p className="text-sm text-gray-600">
                Press <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Esc</kbd> or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};