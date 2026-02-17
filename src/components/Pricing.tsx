
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing = () => {
    const { t } = useTranslation();

    const plans = [
        {
            key: 'starter',
            price: 'pricing.starter_price',
            period: 'pricing.starter_period',
            subtitle: 'pricing.starter_desc',
            features: [
                'feature_members', // 100 Members
                'access_control',  // Basic Access
                'billing',         // Manual Billing
                'support'          // Email Support
            ],
            highlight: false
        },
        {
            key: 'pro',
            price: 'pricing.pro_price',
            period: 'pricing.pro_period',
            subtitle: 'pricing.pro_desc',
            features: [
                'feature_members_unlimited',
                'access_control_pro',
                'billing_auto',
                'marketing_tools',
                'branded_app'
            ],
            highlight: true
        },
        {
            key: 'enterprise',
            price: 'pricing.enterprise_price',
            period: 'pricing.enterprise_period',
            subtitle: 'pricing.enterprise_desc',
            features: [
                'multi_location',
                'api_access',
                'dedicated_manager',
                'white_label',
                'custom_dev'
            ],
            highlight: false
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-xl text-slate-400">
                        {t('pricing.subtitle')}
                    </p>
                    <div className="mt-8 inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">
                            {t('pricing.no_contract')}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative p-8 rounded-3xl border ${plan.highlight
                                ? 'bg-slate-800 border-blue-500 shadow-2xl shadow-blue-500/20'
                                : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                                } flex flex-col`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-bold rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-2">{t(`pricing.${plan.key}_title`)}</h3>
                            <p className="text-slate-400 text-sm mb-6 h-10">{t(plan.subtitle)}</p>

                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold text-white tracking-tight">
                                    {t(plan.price)}
                                </span>
                                <span className="text-slate-500 ml-2">{t(plan.period)}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <Check className={`w-5 h-5 mr-3 ${plan.highlight ? 'text-blue-400' : 'text-slate-500'}`} />
                                        <span className="text-sm">Feature {feature} placeholder</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-slate-700 hover:bg-slate-600 text-white'
                                }`}>
                                Choose {t(`pricing.${plan.key}_title`)}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
