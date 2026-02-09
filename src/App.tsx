import { motion } from 'framer-motion';
import {
  ShieldCheck, Smartphone, Layers,
  BarChart3, Globe, Users, ArrowRight,
  Menu, X, Check, Lock, Database, Code2
} from 'lucide-react';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
            <Layers className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">FitNexa</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#platform" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Platform</a>
          <a href="#enterprise" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Enterprise</a>
          <a href="#security" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Security</a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all">
            Talk to Sales
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
          className="md:hidden bg-white border-b border-slate-200 p-6 space-y-4"
        >
          <a href="#platform" className="block text-base font-semibold text-slate-900">Platform</a>
          <a href="#enterprise" className="block text-base font-semibold text-slate-900">Enterprise</a>
          <a href="#security" className="block text-base font-semibold text-slate-900">Security</a>
          <button className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold">Talk to Sales</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-32">
    <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full mb-8">
              <span className="flex w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.1em]">Enterprise Platform 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
              Digital Infrastructure for <span className="text-blue-600">Enterprise Fitness.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12">
              FitNexa provides high-performance, white-labeled mobile and web ecosystems. Deploy your custom digital infrastructure to thousands of locations with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-base hover:bg-slate-800 transition-all flex items-center justify-center group shadow-lg">
                Schedule Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-base hover:bg-slate-50 transition-all">
                Download Technical Brief
              </button>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-x-12 gap-y-6 opacity-40">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industry Standard Compliance</span>
              <div className="flex items-center space-x-2"><Lock className="w-4 h-4" /><span className="text-sm font-black uppercase">GDPR Ready</span></div>
              <div className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4" /><span className="text-sm font-black uppercase">ISO-27001</span></div>
              <div className="flex items-center space-x-2"><Database className="w-4 h-4" /><span className="text-sm font-black uppercase">SOC2 Type II</span></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 w-full max-w-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative p-3 bg-slate-100 rounded-[32px] shadow-2xl overflow-hidden">
            <div className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-sm relative lg:aspect-[4/3] aspect-video">
              {/* Professional Dashboard Mockup */}
              <div className="h-full w-full bg-slate-50 flex flex-col">
                <div className="h-12 bg-white border-b border-slate-100 flex items-center px-6 justify-between">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-6 w-32 bg-slate-50 rounded-md border border-slate-100" />
                </div>
                <div className="flex-1 p-8 grid grid-cols-12 gap-6">
                  <div className="col-span-12 h-32 bg-white rounded-xl border border-slate-200 p-6">
                    <div className="w-24 h-2 bg-blue-600/20 rounded-full mb-4" />
                    <div className="flex items-end space-x-2">
                      <div className="w-full h-12 bg-blue-50 rounded-lg flex items-end px-2 space-x-1">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="flex-1 bg-blue-600/30 rounded-t" style={{ height: `${20 + Math.random() * 80}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 h-40 bg-white rounded-xl border border-slate-200 p-6">
                    <div className="w-20 h-2 bg-slate-200 rounded-full mb-6" />
                    <div className="space-y-3">
                      <div className="w-full h-2.5 bg-slate-50 rounded-full" />
                      <div className="w-full h-2.5 bg-slate-50 rounded-full" />
                      <div className="w-2/3 h-2.5 bg-slate-50 rounded-full" />
                    </div>
                  </div>
                  <div className="col-span-4 h-40 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full border-4 border-slate-50 border-t-blue-600 flex items-center justify-center">
                      <span className="text-sm font-bold">98%</span>
                    </div>
                    <div className="w-12 h-1.5 bg-slate-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            {/* High-Impact Label */}
            <div className="absolute top-8 -right-4 bg-slate-900 text-white px-5 py-2 rounded-lg text-xs font-bold shadow-xl">
              v2.4.0 Deployment Active
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const PlatformSection = () => (
  <section id="platform" className="py-32 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <BarChart3 className="w-10 h-10 text-blue-600 mb-6" />
          <h3 className="text-xl font-bold text-slate-900 mb-4 transition-all">Operational Efficiency</h3>
          <p className="text-slate-600 leading-relaxed font-medium">Unified management for scheduling, payment processing, and staff coordination across global facilities.</p>
        </div>
        <div>
          <Smartphone className="w-10 h-10 text-blue-600 mb-6" />
          <h3 className="text-xl font-bold text-slate-900 mb-4 transition-all">White-Labeled Ecosystem</h3>
          <p className="text-slate-600 leading-relaxed font-medium">Fully customizable mobile experiences that preserve brand identity while delivering high-end technical performance.</p>
        </div>
        <div>
          <Users className="text-blue-600 w-10 h-10 mb-6" />
          <h3 className="text-xl font-bold text-slate-900 mb-4 transition-all">Lifecycle Management</h3>
          <p className="text-slate-600 leading-relaxed font-medium">Advanced retention algorithms and community tools designed to decrease member churn by up to 35%.</p>
        </div>
      </div>
    </div>
  </section>
);

const EnterpriseSection = () => (
  <section id="enterprise" className="py-32 bg-slate-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Enterprise Deployment</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-10 leading-tight">Scale Without Complexity.</h2>

          <div className="space-y-8">
            {[
              { icon: <Database />, title: "Headless API Access", desc: "Integrate FitNexa core into your existing ERP or CRM systems via our robust GraphQL API." },
              { icon: <Globe />, title: "Multi-Region Support", desc: "Seamless localized experiences for global chains across various languages and regulations." },
              { icon: <ShieldCheck />, title: "Granular Permissions", desc: "Manage corporate-level access and facility-specific staff roles with ease." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-lg border border-white/5 rounded-full p-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[60%] h-[60%] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_50px_-5px_rgba(37,99,235,0.5)]">
                <Layers className="text-white w-10 h-10" />
              </div>
            </div>
            {/* Orbital Icons */}
            {[Users, Database, Code2, Globe].map((Icon, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  top: `${50 - 45 * Math.sin(i * Math.PI / 2)}%`,
                  left: `${50 + 45 * Math.cos(i * Math.PI / 2)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 backdrop-blur-sm shadow-xl">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SecuritySection = () => (
  <section id="security" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 italic">Secure by Design.</h2>
        <p className="text-lg text-slate-600 font-medium">Institutional-grade security protecting member data for the world's largest fitness providers.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Lock />, title: "Data Privacy", desc: "Full GDPR, CCPA, and LGPD compliance built natively into every layer." },
          { icon: <ShieldCheck />, title: "Access Control", desc: "SSO (Okta/Azure AD) integration for streamlined enterprise staff access." },
          { icon: <Database />, title: "Data Isolation", desc: "Dedicated instance options for maximum data security and separation." },
          { icon: <Check />, title: "Uptime SLA", desc: "99.99% uptime guarantee backed by geo-redundant infrastructure." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
            <div className="w-10 h-10 text-slate-900 mb-6">{item.icon}</div>
            <h4 className="text-base font-bold text-slate-900 mb-3">{item.title}</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-slate-50 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="space-y-6 max-w-xs">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Layers className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">FitNexa</span>
          </div>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            The standard in digital infrastructure for the global fitness enterprise.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-900">Solutions</p>
            <ul className="text-sm font-semibold text-slate-500 space-y-2.5">
              <li><a href="#" className="hover:text-slate-900 transition-colors">B2B Core</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Digital App</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">API Console</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-900">Enterprise</p>
            <ul className="text-sm font-semibold text-slate-500 space-y-2.5">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-900">Legal</p>
            <ul className="text-sm font-semibold text-slate-500 space-y-2.5">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs font-bold text-slate-400">© 2026 FitNexa Systems Inc. All rights reserved.</p>
        <div className="flex space-x-6">
          <Globe className="w-5 h-5 text-slate-400" />
          <span className="text-xs font-bold text-slate-400">Made in Global Connectivity</span>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <PlatformSection />
      <EnterpriseSection />
      <SecuritySection />

      {/* High-Level Conversion Section */}
      <section className="py-32 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Enterprise Scaling Start Here.</h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-12">Connect with our solutions architects to build your custom deployment plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Get a Custom Quote
            </button>
            <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Book Technical Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
