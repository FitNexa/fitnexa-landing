import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    ArrowLeft, TrendingUp, Users,
    Zap,
    Rocket, Shield,
    ArrowRight, Award, Timer,
    Star, ChevronRight
} from 'lucide-react';
import { useGymTheme, useGymThemes } from '../data/gymThemes';

const GrowthPlaybook = () => {
    const { gymId } = useParams();
    const { t } = useTranslation();
    const themes = useGymThemes();
    // Always call hooks at top level
    const theme = useGymTheme(gymId);

    useEffect(() => {
        // Only apply theme styles if we are in a specific playbook view
        if (!gymId) return;

        const root = document.documentElement;
        root.style.setProperty('--brand-primary', theme.colors.primary);
        root.style.setProperty('--brand-secondary', theme.colors.secondary);
        root.style.setProperty('--brand-accent', theme.colors.accent);
        root.style.setProperty('--brand-background', theme.colors.background);
        root.style.setProperty('--brand-surface', theme.colors.surface);

        return () => {
            root.style.removeProperty('--brand-primary');
            root.style.removeProperty('--brand-secondary');
            root.style.removeProperty('--brand-accent');
            root.style.removeProperty('--brand-background');
            root.style.removeProperty('--brand-surface');
        };
    }, [theme, gymId]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'users': return Users;
            case 'trending': return TrendingUp;
            case 'dumbbell': return Star; // fallback
            case 'star': return Star;
            case 'timer': return Timer;
            case 'trophy': return Award;
            default: return Zap;
        }
    };

    // If no gymId, show the Experience Selector
    if (!gymId) {
        return (
            <div className="min-h-screen bg-slate-950 pt-32 pb-40 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]"
                        >
                            {t('growth_playbook.nexus_of_growth')}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter"
                        >
                            {t('growth_playbook.choose_experience_title_line1')} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t('growth_playbook.choose_experience_title_line2')}</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 font-bold"
                        >
                            {t('growth_playbook.choose_experience_desc')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.values(themes).map((theme, i) => (
                            <motion.div
                                key={theme.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/playbook/${theme.id}`}
                                    className="group relative block p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[48px] overflow-hidden hover:from-white/20 transition-all"
                                >
                                    <div className="bg-slate-900 rounded-[44px] p-12 h-full relative overflow-hidden transition-transform group-hover:scale-[0.99]">
                                        {/* Brand Specific Glow */}
                                        <div
                                            className="absolute -top-24 -right-24 w-64 h-64 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                                            style={{ backgroundColor: theme.colors.primary }}
                                        />

                                        <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                                            <div className="flex justify-between items-start">
                                                <div
                                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl"
                                                    style={{ backgroundColor: theme.colors.primary }}
                                                >
                                                    <Zap className="w-8 h-8 fill-current" />
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t('growth_playbook.playbook_tier')}</p>
                                                    <p className="text-xl font-black text-white">{t('growth_playbook.elite_tier_level', { level: i + 1 })}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-4xl font-black text-white mb-2 leading-none tracking-tighter">{theme.name}</h3>
                                                <p className="text-slate-400 font-bold">{t('growth_playbook.immersive_experience')}</p>
                                            </div>

                                            <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.accent }} />
                                                </div>
                                                <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                                                    {t('growth_playbook.open_blueprint')} <ChevronRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Use theme story metrics
    const playbookItems = theme.story ? theme.story.metrics : [];

    return (
        <div className="min-h-screen transition-colors duration-700" style={{ backgroundColor: theme.colors.background }}>
            <section className="relative pt-48 pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, ${theme.colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <Link to="/playbook" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] mb-12 opacity-40 hover:opacity-100 transition-opacity" style={{ color: theme.colors.secondary }}>
                            <ArrowLeft className="mr-3 w-4 h-4" /> {t('growth_playbook.switch_experience')}
                        </Link>

                        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full mb-10 border-2" style={{ borderColor: theme.colors.primary, color: theme.colors.primary }}>
                            <Zap className="w-4 h-4 fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{theme.name} {t('growth_playbook.edition')}</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-12" style={{ color: theme.colors.secondary }}>
                            {t('growth_playbook.title_line1')} <br /> <span className="text-brand-gradient">{t('growth_playbook.title_line2')}</span>
                        </h1>

                        <p className="text-2xl font-bold leading-relaxed max-w-2xl border-l-8 pl-10" style={{ borderColor: theme.colors.primary, color: theme.colors.secondary + 'CC' }}>
                            {t('growth_playbook.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {playbookItems.map((item, i) => {
                            const Icon = getIcon(item.iconType);
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[48px] border shadow-2xl transition-all hover:scale-105 group flex flex-col justify-center items-center text-center h-full"
                                    style={{ backgroundColor: theme.colors.surface, borderColor: theme.colors.primary + '1A' }}
                                >
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:rotate-6 transition-all" style={{ backgroundColor: theme.colors.primary }}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <p className="text-6xl font-black mb-2 tracking-tighter" style={{ color: theme.colors.primary }}>{item.val}</p>
                                    <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: theme.colors.secondary }}>{item.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-40 bg-slate-950 text-white relative overflow-hidden rounded-[80px_80px_0_0]">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(to bottom, ${theme.colors.primary}, transparent)` }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="flex-1 space-y-12">
                            <span className="font-black uppercase tracking-[0.4em] text-[10px]" style={{ color: theme.colors.primary }}>{t('growth_playbook.transformation')}</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                                {t('growth_playbook.chaos_to_empire_line1')} <br /> {t('growth_playbook.chaos_to_empire_line2')} <span style={{ color: theme.colors.primary }}>{t('growth_playbook.chaos_to_empire_line3')}</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-bold leading-relaxed italic border-l-4 pl-8" style={{ borderColor: theme.colors.primary }}>
                                "{theme.story?.challenge}"
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: theme.colors.primary + '33' }}>
                                        <Rocket className="w-6 h-6" style={{ color: theme.colors.primary }} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg mb-2">{t('growth_playbook.the_solution')}</h4>
                                        <p className="text-slate-500 font-bold">{theme.story?.solution}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: theme.colors.primary + '33' }}>
                                        <Shield className="w-6 h-6" style={{ color: theme.colors.primary }} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg mb-2">{t('growth_playbook.the_result')}</h4>
                                        <p className="text-slate-500 font-bold">{theme.story?.result}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full flex justify-center relative">
                            {/* Stylized Digital Ecosystem Mockups */}
                            <div className="relative w-full max-w-lg">
                                {/* Desktop Admin Mockup */}
                                <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-2xl p-4 relative z-10 w-[90%] ml-auto aspect-video flex flex-col">
                                    <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                        </div>
                                        <div className="h-2 w-20 bg-slate-800 rounded-full ml-2" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-4 gap-4">
                                        <div className="col-span-1 bg-slate-800/50 rounded-lg" />
                                        <div className="col-span-3 grid grid-rows-3 gap-3">
                                            <div className="row-span-1 grid grid-cols-3 gap-3">
                                                <div className="bg-slate-800/50 rounded-lg p-3">
                                                    <div className="w-4 h-4 rounded bg-slate-700 mb-2" style={{ backgroundColor: theme.colors.primary }} />
                                                    <div className="w-12 h-2 bg-slate-700 rounded" />
                                                </div>
                                                <div className="bg-slate-800/50 rounded-lg" />
                                                <div className="bg-slate-800/50 rounded-lg" />
                                            </div>
                                            <div className="row-span-2 bg-slate-800/50 rounded-lg relative overflow-hidden">
                                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/50 to-transparent" />
                                                {/* Chart Line */}
                                                <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none">
                                                    <path d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,20 L120,100 L0,100 Z" fill="url(#gradient)" opacity="0.2" />
                                                    <path d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,20" fill="none" stroke={theme.colors.primary} strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                                    <defs>
                                                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor={theme.colors.primary} />
                                                            <stop offset="100%" stopColor="transparent" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile App Mockup */}
                                <div className="absolute -bottom-12 -left-4 w-[140px] bg-slate-950 rounded-[32px] border-[6px] border-slate-800 shadow-2xl z-20 overflow-hidden aspect-[9/19]">
                                    <div className="absolute top-0 inset-x-0 h-6 bg-slate-950 z-30 flex justify-center">
                                        <div className="w-16 h-4 bg-slate-950 rounded-b-xl" />
                                    </div>
                                    <div className="h-full bg-slate-900 flex flex-col relative">
                                        {/* App Header */}
                                        <div className="h-20 p-4 flex flex-col justify-end relative overflow-hidden">
                                            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: theme.colors.primary }} />
                                            <div className="w-8 h-8 rounded-full bg-white/10 mb-2" />
                                        </div>
                                        {/* App Content */}
                                        <div className="flex-1 p-3 space-y-3">
                                            <div className="h-24 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden p-3">
                                                <div className="absolute top-0 right-0 p-2">
                                                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.primary }} />
                                                </div>
                                                <div className="w-16 h-4 bg-white/10 rounded mb-2" />
                                                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full w-2/3 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="aspect-square rounded-xl bg-white/5" />
                                                <div className="aspect-square rounded-xl bg-white/5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <h2 className="text-5xl font-black tracking-tighter" style={{ color: theme.colors.secondary }}>
                        Build Your <span style={{ color: theme.colors.primary }}>Empire</span> Today.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all text-white" style={{ backgroundColor: theme.colors.primary }}>
                            Consult the Architect
                        </button>
                        <Link to="/blog" className="px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border-2 hover:bg-slate-100 transition-all flex items-center justify-center gap-3" style={{ borderColor: theme.colors.secondary, color: theme.colors.secondary }}>
                            The Archives <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GrowthPlaybook;
