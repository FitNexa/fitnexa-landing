
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTASection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-blue-600 rounded-3xl p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-900/20"
                    >
                        {/* Background Circles */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                                {t('cta_section.title')}
                            </h2>
                            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                                {t('cta_section.subtitle')}
                            </p>

                            <a
                                href={import.meta.env.VITE_ONBOARDING_URL || 'https://onboarding.uat.gymia.fit'}
                                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 group"
                            >
                                {t('cta_section.cta_button')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <div className="mt-10 flex items-center justify-center gap-6 text-blue-200 text-sm">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                                </div>
                                <span>Rated 4.9/5 by Gym Owners</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
