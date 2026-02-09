import { motion } from 'framer-motion';
import {
  Globe, Users, ArrowRight, Layers,
  Menu, X, Building2,
  Clock, Heart, Star,
  TrendingUp, Award, MessageSquare, BookOpen
} from 'lucide-react';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
            <Building2 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">FitNexa <span className="text-blue-600">Enterprise</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#benefits" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">How it Works</a>
          <a href="#stories" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Success Stories</a>
          <a href="#blog" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Insights</a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 p-6 space-y-4 shadow-xl"
        >
          <a href="#benefits" className="block text-base font-semibold text-slate-900">How it Works</a>
          <a href="#stories" className="block text-base font-semibold text-slate-900">Success Stories</a>
          <a href="#blog" className="block text-base font-semibold text-slate-900">Insights</a>
          <button className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold">Inquire Now</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-8">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Built for Gym Chains</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Run Your Entire Gym <br /> <span className="text-blue-600">In One Place.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              Transform your physical gym into a high-end digital business. Your own branded app, easy member management, and more profit—all simplified for owners who value results.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center group shadow-xl shadow-slate-200">
                Book a Free Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                See Pricing
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-4 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
            <div className="bg-slate-50 rounded-[32px] overflow-hidden p-8 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Members</p>
                  <p className="text-3xl font-black text-slate-900">12,450</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="h-40 w-full bg-white rounded-2xl border border-slate-100 p-4 flex flex-col justify-between">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                </div>
                <div className="flex items-end gap-2 h-20">
                  {[40, 60, 45, 90, 65, 30, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-100 rounded-t-sm hover:bg-blue-600 transition-colors" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Growth</p>
                  <p className="text-lg font-black text-green-500">+12%</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Retention</p>
                  <p className="text-lg font-black text-blue-600">94%</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const BenefitCard = ({ icon: Icon, title, desc }: any) => (
  <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const BenefitsGrid = () => (
  <section id="benefits" className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Built for Success. Simplified for You.</h2>
        <p className="text-lg text-slate-600 font-medium">Stop juggling ten different tools. FitNexa gives you everything you need to grow your gym and keep your members happy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BenefitCard
          icon={Star}
          title="Your Own Branded App"
          desc="Get your gym logo on your members' phones. A premium digital experience that makes your brand stand out."
        />
        <BenefitCard
          icon={Clock}
          title="Automate Your Daily Tasks"
          desc="Stop wasting hours on paperwork. Manage memberships, payments, and staff schedules with just a few clicks."
        />
        <BenefitCard
          icon={Heart}
          title="Keep Members Longer"
          desc="Use our community tools and progress tracking to make sure your members stay motivated and stay with you."
        />
      </div>
    </div>
  </section>
);

const StoriesSection = () => (
  <section id="stories" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4 block">Proven Performance</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all">Business Transformation Stories.</h2>
        <p className="text-lg text-slate-500 font-medium">We don't just provide software; we provide the foundation for your gym's growth. See how these owners achieved institutional success.</p>
      </div>

      <div className="space-y-16">
        {[
          {
            club: "Iron Temple Global",
            location: "Multi-Location (8 clubs)",
            owner: "Marcus V.",
            metrics: [
              { label: "Retention", val: "+42%", icon: <Users className="w-4 h-4" /> },
              { label: "Revenue", val: "x2.4", icon: <TrendingUp className="w-4 h-4" /> },
              { label: "Staff Efficiency", val: "+60%", icon: <Clock className="w-4 h-4" /> }
            ],
            challenge: "Struggling with fragmented data across 8 locations and a manual entry system that drove staff burnout and member dissatisfaction.",
            solution: "Implemented FitNexa Global Governance, centralizing all member data and launching a unified high-end branded mobile app for all 8 clubs.",
            result: "Unified operations led to a 42% spike in retention and allowed the owner to open 2 new locations without increasing administrative headcount.",
            icon: <Award className="text-yellow-500" />
          },
          {
            club: "Elite Performance Lab",
            location: "Boutique Studio",
            owner: "Sarah J.",
            metrics: [
              { label: "PT Bookings", val: "+85%", icon: <Star className="w-4 h-4" /> },
              { label: "Admin Save", val: "120h/mo", icon: <Layers className="w-4 h-4" /> },
              { label: "Member LTV", val: "+30%", icon: <TrendingUp className="w-4 h-4" /> }
            ],
            challenge: "Premium pricing was hard to justify without a premium digital experience. Personal training management was handled via WhatsApp and paper.",
            solution: "Deployed the FitNexa 'Chameleon' app with automated PT scheduling and a dedicated social loyalty squad system for high-tier members.",
            result: "Professionalized the brand instantly. PT bookings doubled within the first quarter and member lifetime value increased by 30%.",
            icon: <TrendingUp className="text-green-500" />
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-12 p-8 lg:p-16 bg-slate-50 rounded-[48px] border border-slate-100 relative overflow-hidden ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 space-y-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">{item.club}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {item.metrics.map((m, mi) => (
                  <div key={mi} className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center">
                    <div className="text-blue-600 mb-2">{m.icon}</div>
                    <p className="text-xl font-black text-slate-900">{m.val}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="pl-4 border-l-2 border-slate-200">
                  <p className="text-xs font-black text-slate-400 uppercase mb-2">The Challenge</p>
                  <p className="text-slate-600 font-medium leading-relaxed italic">"{item.challenge}"</p>
                </div>
                <div className="pl-4 border-l-2 border-slate-900">
                  <p className="text-xs font-black text-slate-900 uppercase mb-2">The Solution</p>
                  <p className="text-slate-900 font-bold leading-relaxed">{item.solution}</p>
                </div>
                <div className="pl-4 border-l-2 border-blue-600 bg-blue-50/50 py-3 rounded-r-lg">
                  <p className="text-xs font-black text-blue-600 uppercase mb-1">The Result</p>
                  <p className="text-blue-900 font-black leading-relaxed">{item.result}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center lg:items-end">
              <div className="relative group cursor-pointer max-w-sm">
                <div className="absolute inset-0 bg-blue-600 rounded-[32px] rotate-3 group-hover:rotate-6 transition-transform -z-1 opacity-10" />
                <div className="bg-white p-8 rounded-[32px] shadow-xl border border-slate-100 text-center space-y-6 group-hover:scale-[1.02] transition-all">
                  <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                    <Users className="absolute inset-0 m-auto text-slate-400 w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-lg">{item.owner}</p>
                    <p className="text-slate-400 font-bold text-sm">Founder @ {item.club}</p>
                  </div>
                  <p className="text-slate-500 font-medium text-sm italic leading-relaxed">
                    "FitNexa turned my gym from a physical hustle into a digital powerhouse. The ROI was visible in 30 days."
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle aesthetic element */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-[120px]" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section id="blog" className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic underline decoration-blue-100 underline-offset-8">Owner Insights.</h2>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Practical advice on growing your gym, managing staff, and keeping members happy in the digital age.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "5 Ways to Stop Member Churn Before it Starts",
            category: "Retention",
            readTime: "6 min read",
            icon: <MessageSquare />
          },
          {
            title: "Digital vs. Physical: Finding the Balance in 2026",
            category: "Strategy",
            readTime: "8 min read",
            icon: <Globe />
          },
          {
            title: "Automating Your Member Check-In Experience",
            category: "Operations",
            readTime: "4 min read",
            icon: <BookOpen />
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl transition-all group flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                {item.title}
              </h3>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mt-8">
              <span className="flex items-center gap-1">{item.icon} {item.readTime}</span>
              <span className="text-blue-600 flex items-center group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4 ml-1" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="contact" className="py-40 bg-slate-900 text-white overflow-hidden relative">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Level Up Your Gym?</h2>
      <p className="text-xl text-slate-400 font-medium mb-12">Join hundreds of successful owners who chose FitNexa to run their fitness empire.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-12 py-6 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
          Get Your Custom Quote
        </button>
        <button className="px-12 py-6 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
          Talk to Our Experts
        </button>
      </div>
    </div>
    {/* Decorative circles */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-white rounded-full translate-x-[-50%] translate-y-[-50%]" />
      <div className="absolute top-1/2 left-3/4 w-[500px] h-[500px] border border-white rounded-full translate-x-[-50%] translate-y-[-50%]" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Building2 className="text-slate-900 w-6 h-6" />
          <span className="text-lg font-bold text-slate-900 uppercase tracking-tighter">FitNexa <span className="text-blue-600">Enterprise</span></span>
        </div>
        <p className="text-sm font-medium text-slate-400 max-w-xs leading-relaxed">
          Simplifying the digital gym for owners who value results and member loyalty.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
        <div className="space-y-4">
          <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Platform</p>
          <ul className="text-sm font-bold text-slate-400 space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">How it Works</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Company</p>
          <ul className="text-sm font-bold text-slate-400 space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Industry</p>
          <ul className="text-sm font-bold text-slate-400 space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">For Franchises</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">API Dashboard</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">© 2026 FitNexa Systems Inc. All rights reserved.</p>
      <div className="flex space-x-6 text-slate-300">
        <Globe className="w-5 h-5 hover:text-blue-600 transition-colors" />
        <Star className="w-5 h-5 hover:text-blue-600 transition-colors" />
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="bg-white font-inter selection:bg-blue-100 select-none antialiased">
      <Nav />
      <Hero />
      <BenefitsGrid />
      <StoriesSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
