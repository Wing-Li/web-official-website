"use client";

import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Web1Page() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <div className="relative h-[600px] mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/32a4245faf3575510f7827df8576e48c.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Transforming Ideas into Digital Reality</h1>
            <p className="text-xl mb-8">Pioneering the future through innovative technology solutions. Join us in
              creating a world where possibilities are limitless.</p>
            <div className="flex gap-4">
              <button
                className="bg-white text-indigo-600 px-8 py-3 text-lg font-medium !rounded-button whitespace-nowrap hover:bg-gray-100">
                Get Started
              </button>
              <button
                className="border-2 border-white text-white px-8 py-3 text-lg font-medium !rounded-button whitespace-nowrap hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose InnovateTech?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with creative solutions to deliver exceptional results that drive your
              business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-rocket",
                title: "Fast Implementation",
                desc: "Launch your projects quickly with our streamlined development process and expert team."
              },
              {
                icon: "fas fa-shield-alt",
                title: "Enterprise Security",
                desc: "State-of-the-art security measures to protect your valuable data and assets."
              },
              {
                icon: "fas fa-clock",
                title: "24/7 Support",
                desc: "Round-the-clock technical support to ensure your operations run smoothly."
              },
              {
                icon: "fas fa-code",
                title: "Clean Code",
                desc: "Maintainable and scalable code that follows industry best practices."
              },
              {
                icon: "fas fa-cloud",
                title: "Cloud Solutions",
                desc: "Flexible and powerful cloud infrastructure for your growing business needs."
              },
              {
                icon: "fas fa-chart-line",
                title: "Analytics",
                desc: "Deep insights into your data to make informed business decisions."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Worldwide" },
              { number: "1000+", label: "Projects Completed" },
              { number: "50+", label: "Countries Served" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Digital Transformation?</h2>
          <button
            className="bg-white text-indigo-600 px-8 py-3 text-lg font-medium !rounded-button whitespace-nowrap hover:bg-gray-100">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <>
      {/* About Hero Section */}
      <div className="relative h-[500px] mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/d50d081fbb8b8f805ff296cd0829e92c.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">About InnovateTech</h1>
            <p className="text-xl">Leading the digital transformation journey with innovation, expertise, and unwavering
              commitment to excellence.</p>
          </div>
        </div>
      </div>
      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At InnovateTech, our mission is to empower businesses through cutting-edge technology solutions that
                drive growth, efficiency, and innovation. We're committed to delivering excellence in every project,
                ensuring our clients stay ahead in the digital age.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a future where technology seamlessly integrates with business operations, creating
                sustainable growth and positive impact. Our goal is to be the global leader in digital transformation,
                setting new standards in innovation and service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-star",
                title: "Excellence",
                desc: "Striving for the highest standards in everything we do."
              },
              {
                icon: "fas fa-handshake",
                title: "Integrity",
                desc: "Building trust through honest and ethical business practices."
              },
              {
                icon: "fas fa-lightbulb",
                title: "Innovation",
                desc: "Continuously pushing boundaries and exploring new possibilities."
              },
              {
                icon: "fas fa-users",
                title: "Collaboration",
                desc: "Working together to achieve extraordinary results."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-indigo-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Global Presence Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With offices across major technology hubs and clients worldwide, we deliver innovative solutions on a
              global scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco",
                address: "100 Tech Plaza, CA 94105",
                phone: "+1 (415) 555-0123"
              },
              {
                city: "London",
                address: "45 Innovation Square, EC2A 1AB",
                phone: "+44 20 7123 4567"
              },
              {
                city: "Singapore",
                address: "88 Digital Tower, 018956",
                phone: "+65 6789 0123"
              }
            ].map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{office.city}</h3>
                <p className="text-gray-600 mb-2">{office.address}</p>
                <p className="text-gray-600">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderStory = () => (
    <>
      {/* Story Hero Section */}
      <div className="relative h-[500px] mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/b7a0b3ad4f9d80f16a11a78af9f5c12b.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Our Journey</h1>
            <p className="text-xl">From a small startup to a global technology leader - this is our story of innovation,
              perseverance, and success.</p>
          </div>
        </div>
      </div>
      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {[
              {
                year: "2010",
                title: "The Beginning",
                description: "Founded in a small garage by two visionary engineers, InnovateTech started with a mission to revolutionize enterprise software solutions.",
                image: "https://ai-public.mastergo.com/ai/img_res/16fcab6f7effed126ffd3267d40b0db6.jpg"
              },
              {
                year: "2015",
                title: "Global Expansion",
                description: "Opened our first international office in London, marking the beginning of our global presence. Achieved our first 100 enterprise clients milestone.",
                image: "https://ai-public.mastergo.com/ai/img_res/498858e2c945fead7ecae464713a6937.jpg"
              },
              {
                year: "2018",
                title: "Innovation Breakthrough",
                description: "Launched our revolutionary AI-powered platform, transforming how businesses approach digital transformation. Won multiple industry awards.",
                image: "https://ai-public.mastergo.com/ai/img_res/c24bb06c0449c9fec4527809cb42eaa9.jpg"
              },
              {
                year: "2024",
                title: "Present Day",
                description: "Leading the industry with over 500 global employees, serving Fortune 500 companies across 50+ countries. Continuing to innovate and shape the future of technology.",
                image: "https://ai-public.mastergo.com/ai/img_res/df207f562a6a8c3da2f917c49656195f.jpg"
              }
            ].map((milestone, index) => (
              <div key={index} className={`flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="relative">
                    <img src={milestone.image} alt={milestone.title}
                         className="rounded-lg shadow-lg w-full h-[400px] object-cover"/>
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-2 rounded-full">
                      {milestone.year}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderTeam = () => (
    <>
      {/* Team Hero Section */}
      <div className="relative h-[500px] mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/2c7608d102bdf130b64f16911c2d57e6.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl">Talented individuals united by a passion for innovation and excellence.</p>
          </div>
        </div>
      </div>
      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexander Mitchell",
                role: "Chief Executive Officer",
                bio: "With over 20 years of experience in technology leadership, Alex has led multiple successful startups and digital transformations.",
                image: "https://ai-public.mastergo.com/ai/img_res/8c46690b8c8c35a510a42de2a3b677ed.jpg"
              },
              {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                bio: "Former Google engineer with expertise in AI and machine learning. Led the development of our core technology platform.",
                image: "https://ai-public.mastergo.com/ai/img_res/16c0c4409f66f26b752f5ca52205f72e.jpg"
              },
              {
                name: "Marcus Thompson",
                role: "Chief Operating Officer",
                bio: "Brings 15 years of operational excellence from Fortune 500 companies. Expert in scaling global operations.",
                image: "https://ai-public.mastergo.com/ai/img_res/432ebc5d2f6aacfbdcd379732ed552fc.jpg"
              }
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Department Leads Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Department Leads</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Emma Rodriguez",
                role: "Head of Product",
                image: "https://ai-public.mastergo.com/ai/img_res/0efe39184c95630bdea3a8c496731ca1.jpg"
              },
              {
                name: "David Kumar",
                role: "Head of Engineering",
                image: "https://ai-public.mastergo.com/ai/img_res/db005350b4bfdc95b1022c6a345f97a0.jpg"
              },
              {
                name: "Michelle Foster",
                role: "Head of Design",
                image: "https://ai-public.mastergo.com/ai/img_res/c2066806a3ea2594036079fc0d99d19f.jpg"
              },
              {
                name: "James Wilson",
                role: "Head of Sales",
                image: "https://ai-public.mastergo.com/ai/img_res/03230b162c9e59cdaabd284e1faf4ca8.jpg"
              }
            ].map((lead, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                  <img src={lead.image} alt={lead.name} className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-lg font-semibold mb-1">{lead.name}</h3>
                <p className="text-gray-600">{lead.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderNavigation = () => (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <i className="fas fa-cube text-indigo-600 text-2xl"></i>
          <span className="text-xl font-semibold">InnovateTech</span>
        </div>
        
        {/* 移动端菜单按钮 */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('about');
            }}
            className={`${currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
          >
            About Us
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('story');
            }}
            className={`${currentPage === 'story' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
          >
            Our Story
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('team');
            }}
            className={`${currentPage === 'team' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
          >
            Team
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('partners');
            }}
            className={`${currentPage === 'partners' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
          >
            Partners
          </a>
          <button className="bg-indigo-600 text-white px-6 py-2 !rounded-button whitespace-nowrap hover:bg-indigo-700">
            Get Started
          </button>
        </div>


        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b md:hidden">
            <div className="flex flex-col p-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600 py-2`}
              >
                About Us
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('story');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'story' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600 py-2`}
              >
                Our Story
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('team');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'team' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600 py-2`}
              >
                Team
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('partners');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'partners' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600 py-2`}
              >
                Partners
              </a>
              <button className="bg-indigo-600 text-white px-6 py-2 !rounded-button whitespace-nowrap hover:bg-indigo-700 mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}
      {currentPage === 'home' && renderHome()}
      {currentPage === 'about' && renderAbout()}
      {currentPage === 'story' && renderStory()}
      {currentPage === 'team' && renderTeam()}
      {currentPage === 'partners' && (
        <>
          {/* Partners Hero Section */}
          <div className="relative h-[500px] mt-20">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/27402a5df626106d577b729623887977.jpg')`
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
                <p className="text-xl">Building strong relationships with industry leaders to deliver exceptional
                  solutions.</p>
              </div>
            </div>
          </div>

          {/* Strategic Partners Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-16">Strategic Partners</h2>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    name: "TechGiant Solutions",
                    type: "Cloud Infrastructure Partner",
                    desc: "Global leader in cloud computing and infrastructure services, providing enterprise-grade solutions.",
                    image: "https://ai-public.mastergo.com/ai/img_res/e4878ccab28745898d7e4d97680e6ff3.jpg"
                  },
                  {
                    name: "SecureNet Systems",
                    type: "Security Solutions Partner",
                    desc: "Industry-leading cybersecurity provider specializing in enterprise-level protection.",
                    image: "https://ai-public.mastergo.com/ai/img_res/742a448e719def23950c90ac478b639a.jpg"
                  },
                  {
                    name: "DataFlow Analytics",
                    type: "Data Analytics Partner",
                    desc: "Pioneers in big data analytics and machine learning solutions for business intelligence.",
                    image: "https://ai-public.mastergo.com/ai/img_res/f89ca63c4e8e15c2e57bb774caa0e237.jpg"
                  }
                ].map((partner, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src={partner.image} alt={partner.name} className="w-full h-48 object-cover rounded-t-lg"/>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                      <p className="text-indigo-600 font-medium mb-3">{partner.type}</p>
                      <p className="text-gray-600">{partner.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Partners Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-16">Technology Partners</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    name: "CloudStack",
                    category: "Cloud Services",
                    logo: "https://ai-public.mastergo.com/ai/img_res/1739c98df104106a6e1094197a065e25.jpg"
                  },
                  {
                    name: "DataCore",
                    category: "Database Solutions",
                    logo: "https://ai-public.mastergo.com/ai/img_res/0c0d27010cd4ae01a5f04986e34eca1a.jpg"
                  },
                  {
                    name: "SecureGuard",
                    category: "Security",
                    logo: "https://ai-public.mastergo.com/ai/img_res/9b3a8bb6467e8fd7159ab2d630114fc4.jpg"
                  },
                  {
                    name: "AIFlow",
                    category: "AI Solutions",
                    logo: "https://ai-public.mastergo.com/ai/img_res/1540f21291c4b1b4a3a192f23ab95e41.jpg"
                  }
                ].map((partner, index) => (
                  <div key={index}
                       className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                    <img src={partner.logo} alt={partner.name} className="w-24 h-24 mx-auto mb-4"/>
                    <h3 className="text-lg font-semibold mb-1">{partner.name}</h3>
                    <p className="text-gray-600">{partner.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Benefits Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join our partner ecosystem and unlock exclusive benefits and opportunities for growth.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    icon: "fas fa-handshake",
                    title: "Strategic Growth",
                    desc: "Access new markets and opportunities through collaborative partnerships."
                  },
                  {
                    icon: "fas fa-graduation-cap",
                    title: "Technical Training",
                    desc: "Comprehensive training and certification programs for partners."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Revenue Share",
                    desc: "Attractive revenue sharing models and incentive programs."
                  },
                  {
                    icon: "fas fa-tools",
                    title: "Support Resources",
                    desc: "Dedicated partner support and extensive resource library."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${benefit.icon} text-indigo-600 text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partner CTA Section */}
          <section className="py-20 bg-indigo-600">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and let's create innovative solutions together. We're always looking for new
                partnerships that drive mutual growth and success.
              </p>
              <button
                className="bg-white text-indigo-600 px-8 py-3 text-lg font-medium !rounded-button whitespace-nowrap hover:bg-gray-100">
                Apply for Partnership
              </button>
            </div>
          </section>
        </>
      )}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <i className="fas fa-cube text-indigo-400 text-2xl"></i>
                <span className="text-xl font-semibold">InnovateTech</span>
              </div>
              <p className="text-gray-400 mb-4">Transforming businesses through innovative technology solutions.</p>
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
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  123 Innovation Street, Tech City, TC 12345
                </li>
                <li className="text-gray-400">
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 123-4567
                </li>
                <li className="text-gray-400">
                  <i className="fas fa-envelope mr-2"></i>
                  contact@innovatetech.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">© 2024 InnovateTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

}


