"use client";

import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Webs1Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-cube text-indigo-600 text-2xl"></i>
            <span className="text-xl font-semibold">InnovateTech</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About Us</a>
            <a href="#story" className="text-gray-600 hover:text-indigo-600">Our Story</a>
            <a href="#team" className="text-gray-600 hover:text-indigo-600">Team</a>
            <a href="#partners" className="text-gray-600 hover:text-indigo-600">Partners</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="bg-indigo-600 text-white px-6 py-2 !rounded-button whitespace-nowrap hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/2ef42dc0fad64c0ff5be7aa53feb7da2.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Innovating Tomorrow's Solutions Today</h1>
            <p className="text-xl mb-8">We're a team of passionate innovators dedicated to transforming ideas into impactful solutions. Join us in shaping the future of technology.</p>
            <button className="bg-white text-indigo-600 px-8 py-3 text-lg font-medium !rounded-button whitespace-nowrap hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Our Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over a decade of experience in technological innovation, we've built a reputation for delivering exceptional solutions that drive business growth and transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://ai-public.mastergo.com/ai/img_res/6bae45ba0ef79dab10ac38d0250c330f.jpg"
                  className="w-full h-full object-cover object-top"
                  alt="Innovation"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Leading the way in technological advancement through creative problem-solving and forward-thinking solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://ai-public.mastergo.com/ai/img_res/742f4f4875397f899d79054389af8715.jpg"
                  className="w-full h-full object-cover object-top"
                  alt="Collaboration"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Spirit</h3>
              <p className="text-gray-600">Building strong partnerships and fostering teamwork to achieve exceptional results together.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://ai-public.mastergo.com/ai/img_res/9ac825fc0f0503c942d1397df92c2248.jpg"
                  className="w-full h-full object-cover object-top"
                  alt="Excellence"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence Driven</h3>
              <p className="text-gray-600">Committed to delivering the highest quality solutions that exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Alexander Mitchell",
                role: "Chief Executive Officer",
                image: "https://ai-public.mastergo.com/ai/img_res/cd437dc893d0a94758d2ef23169325a8.jpg"
              },
              {
                name: "Sarah Richardson",
                role: "Chief Technology Officer",
                image: "https://ai-public.mastergo.com/ai/img_res/ad2587e5790a45494aa84ad1949296c1.jpg"
              },
              {
                name: "James Cooper",
                role: "Head of Innovation",
                image: "https://ai-public.mastergo.com/ai/img_res/7b222da2a8c545088dc0116c7e9fbdec.jpg"
              },
              {
                name: "Emily Zhang",
                role: "Director of Operations",
                image: "https://ai-public.mastergo.com/ai/img_res/815835cbc6bad0de4d502f5bb09c5616.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    className="w-full h-full object-cover object-top"
                    alt={member.name}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
                <i className={`fas fa-${['building', 'globe', 'chart-line', 'network-wired'][index]} text-4xl text-indigo-600`}></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Ready to start your next project with us? Send us a message and we'll get back to you as soon as possible.</p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <i className="fas fa-map-marker-alt text-indigo-600 text-xl w-6"></i>
                  <p>123 Innovation Street, Tech City, TC 12345</p>
                </div>
                <div className="flex items-center gap-4">
                  <i className="fas fa-phone text-indigo-600 text-xl w-6"></i>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-4">
                  <i className="fas fa-envelope text-indigo-600 text-xl w-6"></i>
                  <p>contact@innovatetech.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 !rounded-button whitespace-nowrap hover:bg-indigo-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <i className="fas fa-cube text-2xl"></i>
                <span className="text-xl font-semibold">InnovateTech</span>
              </div>
              <p className="text-gray-400">Transforming ideas into reality through innovation and technology.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white">About Us</a>
                <a href="#story" className="block text-gray-400 hover:text-white">Our Story</a>
                <a href="#team" className="block text-gray-400 hover:text-white">Team</a>
                <a href="#partners" className="block text-gray-400 hover:text-white">Partners</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-400">123 Innovation Street</p>
                <p className="text-gray-400">Tech City, TC 12345</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InnovateTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Webs1Page;

