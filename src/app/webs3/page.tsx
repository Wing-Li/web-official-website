"use client";

import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Webs3Page: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alexander Mitchell',
      role: 'Chief Executive Officer',
      image: 'https://ai-public.mastergo.com/ai/img_res/b674c8c9edbe8c2fc8e0d2e5709f7fe2.jpg'
    },
    {
      name: 'Isabella Thompson',
      role: 'Chief Technology Officer',
      image: 'https://ai-public.mastergo.com/ai/img_res/2d63850f0238ee1a5beddd255c92fdd0.jpg'
    },
    {
      name: 'William Anderson',
      role: 'Head of Operations',
      image: 'https://ai-public.mastergo.com/ai/img_res/0f35c1c55032124bb3b87443be832ce9.jpg'
    }
  ];

  const partners = [
    'TechCorp Solutions',
    'Global Innovations',
    'Future Systems',
    'Digital Ventures',
    'Smart Technologies'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">InnovateTeam</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-emerald-600">About Us</a>
              <a href="#story" className="text-gray-600 hover:text-emerald-600">Our Story</a>
              <a href="#team" className="text-gray-600 hover:text-emerald-600">Team</a>
              <a href="#partners" className="text-gray-600 hover:text-emerald-600">Partners</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600">Contact</a>
            </div>
            <button className="!rounded-button bg-emerald-600 text-white px-6 py-2 hover:bg-emerald-700 transition-colors whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[600px] bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/5c0488176dcc5b86a8a9b71dfae6da79.jpg')`
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-transparent">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-6">Innovating Together for a Better Future</h1>
                <p className="text-xl mb-8">We are a team of passionate professionals dedicated to transforming ideas into reality through innovative solutions and collaborative excellence.</p>
                <button className="!rounded-button bg-white text-emerald-600 px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At InnovateTeam, we believe in the power of collaboration and innovation to solve complex challenges and create meaningful impact in the digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <i className="fas fa-lightbulb text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-4">Innovation First</h3>
              <p className="text-gray-600">We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <i className="fas fa-users text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-4">Collaborative Spirit</h3>
              <p className="text-gray-600">Our success is built on strong partnerships and effective teamwork across all levels.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <i className="fas fa-chart-line text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-4">Sustainable Growth</h3>
              <p className="text-gray-600">We focus on long-term success through sustainable practices and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind our success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-emerald-600 text-xl w-8"></i>
                  <span className="text-gray-600">123 Innovation Street, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-emerald-600 text-xl w-8"></i>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-emerald-600 text-xl w-8"></i>
                  <span className="text-gray-600">contact@innovateteam.com</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                  ></textarea>
                </div>
                <button className="!rounded-button w-full bg-emerald-600 text-white py-3 text-lg font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InnovateTeam</h3>
              <p className="text-gray-400">
                Transforming ideas into reality through innovation and collaboration.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white">Our Team</a></li>
                <li><a href="#partners" className="text-gray-400 hover:text-white">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Consulting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Innovation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
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
            <p>&copy; 2024 InnovateTeam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Webs3Page;

