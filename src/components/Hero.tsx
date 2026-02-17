
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="relative overflow-hidden bg-slate-900 pt-32 pb-24 lg:pt-48 lg:pb-32">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            </div>

            <div className="container-padding relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md shadow-lg shadow-black/20"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-blue-300 font-medium text-xs sm:text-sm tracking-wide uppercase">
                                {t('hero.badge')}
                            </span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl/tight font-extrabold text-white tracking-tight mb-6">
                            {t('hero.title_highlight')} <br className="hidden lg:block" />
                            <span className="text-gradient-light">{t('hero.title_main')}</span>
                        </h1>

                        <p className="text-base lg:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                            <a
                                href={import.meta.env.VITE_ONBOARDING_URL || 'https://onboarding.uat.gymia.fit'}
                                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                            >
                                {t('hero.cta_start')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <button
                                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2 hover:border-white/20"
                            >
                                <Play className="w-5 h-5 fill-current" />
                                {t('hero.cta_demo')}
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8 text-slate-400 text-sm font-medium border-t border-white/5 pt-8">
                            <div className="flex items-center gap-2.5">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                <span>Bank-Grade Security</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Activity className="w-5 h-5 text-blue-500" />
                                <span>99.99% Uptime SLA</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                <span>24/7 Dedicated Support</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 w-full max-w-[500px] lg:max-w-none perspective-1000"
                    >
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

                            {/* Main Card */}
                            <div className="relative glass-card-dark rounded-2xl p-6 lg:p-8 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-900/20">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700/50">
                                    <div className="flex flex-col gap-1">
                                        <div className="h-2 w-24 bg-slate-700 rounded-full mb-1"></div>
                                        <div className="h-3 w-32 bg-slate-600 rounded-full"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                                        <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="h-2 w-2 rounded-full bg-emerald-500/50"></div>
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    {/* Stats Card 1 */}
                                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                                <Activity className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <span className="text-emerald-400 text-xs font-semibold">+12%</span>
                                        </div>
                                        <div className="h-6 w-16 bg-slate-700/50 rounded mb-1"></div>
                                        <div className="h-3 w-24 bg-slate-700/30 rounded"></div>
                                    </div>

                                    {/* Stats Card 2 */}
                                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="p-2 bg-indigo-500/10 rounded-lg">
                                                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                                            </div>
                                            <span className="text-emerald-400 text-xs font-semibold">Active</span>
                                        </div>
                                        <div className="h-6 w-12 bg-slate-700/50 rounded mb-1"></div>
                                        <div className="h-3 w-20 bg-slate-700/30 rounded"></div>
                                    </div>
                                </div>

                                {/* Chart Area */}
                                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 h-40 flex items-end gap-2">
                                    {[30, 45, 35, 60, 55, 75, 40].map((h, i) => (
                                        <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm hover:bg-blue-500/40 transition-colors relative group/bar" style={{ height: `${h}%` }}>
                                            <div className="absolute top-0 w-full h-1 bg-blue-500/50"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
