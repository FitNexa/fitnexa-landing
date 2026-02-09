import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { GYM_THEMES } from '../data/gymThemes';

const WallOfFame = () => {
    return (
        <div className="bg-slate-950 min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter"
                    >
                        Wall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Fame.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 font-bold"
                    >
                        The founders who refused average. The gyms that became empires.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.values(GYM_THEMES).map((theme, i) => (
                        <motion.div
                            key={theme.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <Link to={`/playbook/${theme.id}`} className="block">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[48px] -z-10 group-hover:scale-[1.02] transition-transform duration-500" />
                                <div className="bg-slate-900 border border-white/10 rounded-[46px] p-10 h-full flex flex-col justify-between overflow-hidden relative">

                                    {/* Brand Color Glow */}
                                    <div
                                        className="absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"
                                        style={{ backgroundColor: theme.colors.primary }}
                                    />

                                    <div>
                                        <div className="flex justify-between items-start mb-8">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
                                                style={{ backgroundColor: theme.colors.primary }}
                                            >
                                                <Trophy className="w-8 h-8 fill-current text-white/50" />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Location</p>
                                                <p className="text-white font-bold">{theme.story.location}</p>
                                            </div>
                                        </div>

                                        <h2 className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                            {theme.name}
                                        </h2>
                                        <p className="text-slate-400 font-bold mb-8">
                                            Founder: <span className="text-white">{theme.story.owner}</span>
                                        </p>

                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {theme.story.metrics.map((m, idx) => (
                                                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                                                    <p className="text-2xl font-black text-white mb-1">{m.val}</p>
                                                    <p className="text-[10px] uppercase tracking-widest text-slate-500">{m.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                                        View Experience <ArrowRight className="w-4 h-4 text-blue-500" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WallOfFame;
