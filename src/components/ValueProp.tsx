
import { useTranslation } from 'react-i18next';
import { UserX, AlertCircle, Clock, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export const ValueProp = () => {
    const { t } = useTranslation();

    const props = [
        {
            icon: UserX,
            title: 'value_prop.ghost_title',
            desc: 'value_prop.ghost_desc',
            color: 'text-rose-400',
            bg: 'bg-rose-400/10'
        },
        {
            icon: AlertCircle,
            title: 'value_prop.payments_title',
            desc: 'value_prop.payments_desc',
            color: 'text-amber-400',
            bg: 'bg-amber-400/10'
        },
        {
            icon: Clock,
            title: 'value_prop.staff_title',
            desc: 'value_prop.staff_desc',
            color: 'text-orange-400',
            bg: 'bg-orange-400/10'
        },
        {
            icon: Palette,
            title: 'value_prop.brand_title',
            desc: 'value_prop.brand_desc',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.map((prop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                        >
                            <div className={`w-14 h-14 rounded-xl ${prop.bg} flex items-center justify-center mb-6`}>
                                <prop.icon className={`w-7 h-7 ${prop.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {t(prop.title)}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t(prop.desc)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
