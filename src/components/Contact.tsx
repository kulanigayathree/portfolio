import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      content: 'kulanigayathree99@gmail.com',
      link: 'mailto:kulanigayathree99@gmail.com',
      description: 'Best way to reach me for professional inquiries'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      content: '+94 72 5545 479',
      link: 'tel:+94725545479',
      description: 'Available for calls during business hours'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      content: 'Ridewita watta, Nikagoda, Kalawana, Ratnapura',
      description: 'Based in Sri Lanka, available for remote work'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/kulanigayathree',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/kulani-gayathree-19174a278',
      color: 'hover:bg-[#0077b5] hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f7a8c]">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply connect with fellow technology enthusiasts. 
            Whether you have a project in mind or just want to say hello, I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-[#022b3a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-[#1f7a8c] mr-3" size={24} />
                <h3 className="text-xl font-bold text-[#022b3a]">Contact Information</h3>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start">
                      <div className="bg-[#bfdbf7] p-3 rounded-full mr-4 group-hover:bg-[#1f7a8c] group-hover:text-white transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#022b3a] mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-[#1f7a8c] hover:text-[#022b3a] font-medium transition-colors duration-200 block mb-2"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-medium mb-2">{info.content}</p>
                        )}
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-[#bfdbf7] to-indigo-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Clock className="text-[#1f7a8c] mr-3" size={20} />
                <h4 className="font-semibold text-[#022b3a]">Response Time</h4>
              </div>
              <p className="text-gray-700 text-sm">
                I typically respond to emails within <strong>24-48 hours</strong>. 
                For urgent matters, feel free to call during business hours.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-[#022b3a] mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-8">
                <Send className="text-[#1f7a8c] mr-3" size={24} />
                <h3 className="text-xl font-bold text-[#022b3a]">Send Me a Message</h3>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="text-green-600 mr-3" size={20} />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f7a8c] focus:border-[#1f7a8c] transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f7a8c] focus:border-[#1f7a8c] transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f7a8c] focus:border-[#1f7a8c] transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f7a8c] focus:border-[#1f7a8c] transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-[#022b3a] text-white hover:bg-[#1a4156] hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Privacy:</strong> Your information is safe with me and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#bfdbf7] to-indigo-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#022b3a] mb-4">
              Ready to Start a Conversation?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Whether it's about a potential collaboration, job opportunity, or just to connect with a fellow tech enthusiast, 
              I'm always open to meaningful conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kulanigayathree99@gmail.com"
                className="px-8 py-3 bg-[#022b3a] text-white font-semibold rounded-lg hover:bg-[#1a4156] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/kulani-gayathree-19174a278"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-[#1f7a8c] text-[#1f7a8c] font-semibold rounded-lg hover:bg-[#1f7a8c] hover:text-white transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};