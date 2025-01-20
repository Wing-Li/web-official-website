"use client";

import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Webs2Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-800">InnovateTech</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-emerald-800">About Us</a>
              <a href="#story" className="text-gray-600 hover:text-emerald-800">Our Story</a>
              <a href="#team" className="text-gray-600 hover:text-emerald-800">Team</a>
              <a href="#partners" className="text-gray-600 hover:text-emerald-800">Partners</a>
              <button className="bg-orange-500 text-white px-6 py-2 !rounded-button whitespace-nowrap hover:bg-orange-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] mt-16">
        <div className="absolute inset-0">
          <img
            src="https://ai-public.mastergo.com/ai/img_res/c87a7345ddf61a028667534b853c4c49.jpg"
            alt="Hero background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Transforming Ideas Into Innovation</h1>
            <p className="text-xl mb-8">We are a team of passionate innovators dedicated to creating cutting-edge solutions that shape the future of technology.</p>
            <button className="bg-orange-500 text-white px-8 py-3 !rounded-button whitespace-nowrap hover:bg-orange-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-emerald-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <i className="fas fa-quote-left text-3xl mb-6"></i>
          <p className="text-2xl italic mb-4">
            "Innovation distinguishes between a leader and a follower. We strive to lead the way in technological advancement and creative solutions."
          </p>
          <p className="text-lg">- James Anderson, CEO</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-48 mb-6 overflow-hidden">
                <img
                  src="https://ai-public.mastergo.com/ai/img_res/ddbbbc55dd8effc73cb21cc25d4d7e30.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-600">Leading innovation through collaborative excellence and cutting-edge technology solutions.</p>
            </div>
            <div className="text-center">
              <div className="h-48 mb-6 overflow-hidden">
                <img
                  src="https://ai-public.mastergo.com/ai/img_res/8c4da9322b3f65aaf2be63efcbea40ba.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-600">A journey of passion, innovation, and commitment to excellence since 2010.</p>
            </div>
            <div className="text-center">
              <div className="h-48 mb-6 overflow-hidden">
                <img
                  src="https://ai-public.mastergo.com/ai/img_res/efbf02569a2637cdfbca4d0bfb560dee.jpg"
                  alt="Join Us"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Join Us</h3>
              <p className="text-gray-600">Be part of our innovative team shaping the future of technology.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'Michael Richardson',
                role: 'Chief Executive Officer',
                image: 'https://ai-public.mastergo.com/ai/img_res/b45137f4ada59dfa19c542575ea7f92e.jpg'
              },
              {
                name: 'Sarah Thompson',
                role: 'Chief Technology Officer',
                image: 'https://ai-public.mastergo.com/ai/img_res/f320acb61ecef4595f352f406e6a26b8.jpg'
              },
              {
                name: 'David Chen',
                role: 'Head of Innovation',
                image: 'https://ai-public.mastergo.com/ai/img_res/654eefa48065591a23bd77b2fbe1f473.jpg'
              },
              {
                name: 'Emily Martinez',
                role: 'Director of Operations',
                image: 'https://ai-public.mastergo.com/ai/img_res/b835a9ff883c85394cbd8c9b5e08be7a.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm">
                <img
                  src={`https://mastergo.com/ai/api/search-image?query=minimal modern corporate logo design on clean white background, professional business branding&width=200&height=80&orientation=landscape&flag=ac99bef149788cdd3dda5d1e9ba8bf1a`}
                  alt={`Partner ${index + 1}`}
                  className="max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="bg-emerald-800 text-white px-8 py-3 !rounded-button whitespace-nowrap hover:bg-emerald-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InnovateTech</h3>
              <p className="text-gray-300">Transforming ideas into reality through innovation and technology.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white">Team</a></li>
                <li><a href="#partners" className="text-gray-300 hover:text-white">Partners</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>123 Innovation Street</li>
                <li>San Francisco, CA 94105</li>
                <li>contact@innovatetech.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 InnovateTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Webs2Page;

