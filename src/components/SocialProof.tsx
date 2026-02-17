
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const SocialProof = () => {
    const { t } = useTranslation();

    const stories = [
        {
            id: 'irontemple',
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            name: "Iron Temple"
        },
        {
            id: 'greentheory',
            image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
            name: "Green Theory"
        },
        {
            id: 'fitlife',
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
            name: "FitLife"
        },
        {
            id: 'elite',
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
            name: "Elite Performance"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            {t('stories.title_line1')}
                        </span>{" "}
                        {t('stories.title_line2')}
                    </motion.h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        {t('stories.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-xl">
                                    <Quote className="w-8 h-8 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                                    <div className="flex gap-1 mt-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Challenge</p>
                                    <p className="text-slate-300 italic">"{t(`gym_themes.${story.id}_challenge`)}"</p>
                                </div>

                                <div className="w-full h-px bg-slate-700/50" />

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Solution</p>
                                        <p className="text-sm text-slate-400">{t(`gym_themes.${story.id}_solution`)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">Result</p>
                                        <p className="text-sm text-white font-medium">{t(`gym_themes.${story.id}_result`)}</p>
                                    </div>
                                </div>

                                <a
                                    href={`/playbook/${story.id}`}
                                    className="block w-full text-center py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Open Gym Experience
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
