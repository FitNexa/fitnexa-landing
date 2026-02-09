import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Users, Activity, Timer,
    Dumbbell, Star, ChevronRight,
    Layout, Smartphone, Monitor
} from 'lucide-react';

export const BrandPreview = () => {
    const [gymName, setGymName] = useState('Iron Temple');
    const [primaryColor, setPrimaryColor] = useState('#2563eb');
    const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop'>('mobile');

    return (
        <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="flex-1 space-y-12">
                        <div>
                            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Transformation Engine</span>
                            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
                                Your Brand. <br /> <span className="text-blue-500">Our Power.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-bold leading-relaxed max-w-xl">
                                The FitNexa "Chameleon" engine adapts instantly to your identity. Experience how your gym looks when professionalized with elite digital infrastructure.
                            </p>
                        </div>

                        <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 space-y-8 backdrop-blur-xl">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Facility Designation</label>
                                <input
                                    type="text"
                                    value={gymName}
                                    onChange={(e) => setGymName(e.target.value)}
                                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-5 font-black text-xl text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                                    placeholder="Enter Gym Name..."
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Brand Color DNA</label>
                                <div className="flex flex-wrap gap-4">
                                    {['#2563eb', '#dc2626', '#16a34a', '#9333ea', '#ea580c', '#0f172a'].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setPrimaryColor(color)}
                                            className={`w-14 h-14 rounded-2xl transition-all ${primaryColor === color ? 'scale-110 ring-4 ring-white shadow-2xl shadow-white/20' : 'hover:scale-105 opacity-60 hover:opacity-100'}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                    <div className="relative">
                                        <input
                                            type="color"
                                            value={primaryColor}
                                            onChange={(e) => setPrimaryColor(e.target.value)}
                                            className="w-14 h-14 opacity-0 absolute cursor-pointer"
                                        />
                                        <div className="w-14 h-14 rounded-2xl border-2 border-white/20 flex items-center justify-center font-black text-xs">
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
                                    <button
                                        onClick={() => setPreviewMode('mobile')}
                                        className={`p-3 rounded-lg transition-all ${previewMode === 'mobile' ? 'bg-white text-slate-900' : 'text-white hover:bg-white/10'}`}
                                    >
                                        <Smartphone className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setPreviewMode('desktop')}
                                        className={`p-3 rounded-lg transition-all ${previewMode === 'desktop' ? 'bg-white text-slate-900' : 'text-white hover:bg-white/10'}`}
                                    >
                                        <Monitor className="w-5 h-5" />
                                    </button>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center">
                                    <Activity className="mr-2 w-4 h-4 text-green-500 animate-pulse" /> Live Sync Active
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-2xl relative">
                        <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />

                        <motion.div
                            key={previewMode}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative z-10 mx-auto"
                        >
                            {previewMode === 'mobile' ? (
                                <div className="w-[320px] h-[640px] bg-slate-950 rounded-[60px] border-[12px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col mx-auto border-double relative">
                                    <div className="h-6 w-32 bg-slate-800 rounded-b-3xl mx-auto mb-2" />

                                    <div className="flex-1 overflow-y-auto bg-slate-50 text-slate-900 p-6 space-y-8 no-scrollbar scroll-smooth">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-black uppercase tracking-tighter" style={{ color: primaryColor }}>{gymName}</span>
                                            <div className="w-10 h-10 rounded-full bg-slate-200" />
                                        </div>

                                        <div className="space-y-4">
                                            <div className="p-6 rounded-3xl text-white shadow-xl flex flex-col justify-between h-40 group overflow-hidden relative" style={{ backgroundColor: primaryColor }}>
                                                <div className="relative z-10 flex justify-between items-start">
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Member Status</p>
                                                        <p className="text-2xl font-black">Elite Tier</p>
                                                    </div>
                                                    <Dumbbell className="w-8 h-8 opacity-40 group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div className="relative z-10 flex justify-between items-end">
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Points</p>
                                                        <p className="text-xl font-black">12,480</p>
                                                    </div>
                                                    <ChevronRight className="w-6 h-6" />
                                                </div>
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { label: 'Steps', val: '8,422', icon: Activity },
                                                { label: 'Time', val: '45m', icon: Timer }
                                            ].map((item, i) => (
                                                <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                                    <item.icon className="w-5 h-5 mb-2" style={{ color: primaryColor }} />
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                                    <p className="text-lg font-black leading-none">{item.val}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recommended Training</p>
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
                            ) : (
                                <div className="w-full bg-slate-50 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-200 flex flex-col aspect-video">
                                    <div className="h-14 bg-white border-b border-slate-100 px-8 flex items-center justify-between">
                                        <div className="flex items-center space-x-6">
                                            <span className="text-sm font-black uppercase tracking-tighter" style={{ color: primaryColor }}>{gymName} Elite</span>
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
                                        <main className="flex-1 p-10 space-y-10 overflow-y-auto scroll-smooth">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <h3 className="text-3xl font-black">Performance Dashboard</h3>
                                                    <p className="text-sm font-bold text-slate-400 mt-2 uppercase tracking-widest">{gymName} Operations Hub</p>
                                                </div>
                                                <button className="px-8 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-xl" style={{ backgroundColor: primaryColor }}>
                                                    Export Analytics
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-8">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
                                                        <div className="flex justify-between items-start">
                                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                                                                <Activity className="w-6 h-6" style={{ color: primaryColor }} />
                                                            </div>
                                                            <span className="text-green-500 font-black text-xs">↑ 12%</span>
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Metrics L{i}</p>
                                                            <p className="text-3xl font-black leading-none">84.2%</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-white rounded-[40px] border border-slate-100 p-10 h-64 shadow-sm relative overflow-hidden group">
                                                <div className="flex items-end gap-4 h-full relative z-10">
                                                    {[30, 60, 45, 90, 65, 30, 50, 40, 70, 55, 80, 50].map((h, i) => (
                                                        <div key={i} className="flex-1 rounded-t-xl transition-all duration-500 bg-slate-50 group-hover:opacity-80" style={{ height: `${h}%`, backgroundColor: i === 3 || i === 8 ? primaryColor : undefined }} />
                                                    ))}
                                                </div>
                                                <div className="absolute top-10 left-10">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Retention Curve</p>
                                                </div>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
