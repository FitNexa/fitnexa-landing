import { motion } from 'framer-motion';
import {
  Rocket, Shield, Smartphone, Monitor,
  Zap, Globe, ChevronRight, CheckCircle2,
  Users, BarChart3, Apple, Mail, ArrowRight,
  Menu, X
} from 'lucide-react';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900 italic">FitNexa</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#workflow" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">7-Min Digitization</a>
          <a href="#pricing" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 p-6 space-y-4 shadow-xl"
        >
          <a href="#" className="block text-lg font-bold text-slate-900">Features</a>
          <a href="#" className="block text-lg font-bold text-slate-900">7-Min Digitization</a>
          <a href="#" className="block text-lg font-bold text-slate-900">Pricing</a>
          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold">Get Started</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              The Future of Fitness Biz
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              Digitize Your Gym in <span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">7 Minutes.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              Transform your physical location into a high-tech powerhouse. We provide the mobile ecosystem, admin dashboards, and AI tools—your brand, our tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-[24px] font-black text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center group">
                Build My Gym App <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-[24px] font-black text-lg border-2 border-slate-100 hover:bg-slate-50 transition-all">
                See Live Demo
              </button>
            </div>
          </motion.div>

          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 opacity-60 grayscale scale-90 sm:scale-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by leading chains</p>
            <div className="h-6 w-px bg-slate-200" />
            <span className="font-black text-slate-400 italic text-xl">IRON TEMPLE</span>
            <span className="font-black text-slate-400 italic text-xl">FITLIFE</span>
            <span className="font-black text-slate-400 italic text-xl">ZONE 5</span>
          </div>
        </div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Visual Component: Dual Preview Mockup */}
          <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
            <div className="flex gap-4">
              {/* Smartphone Part */}
              <div className="w-[180px] h-[360px] bg-slate-900 rounded-[32px] p-2 relative overflow-hidden shrink-0 border-4 border-slate-800 shadow-xl hidden sm:block">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-full z-20" />
                <div className="w-full h-full bg-blue-50 relative">
                  <div className="p-4 pt-8">
                    <div className="w-full h-20 bg-blue-600 rounded-2xl mb-4 animate-pulse" />
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-slate-200 rounded-full" />
                      <div className="w-2/3 h-3 bg-slate-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop/Dashboard Part */}
              <div className="flex-1 bg-slate-50 rounded-[24px] overflow-hidden border border-slate-200 shadow-inner">
                <div className="h-8 bg-white border-b border-slate-100 flex items-center px-4 space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 h-32 bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <BarChart3 className="text-blue-600 w-5 h-5 mb-2" />
                      <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                      <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                    </div>
                    <div className="flex-1 h-32 bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                      <Users className="text-indigo-600 w-5 h-5 mb-2" />
                      <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                      <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                  <div className="w-full h-40 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
                    <Zap className="text-yellow-400 w-8 h-8 animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] -z-1" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-200/40 rounded-full blur-[100px] -z-1" />
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ iconPath, title, desc, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-md hover:shadow-2xl hover:border-blue-100 transition-all duration-300 group cursor-default"
  >
    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      {iconPath}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Nav />
      <Hero />

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Digitization Time', val: '7 min' },
            { label: 'User Retention', val: '+45%' },
            { label: 'Revenue Growth', val: 'x2.4' },
            { label: 'Active Gyms', val: '500+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black text-slate-900 mb-2">{stat.val}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6">Everything You Need to Dominate.</h2>
            <p className="text-lg text-slate-500 font-medium">Why settle for generic software? Get a custom-branded experience that actually drives member loyalty.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              iconPath={<Smartphone />}
              title="White-Label App"
              desc="Your brand on the App Store. Full theme control, custom icons, and premium UX that members love."
              delay={0.1}
            />
            <FeatureCard
              iconPath={<Apple />}
              title="AI Nutrition"
              desc="Integrated Gemini-powered food scanner. Members log meals via camera and track goals automatically."
              delay={0.2}
            />
            <FeatureCard
              iconPath={<Users />}
              title="Community Squads"
              desc="Social engagement via groups, leaderboards, and challenges. Members stay longer when they train together."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* The Magic Moment (Dual Preview) */}
      <section id="workflow" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <motion.div
                  className="glass-card bg-white/10 p-4 rounded-[40px] border-white/10 relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="grid grid-cols-7 gap-1 mb-8 opacity-40">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full ${i <= 3 ? 'bg-blue-400' : 'bg-white/20'}`} />
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-6 flex items-center">
                    <Zap className="text-blue-400 mr-2" /> Wizard Step 4: Branding
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                      <span className="text-sm font-bold">Primary Color</span>
                      <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white/20" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                      <span className="text-sm font-bold">Secondary Color</span>
                      <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white/20" />
                    </div>
                  </div>
                </motion.div>
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 bg-blue-600 p-6 rounded-[32px] shadow-2xl z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <span className="text-blue-400 font-black tracking-widest uppercase text-xs">The Magic Moment</span>
              <h2 className="text-5xl font-black mt-6 mb-8 leading-tight">Instant Digitization. No Code Required.</h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8">
                Our 7-step builder wizard lets you upload your logo, pick your colors, and toggle features like AI scanning or store management.
                Watch it go live on mobile and admin panels in real-time.
              </p>
              <ul className="space-y-4">
                {[
                  "Zero developer dependency",
                  "Instant real-time preview",
                  "Scalable cloud infrastructure",
                  "Enterprise-grade security"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300 font-bold">
                    <CheckCircle2 className="text-green-400 w-5 h-5 mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl font-black text-slate-900 mb-8 pb-1">Ready to scale your gym?</h2>
          <p className="text-xl text-slate-500 font-medium mb-12">Join 500+ premium gyms that upgraded their digital experience with FitNexa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-6 bg-blue-600 text-white rounded-[32px] font-black text-xl shadow-2xl shadow-blue-200 hover:scale-105 transition-all">
              Get a Custom Quote
            </button>
            <button className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 rounded-[32px] font-black text-xl hover:bg-slate-50 transition-all">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 border-4 border-blue-600 rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border-4 border-indigo-600 rotate-45" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 italic">FitNexa</span>
            </div>

            <div className="flex gap-12">
              <div className="space-y-4">
                <p className="text-sm font-black text-slate-900">Product</p>
                <ul className="text-xs font-bold text-slate-400 space-y-2">
                  <li><a href="#">Builder</a></li>
                  <li><a href="#">Mobile App</a></li>
                  <li><a href="#">Admin Panel</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-black text-slate-900">Company</p>
                <ul className="text-xs font-bold text-slate-400 space-y-2">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <Globe className="w-5 h-5 text-slate-400" />
                <Mail className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-xs font-bold text-slate-300">© 2026 FitNexa Ecosystem. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
