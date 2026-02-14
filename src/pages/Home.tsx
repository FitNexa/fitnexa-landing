import { motion } from 'framer-motion';
import {
    Users, ArrowRight,
    Dumbbell, Activity, Timer, Zap, Award
} from 'lucide-react';

import { Link } from 'react-router-dom'; import { BrandPreview } from '../components/BrandPreview';

const Hero = () => (
    <section className="relative pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-slate-900 text-white rounded-full mb-10 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 flex items-center">
                                <TrophyIcon className="w-3 h-3 mr-2" /> Iron-Clad Operations 2026
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-950 leading-[1] tracking-tighter mb-10">
                            Strength <span className="text-blue-600 block">in Data.</span>
                        </h1>
                        <p className="text-xl text-slate-600 font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12 border-l-4 border-blue-600 pl-6">
                            Transform your physical floor into a high-performance digital empire. Your brand, your members, your muscle—professionalized with FitNexa's elite digital infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a href={import.meta.env.VITE_ONBOARDING_URL || 'https://onboarding.uat.gymia.fit'} className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all flex items-center justify-center group shadow-2xl shadow-blue-200">
                                Start Your Build <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="w-full sm:w-auto px-12 py-5 bg-white text-slate-950 border-2 border-slate-950 rounded font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all">
                                The Blueprints
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
                    <div className="bg-slate-950 p-6 rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-slate-800">
                        <div className="bg-white rounded-[32px] overflow-hidden p-10 flex flex-col gap-8 shadow-inner">
                            <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Active Memberships</p>
                                    <p className="text-4xl font-black text-slate-950">14,842</p>
                                </div>
                                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl rotate-3">
                                    <Users className="text-white w-7 h-7" />
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="h-48 w-full bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col justify-between overflow-hidden">
                                    <div className="flex justify-between text-[10px] font-black text-slate-400 tracking-widest">
                                        <span>L1</span><span>L2</span><span>L3</span><span>L4</span><span>L5</span><span>L6</span><span>L7</span>
                                    </div>
                                    <div className="flex items-end gap-3 h-28 relative z-10">
                                        {[40, 60, 45, 90, 65, 30, 50].map((h, i) => (
                                            <div key={i} className="flex-1 bg-blue-600/10 rounded group-hover:bg-blue-600/30 transition-all" style={{ height: `${h}%` }} />
                                        ))}
                                        <div className="absolute top-0 right-[28%] w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                            <Activity className="text-white w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center text-[10px] font-black uppercase text-slate-400 tracking-tighter">
                                        <span className="flex items-center"><Timer className="w-3 h-3 mr-1" /> Peak Performance</span>
                                        <span className="text-blue-600">Sync Active</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <Dumbbell className="text-blue-600 w-8 h-8" />
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-[8px]">Growth</p>
                                        <p className="text-2xl font-black text-slate-950 leading-none">+22%</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <TrophyIcon className="text-yellow-500 w-8 h-8" />
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-[8px]">Retention</p>
                                        <p className="text-2xl font-black text-slate-950 leading-none">98.2%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const TrophyIcon = ({ className }: { className?: string }) => (
    <Award className={className} />
);

const BenefitCard = ({ icon: Icon, title, desc }: any) => (
    <div className="p-12 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all group relative overflow-hidden">
        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-10 group-hover:rotate-6 transition-all shadow-xl shadow-slate-200">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-500 font-bold leading-relaxed">{desc}</p>
        <div className="absolute -bottom-4 -right-4 opacity-[0.03] grayscale font-black text-9xl select-none group-hover:opacity-[0.05] transition-opacity">
            <Icon className="w-full h-full" />
        </div>
    </div>
);

const BenefitsGrid = () => (
    <section id="benefits" className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
                <div className="w-px h-12 bg-blue-600 mx-auto" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">Elite Facilities <br /> <span className="text-blue-600">Demands Modern Solutions.</span></h2>
                <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto pt-6">Ditch the legacy spreadsheets. FitNexa provides the iron-clad foundation your gym business needs to dominate the market.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <BenefitCard
                    icon={Dumbbell}
                    title="The Branded Core"
                    desc="Your logo, your colors, your rules. Launch a custom member app that carries the weight of your professional brand."
                />
                <BenefitCard
                    icon={Activity}
                    title="Automated Muscle"
                    desc="Stop the mechanical administrative work. Automate billing, staff scheduling, and member tracking with total precision."
                />
                <BenefitCard
                    icon={TrophyIcon}
                    title="Community Gold"
                    desc="Turn lone wolves into your gym's most loyal advocates with social leaderboards and iron-clad engagement tools."
                />
            </div>
        </div>
    </section>
);

const StoriesSection = () => (
    <section id="stories" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900">
                    Proof of <span className="text-blue-600">Dominance.</span>
                </h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                    See how top-tier facilities are using FitNexa to crush their competition.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Iron Temple */}
                <Link to="/playbook/irontemple" className="group relative h-[500px] rounded-[48px] overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-slate-900 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center transition-opacity duration-500 group-hover:opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                        <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                            <Dumbbell className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">Iron Temple</h3>
                        <p className="text-lg text-slate-300 font-bold mb-8 line-clamp-2">
                            "We didn't just survive the big box invasion. We crushed them."
                        </p>
                        <div className="flex items-center space-x-4 text-orange-400 font-black tracking-widest uppercase text-xs">
                            <span>View Playbook</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </Link>

                {/* Green Theory */}
                <Link to="/playbook/greentheory" className="group relative h-[500px] rounded-[48px] overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-black transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center transition-opacity duration-500 group-hover:opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                        <div className="w-16 h-16 rounded-xl bg-[#ccff00] flex items-center justify-center mb-6 shadow-lg shadow-[#ccff00]/20 group-hover:scale-110 transition-transform duration-300">
                            <Zap className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter text-[#ccff00]">Green Theory</h3>
                        <p className="text-lg text-slate-300 font-bold mb-8 line-clamp-2">
                            "High intensity beats high volume. We proved it with data."
                        </p>
                        <div className="flex items-center space-x-4 text-[#ccff00] font-black tracking-widest uppercase text-xs">
                            <span>View Playbook</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </Link>
            </div>

            <div className="text-center">
                <Link
                    to="/wall-of-fame"
                    className="inline-flex items-center space-x-4 px-12 py-6 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-800 transition-all group shadow-2xl shadow-slate-200"
                >
                    <span>View Wall of Fame</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-500" />
                </Link>
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <BrandPreview />
            <BenefitsGrid />
            <StoriesSection />
        </div>
    );
};

export default Home;
