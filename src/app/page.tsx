"use client";

import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

const tgChannelUrl = "";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function gotoNBBIT() {
    window.location.href = "https://nbbit.com";
  }


  const renderNavigation = () => (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <Image src="/imgs/logo.jpg" alt="" width={28} height={28}/>
          <span className="text-xl font-semibold">NBBIT</span>
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
              setCurrentPage('home');
            }}
            className={`${currentPage === 'home' ? 'text-indigo-600 font-semibold' : 'text-gray-600'} hover:text-indigo-600`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('about');
            }}
            className={`${currentPage === 'about' ? 'text-indigo-600 font-semibold' : 'text-gray-600'} hover:text-indigo-600`}
          >
            About Us
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('features');
            }}
            className={`${currentPage === 'features' ? 'text-indigo-600 font-semibold' : 'text-gray-600'} hover:text-indigo-600`}
          >
            Features
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('team');
            }}
            className={`${currentPage === 'team' ? 'text-indigo-600 font-semibold' : 'text-gray-600'} hover:text-indigo-600`}
          >
            Team
          </a>
          <button className="bg-indigo-600 text-white px-6 py-2 !rounded-button whitespace-nowrap hover:bg-indigo-700">
            Get Started
          </button>
        </div>


        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white/90 border-b md:hidden">
            <div className="flex flex-col p-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'home' ? 'text-indigo-600 font-semibold' : 'text-gray-900'} hover:text-indigo-600 py-2`}
              >
                Home
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'about' ? 'text-indigo-600 font-semibold' : 'text-gray-900'} hover:text-indigo-600 py-2`}
              >
                About Us
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('features');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'features' ? 'text-indigo-600 font-semibold' : 'text-gray-900'} hover:text-indigo-600 py-2`}
              >
                Features
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('team');
                  setIsMobileMenuOpen(false);
                }}
                className={`${currentPage === 'team' ? 'text-indigo-600 font-semibold' : 'text-gray-900'} hover:text-indigo-600 py-2`}
              >
                Team
              </a>
              <button
                className="bg-indigo-600 text-white px-6 py-2 !rounded-button whitespace-nowrap hover:bg-indigo-700 mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <div className="relative h-[600px] mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/e66f19e3dcc93ff2dc08019551a212dd.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">The Cutting-Edge Binary Options Trading Platform</h1>
            <p className="text-xl mb-8">
              Experience the future of trading with advanced strategies, real-time signals, and expert guidance.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-white text-indigo-600 px-8 py-3 text-lg font-medium !rounded-button whitespace-nowrap hover:bg-gray-100"
                onClick={gotoNBBIT}
              >
                Start Trading
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-black font-bold mb-4">Why Choose NBBIT?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver a premier trading experience, powered by expert traders and advanced tools designed to ensure
              your success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                // 人员
                icon: "fas fa-user-tie",
                title: "Expert Guidance",
                desc: "Seasoned traders offer you proven strategies and insights."
              },
              {
                // 齿轮图标
                icon: "fas fa-gear",
                title: "Advanced Technology",
                desc: "Trade smarter with cutting-edge tools and precision-driven signals."
              },
              {
                // 折线图
                icon: "fas fa-chart-line",
                title: "Consistent Results",
                desc: "Maximize trading potential with strategies designed for reliable success."
              },
              {
                // 小火箭图标
                icon: "fas fa-rocket",
                title: "Seamless Experience",
                desc: "Enjoy a user-friendly platform designed for traders of all levels."
              },
              {
                // 闪电图标
                icon: "fas fa-bolt",
                title: "Real-Time Signals",
                desc: "Stay ahead of the market with instant, data-driven trade alerts."
              },
              {
                // 手 图标
                icon: "fas fa-hand-holding-usd",
                title: "Comprehensive Support",
                desc: "Dedicated assistance and resources boost your trading journey."
              },

            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="text-xl text-black font-semibold mb-2">{feature.title}</h3>
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
              { number: "500+", label: "Traders Worldwide" },
              { number: "99%", label: "Signal Accuracy" },
              { number: "100+", label: "Trading Strategies" },
              { number: "95%", label: "User Retention Rate" },
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
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Start a New Trading Journey?</h2>
          <button
            className="bg-white text-indigo-600 px-8 py-3 text-lg font-medium !rounded-button whitespace-nowrap hover:bg-gray-100"
            onClick={gotoNBBIT}
          >
            Trade with NBBIT Now
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
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/24099f7a3ab3d2cdc798dd98208c5c96.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">About NBBIT</h1>
            <p className="text-xl">
              Redefining binary options trading with cutting-edge innovation, precision, and unmatched expertise.
            </p>
          </div>
        </div>
      </div>
      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-black">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At NBBIT, our mission is to empower traders worldwide with advanced tools, expert insights,
                and real-time strategies, enabling them to make confident decisions and achieve sustainable
                success in binary options trading.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a future where binary options trading is accessible, innovative, and empowering,
                setting new benchmarks for trust and performance while transforming financial opportunities
                for traders everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-black">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                // 奖杯图标
                icon: "fas fa-trophy",
                title: "Success",
                desc: "Empowering traders to achieve financial goals is always our priority"
              },
              {
                // 握手图标
                icon: "fas fa-handshake",
                title: "Integrity",
                desc: "Upholding transparency in every interaction to foster trust with our traders"
              },
              {
                // 灯泡图标
                icon: "fas fa-lightbulb",
                title: "Innovation",
                desc: "Enhancing tools and technology for exceptional trading experiences"
              },
              {
                // 小树苗图标
                icon: "fas fa-seedling",
                title: "Growth",
                desc: "Striving to evolve in the dynamic trading landscape constantly"
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
    </>
  );

  const renderFeatures = () => (
    <>
      {/* Story Hero Section */}
      <div className="relative h-[500px] mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://ai-public.mastergo.com/ai/img_res/05f37cb551a697646d89aac7d700ef52.jpg')`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">Our Features</h1>
            <p className="text-xl">
              Explore the powerful and unique features that make NBBIT the ideal platform for your trading success.
            </p>
          </div>
        </div>
      </div>
      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-black">
          <div className="space-y-24">
            {[
              {
                year: "Strategy Following",
                title: "Strategy Following",
                description: "Copy the trades of top-performing traders with a single click, and instantly replicate their successful strategies.",
                image: "https://ai-public.mastergo.com/ai/img_res/45ea116fdcbfd8d263fdb223e71b0e2f.jpg"
              },
              {
                year: "Trading Signals",
                title: "Trading Signals",
                description: "Receive real-time trading signals with high success rates, delivered directly to your dashboard for easy access.",
                image: "https://ai-public.mastergo.com/ai/img_res/137656da3fd1553b1f8b59e9cee9462c.jpg"
              },
              {
                year: "Expert Guidance",
                title: "Expert Guidance",
                description: "Get personalized professional insights and expert advice to make more informed and confident trading decisions.",
                image: "https://ai-public.mastergo.com/ai/img_res/9eb9e5ecc250f9a9abef5ca6ca80a70f.jpg"
              },
              {
                year: "Referral Program",
                title: "Referral Program",
                description: "Invite friends to join our trading platform and earn rewards through our comprehensive referral program.",
                image: "https://ai-public.mastergo.com/ai/img_res/c479e5f4e55a3c406d25056a069a3b63.jpg"
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
            <h1 className="text-5xl font-bold mb-6">Meet Our Experts</h1>
            <p className="text-xl">Expert traders dedicated to guiding you toward smarter and more successful
              trades.</p>
          </div>
        </div>
      </div>
      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-black">
          <h2 className="text-3xl font-bold text-center mb-16">Our Expert Trader Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                "name": "John Wilson",
                "role": "Binary Options & Forex Expert",
                "bio": "An expert in forex and binary options trading with 10+ years of experience in technical analysis and strategic insights.",
                "image": "/imgs/icon_john_wilson.png"
              },
              {
                "name": "Jane Smith",
                "role": "Crypto & Binary Options Specialist",
                "bio": "Specializes in cryptocurrency and binary options, blending blockchain knowledge with cutting-edge trading strategies.",
                "image": "/imgs/icon_jane_smith.jpg"
              },
              {
                "name": "Michael Williams",
                "role": "Forex & Metals Trading Expert",
                "bio": "Brings 15 years of expertise in forex and precious metals trading, leveraging macroeconomic trends and market insights.",
                "image": "/imgs/icon_michael_williams.png"
              },
              {
                "name": "Emily Johnson",
                "role": "Crypto & HFT Expert",
                "bio": "A high-frequency trading specialist who combines algorithmic strategies with a.tsx deep understanding of cryptocurrency markets.",
                "image": "/imgs/icon_emily_johnson.png"
              },
              {
                "name": "David Miller",
                "role": "Options & Futures Trading Expert",
                "bio": "Highly skilled in advanced options and futures strategies, with a.tsx focus on risk management, market volatility, and long-term profitability.",
                "image": "/imgs/icon_david_miller.jpg"
              },
              {
                "name": "Sophia Lee",
                "role": "Cryptocurrency & Blockchain Expert",
                "bio": "A blockchain and cryptocurrency expert specializing in tokenomics, DeFi platforms, digital asset trends, and decentralized finance strategies.",
                "image": "/imgs/icon_sophia_lee.png"
              },
              {
                "name": "Jack Turner",
                "role": "Commodities & Precious Metals Trader",
                "bio": "Veteran commodities trader with 18+ years of experience in precious metals and global economic market analysis.",
                "image": "/imgs/icon_jack_turner.jpg"
              },
              {
                "name": "Mark Davis",
                "role": "Equity & Stock Index Trading Expert",
                "bio": "Equity and stock index strategist with 16 years of expertise in market timing and technical analysis for major indices.",
                "image": "/imgs/icon_mark_davis.png"
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
    </>
  );

  const renderFooter = () => (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-row justify-between items-start gap-8 mb-12 px-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image src="/imgs/logo.jpg" alt="" width={28} height={28}/>
                <span className="text-xl font-semibold">NBBIT</span>
              </div>
              <p className="max-w-[220px] text-gray-400 mb-4">
                The Cutting-Edge Binary Options Trading Platform
              </p>
              <div className="flex gap-4">
                <a href={tgChannelUrl} className="text-gray-400 hover:text-white">
                  <i className="fab fa-telegram text-xl"></i>
                </a>
                {/*<a.tsx href="#" className="text-gray-400 hover:text-white">*/}
                {/*  <i className="fab fa-linkedin text-xl"></i>*/}
                {/*</a.tsx>*/}
                {/*<a.tsx href="#" className="text-gray-400 hover:text-white">*/}
                {/*  <i className="fab fa-github text-xl"></i>*/}
                {/*</a.tsx>*/}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('about');
                    }}
                    className="text-gray-400 hover:text-white"
                  >About Us</a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('features');
                    }}
                    className="text-gray-400 hover:text-white"
                  >Features</a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage('team');
                    }}
                    className="text-gray-400 hover:text-white"
                  >Team</a>
                </li>
              </ul>
            </div>
            {/*<div>*/}
            {/*  <h3 className="text-lg font-semibold mb-4">Resources</h3>*/}
            {/*  <ul className="space-y-3">*/}
            {/*    <li><a.tsx href="#" className="text-gray-400 hover:text-white">Documentation</a.tsx></li>*/}
            {/*    <li><a.tsx href="#" className="text-gray-400 hover:text-white">Help Center</a.tsx></li>*/}
            {/*    <li><a.tsx href="#" className="text-gray-400 hover:text-white">Privacy</a.tsx></li>*/}
            {/*    <li><a.tsx href="#" className="text-gray-400 hover:text-white">Terms</a.tsx></li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">© 2025 NBBIT All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );


  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}
      {currentPage === 'home' && renderHome()}
      {currentPage === 'about' && renderAbout()}
      {currentPage === 'features' && renderFeatures()}
      {currentPage === 'team' && renderTeam()}
      {renderFooter()}
    </div>
  );

}


