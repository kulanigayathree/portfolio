import React from 'react';
import { Code, Brain, Users, GraduationCap, Award, BookOpen } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#022b3a]">About Me</h2>
          <div className="w-20 h-1 bg-[#1f7a8c] mx-auto"></div>
        </div>
        
        
         
          
          
          
        

        {/* Education Section */}
        <div className="bg-gray-50 py-12 px-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Education & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* University Details */}
            <div className="bg-white p-6 rounded-lg shadow-md 
            transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">University Education</h4>
                  <p className="text-gray-600">Current Studies</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Institution:</strong> Sri Lanka Institute of Information Technology (SLIIT)
                </p>
                <p className="text-gray-700">
                  <strong>Degree:</strong> BSc (HONS) Information Technology
                </p>
                <p className="text-gray-700">
                  <strong>Expected Graduation:</strong> 2027
                </p>
                <p className="text-gray-700">
                  <strong>GPA:</strong> 3.1
                </p>
              </div>
            </div>

            {/* A-Level Results */}
            <div className="bg-white p-6 rounded-lg shadow-md 
            transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Advanced Level</h4>
                  <p className="text-gray-600">Academic Foundation</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Stream:</strong> Physical Science
                </p>
                <p className="text-gray-700">
                  <strong>Results:</strong>
                </p>
                <ul className="text-gray-700 ml-4 space-y-1">
                  <li>• Combined Maths: C</li>
                  <li>• Physics: C</li>
                  <li>• Chemistry: C</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="mt-8 flex justify-center ">
            <div className="bg-white p-6 rounded-lg shadow-md 
          transition transform hover:scale-105 hover:shadow-xl cursor-pointer
            ">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Certifications & Achievements</h4>
                  <p className="text-gray-600">Professional Development</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-800">Discovering data</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Visualize Your Data - Sololearn</li>
                    <li>• Coding for Data - Sololearn</li>
                    <li>• Introduction to Data Science - Cisco Networking Academy</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-800">Other</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Introduction to C - Sololearn</li>
                    <li>• Introduncion to C++ - Sololearn</li>
                    <li>• Introduction to Java - Sololearn</li>
                    <li>• Prompt Engineering - Sololearn</li>
                    <li>• Introduction to Modern AI - Cisco Networking Academy</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};