import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you! Fill out the form below and I'll get back to you as soon
            as possible.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:kulanigayathree99@gmail.com" className="text-gray-600 hover:text-blue-600">
                    kulanigayathree99@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+945545479" className="text-gray-600 hover:text-blue-600">
                    +94 72 5545 479
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Ridewita watta, Nikagoda, Kalawana, Ratnapura</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Project Inquiry" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};