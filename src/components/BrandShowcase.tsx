import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { CinematicAppDemo } from './CinematicAppDemo';

export const BrandShowcase = () => {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="container-padding relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                                White-Label Branding
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                Your Brand. <br />
                                <span className="text-gradient-light">Everywhere.</span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                                From the sign on your door to the icon on their home screen. FitNexa runs in the background, making your gym look like a tech powerhouse.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    'Custom App Icon & Name',
                                    'Matching Color Themes',
                                    'Branded Member Portal',
                                    'Your Logo on Statements'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/onboarding"
                                className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors group"
                            >
                                Start Building Your Brand <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Demo */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[40px] blur-3xl -z-10" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <CinematicAppDemo />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
