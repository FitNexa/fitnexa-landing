import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Palette, Play, Settings, Download, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        {
            id: 'step1',
            icon: Palette,
            title: 'how_it_works.step1_title',
            desc: 'how_it_works.step1_desc'
        },
        {
            id: 'step2',
            icon: Play,
            title: 'how_it_works.step2_title',
            desc: 'how_it_works.step2_desc'
        },
        {
            id: 'step3',
            icon: Settings,
            title: 'how_it_works.step3_title',
            desc: 'how_it_works.step3_desc'
        },
        {
            id: 'step4',
            icon: Download,
            title: 'how_it_works.step4_title',
            desc: 'how_it_works.step4_desc'
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container-padding relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        <span className="text-blue-500">{t('how_it_works.title')}</span> <span className="text-white">{t('how_it_works.title2')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400"
                    >
                        {t('how_it_works.subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 h-full flex flex-col">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0 relative z-10">
                                    <step.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-center lg:text-left">{t(step.title)}</h3>
                                <p className="text-slate-400 leading-relaxed text-center lg:text-left text-sm">{t(step.desc)}</p>

                                {/* Step Number Background */}
                                <div className="absolute top-4 right-4 text-6xl font-black text-white/5 pointer-events-none select-none">
                                    0{index + 1}
                                </div>
                            </div>

                            {/* Mobile Connector */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden flex justify-center py-4">
                                    <ArrowRight className="w-6 h-6 text-slate-600 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="/onboarding"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {t('how_it_works.cta')}
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                        href="/experience"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {t('how_it_works.cta_experience')}
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
