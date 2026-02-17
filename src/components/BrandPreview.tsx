import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Users, Activity, Timer,
    Dumbbell, Star, ChevronRight,
    Layout, Smartphone, Monitor
} from 'lucide-react';
import { useGymTheme } from '../data/gymThemes';

export const BrandPreview = () => {
    const IRON_TEMPLE = useGymTheme('irontemple');
    const { t } = useTranslation();
    const [gymName, setGymName] = useState('Iron Temple');
    const [primaryColor, setPrimaryColor] = useState(IRON_TEMPLE.colors.primary);
    const [activeView, setActiveView] = useState<'mobile' | 'admin'>('mobile');

    return (
        <section className="py-24 lg:py-40 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-start">

                    {/* Left Column: Controls */}
                    <div className="flex-1 space-y-12 w-full lg:w-auto">
                        <div>
                            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{t('brand_preview.section_label')}</span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
                                {t('brand_preview.title_line1')} <br /> <span className="text-blue-500">{t('brand_preview.title_line2')}</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 font-bold leading-relaxed max-w-xl">
                                {t('brand_preview.description')}
                            </p>
                        </div>

                        <div className="p-8 lg:p-10 bg-white/5 rounded-[40px] border border-white/10 space-y-8 backdrop-blur-xl">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t('brand_preview.gym_name_label')}</label>
                                <input
                                    type="text"
                                    value={gymName}
                                    onChange={(e) => setGymName(e.target.value)}
                                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-5 font-black text-xl text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                                    placeholder={t('brand_preview.gym_name_placeholder')}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t('brand_preview.color_label')}</label>
                                <div className="flex flex-wrap gap-6">
                                    {[IRON_TEMPLE.colors.primary, '#2563eb', '#dc2626', '#16a34a', '#9333ea', '#ea580c', '#0f172a', '#00FF00'].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setPrimaryColor(color)}
                                            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl transition-all ${primaryColor === color ? 'scale-110 ring-4 ring-white shadow-2xl shadow-white/20' : 'hover:scale-105 opacity-60 hover:opacity-100'}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                    <div className="relative">
                                        <input
                                            type="color"
                                            value={primaryColor}
                                            onChange={(e) => setPrimaryColor(e.target.value)}
                                            className="w-12 h-12 lg:w-14 lg:h-14 opacity-0 absolute cursor-pointer"
                                        />
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border-2 border-white/20 flex items-center justify-center font-black text-xs">
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                                <a
                                    href={`${import.meta.env.VITE_ONBOARDING_URL || 'https://onboarding.uat.gymia.fit'}/onboard?gymName=${encodeURIComponent(gymName)}&primaryColor=${encodeURIComponent(primaryColor)}`}
                                    className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
                                >
                                    {t('brand_preview.cta')} <ChevronRight className="w-4 h-4" />
                                </a>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center justify-center">
                                    <Activity className="mr-2 w-4 h-4 text-green-500 animate-pulse" /> {t('brand_preview.live_sync')}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Preview Area */}
                    <div className="flex-1 w-full max-w-4xl relative flex flex-col items-center">
                        <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

                        {/* View Toggle */}
                        <div className="bg-slate-800/80 p-1.5 rounded-xl flex items-center gap-1 mb-10 border border-white/10 backdrop-blur-md relative z-20 shadow-2xl">
                            <button
                                onClick={() => setActiveView('mobile')}
                                className={`px-6 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${activeView === 'mobile' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <Smartphone className="w-4 h-4" />
                                {t('brand_preview.mobile_view', 'Mobile App')}
                            </button>
                            <button
                                onClick={() => setActiveView('admin')}
                                className={`px-6 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${activeView === 'admin' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <Monitor className="w-4 h-4" />
                                {t('brand_preview.admin_view', 'Gym Admin')}
                            </button>
                        </div>

                        <div className="relative w-full flex justify-center min-h-[600px] z-10">
                            <AnimatePresence mode="wait">
                                {activeView === 'mobile' ? (
                                    /* Preview Phone - Mobile App */
                                    <motion.div
                                        key="mobile"
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <div className="w-[280px] h-[580px] bg-slate-950 rounded-[50px] border-[10px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border-double relative ring-1 ring-white/10">
                                            <div className="h-6 w-32 bg-slate-800 rounded-b-3xl mx-auto mb-2" />

                                            <div className="flex-1 overflow-y-auto bg-slate-50 text-slate-900 p-6 space-y-8 no-scrollbar scroll-smooth">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xl font-black uppercase tracking-tighter" style={{ color: primaryColor }}>{gymName}</span>
                                                    <div className="w-10 h-10 rounded-full bg-slate-200" />
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="p-6 rounded-3xl text-white shadow-xl flex flex-col justify-between h-40 group overflow-hidden relative transition-colors duration-300" style={{ backgroundColor: primaryColor }}>
                                                        <div className="relative z-10 flex justify-between items-start">
                                                            <div>
                                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{t('brand_preview_preview.member_status')}</p>
                                                                <p className="text-2xl font-black">{t('brand_preview_preview.elite_tier')}</p>
                                                            </div>
                                                            <Dumbbell className="w-8 h-8 opacity-40 group-hover:scale-110 transition-transform" />
                                                        </div>
                                                        <div className="relative z-10 flex justify-between items-end">
                                                            <div>
                                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{t('brand_preview_preview.points')}</p>
                                                                <p className="text-xl font-black">12,480</p>
                                                            </div>
                                                            <ChevronRight className="w-6 h-6" />
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    {[
                                                        { label: t('brand_preview_preview.steps'), val: '8,422', icon: Activity },
                                                        { label: t('brand_preview_preview.time'), val: '45m', icon: Timer }
                                                    ].map((item, i) => (
                                                        <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                                            <item.icon className="w-5 h-5 mb-2" style={{ color: primaryColor }} />
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                                            <p className="text-lg font-black leading-none">{item.val}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('brand_preview_preview.recommended_training')}</p>
                                                    <div className="space-y-3">
                                                        {[1, 2, 3].map(i => (
                                                            <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-4 group cursor-pointer hover:border-slate-300 transition-all">
                                                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                                                                    <Dumbbell className="w-6 h-6 text-slate-300 group-hover:text-slate-900 transition-colors" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="h-2 w-24 bg-slate-100 rounded-full mb-2 overflow-hidden">
                                                                        <div className="h-full group-hover:bg-slate-300 transition-all" style={{ width: i === 1 ? '80%' : i === 2 ? '40%' : '60%', backgroundColor: i === 1 ? primaryColor : undefined }} />
                                                                    </div>
                                                                    <div className="h-2 w-16 bg-slate-50 rounded-full" />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="h-20 bg-white border-t border-slate-100 px-6 flex items-center justify-between">
                                                {[Layout, Activity, Users, Star].map((Icon, i) => (
                                                    <Icon key={i} className={`w-6 h-6 ${i === 0 ? '' : 'text-slate-300'}`} style={i === 0 ? { color: primaryColor } : {}} />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    /* Preview Gym Admin - Desktop Dashboard */
                                    <motion.div
                                        key="admin"
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-center gap-4 w-full max-w-2xl px-4"
                                    >
                                        <div className="w-full bg-slate-50 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-200 flex flex-col aspect-video min-h-[400px] ring-1 ring-white/10">
                                            <div className="h-14 bg-white border-b border-slate-100 px-6 sm:px-8 flex items-center justify-between">
                                                <div className="flex items-center space-x-6">
                                                    <span className="text-sm font-black uppercase tracking-tighter" style={{ color: primaryColor }}>{gymName} {t('brand_preview_preview.elite_suffix')}</span>
                                                    <div className="h-4 w-px bg-slate-200" />
                                                    <div className="flex space-x-4">
                                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }} />
                                                        <div className="w-3 h-3 rounded-full bg-slate-100" />
                                                        <div className="w-3 h-3 rounded-full bg-slate-100" />
                                                    </div>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-slate-100" />
                                            </div>

                                            <div className="flex-1 flex overflow-hidden">
                                                <aside className="w-64 bg-white border-r border-slate-100 p-8 space-y-8 hidden md:block">
                                                    {[1, 2, 3, 4].map(i => (
                                                        <div key={i} className="flex items-center space-x-4">
                                                            <div className={`w-5 h-5 rounded ${i === 1 ? '' : 'bg-slate-100'}`} style={i === 1 ? { backgroundColor: primaryColor } : {}} />
                                                            <div className="h-3 w-24 bg-slate-50 rounded" />
                                                        </div>
                                                    ))}
                                                </aside>
                                                <main className="flex-1 p-6 sm:p-10 space-y-8 sm:space-y-10 overflow-y-auto scroll-smooth">
                                                    <div className="flex justify-between items-end">
                                                        <div>
                                                            <h3 className="text-2xl sm:text-3xl font-black">{t('brand_preview_preview.performance_dashboard')}</h3>
                                                            <p className="text-xs sm:text-sm font-bold text-slate-400 mt-2 uppercase tracking-widest">{gymName} {t('brand_preview_preview.operations_hub')}</p>
                                                        </div>
                                                        <button type="button" className="hidden sm:block px-8 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-xl transition-colors duration-300" style={{ backgroundColor: primaryColor }}>
                                                            {t('brand_preview_preview.export_analytics')}
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-4 sm:gap-8">
                                                        {[1, 2, 3].map(i => (
                                                            <div key={i} className="p-4 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
                                                                <div className="flex justify-between items-start">
                                                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                                                                        <Activity className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
                                                                    </div>
                                                                    <span className="text-green-500 font-black text-[10px] sm:text-xs">↑ 12%</span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{t('brand_preview_preview.metrics', { num: i })}</p>
                                                                    <p className="text-xl sm:text-3xl font-black leading-none">84.2%</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="bg-white rounded-[40px] border border-slate-100 p-6 sm:p-10 h-64 shadow-sm relative overflow-hidden group">
                                                        <div className="flex items-end gap-2 sm:gap-4 h-full relative z-10">
                                                            {[30, 60, 45, 90, 65, 30, 50, 40, 70, 55, 80, 50].map((h, i) => (
                                                                <div key={i} className="flex-1 rounded-t-xl transition-all duration-500 bg-slate-50 group-hover:opacity-80" style={{ height: `${h}%`, backgroundColor: i === 3 || i === 8 ? primaryColor : undefined }} />
                                                            ))}
                                                        </div>
                                                        <div className="absolute top-6 left-6 sm:top-10 sm:left-10">
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('brand_preview_preview.retention_curve')}</p>
                                                        </div>
                                                    </div>
                                                </main>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
