
import { useTranslation } from 'react-i18next';
import { Users, CreditCard, Lock, TrendingUp, CheckCircle2, Brain, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            id: 'members',
            title: 'features.members_title',
            desc: 'features.members_desc',
            icon: Users,
            image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 'billing',
            title: 'features.billing_title',
            desc: 'features.billing_desc',
            icon: CreditCard,
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 'access',
            title: 'features.access_title',
            desc: 'features.access_desc',
            icon: Lock,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 'marketing',
            title: 'features.marketing_title',
            desc: 'features.marketing_desc',
            icon: TrendingUp,
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 'nutrition',
            title: 'features.nutrition_title',
            desc: 'features.nutrition_desc',
            icon: Brain,
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 'squads',
            title: 'features.squads_title',
            desc: 'features.squads_desc',
            icon: Trophy,
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden" id="features">
            <div className="container-padding">
                <div className="text-center mb-24 lg:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        {t('features.title')}
                    </motion.h2>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1"
                            >
                                <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 mb-8">
                                    <feature.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    {t(feature.title)}
                                </h3>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {t(feature.desc)}
                                </p>
                                <ul className="space-y-4">
                                    {[1, 2, 3].map((num) => (
                                        <li key={num} className="flex items-start gap-3 text-slate-700">
                                            <div className="mt-1">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            </div>
                                            <span className="leading-snug">{t(`features.${feature.id}_benefit_${num}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 w-full"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-white ring-1 ring-slate-900/5 group">
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10" />
                                    <img
                                        src={feature.image}
                                        alt={t(feature.title)}
                                        className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
