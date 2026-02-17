import { Dumbbell, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1120] text-slate-400 py-16 lg:py-20 border-t border-slate-800/50">
            <div className="container-padding">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                    <div className="space-y-6 max-w-sm">
                        <Link to="/" className="flex items-center gap-3 text-white group">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
                                <Dumbbell className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">{t('nav.brand')}</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                            The all-in-one operating system for modern gyms. Automate operations, increase revenue, and deliver a world-class member experience.
                        </p>
                        <div className="flex space-x-3">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                        <div>
                            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">{t('footer.platform')}</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/" className="hover:text-blue-500 transition-colors">{t('nav.features')}</Link></li>
                                <li><Link to="/" className="hover:text-blue-500 transition-colors">{t('nav.pricing')}</Link></li>
                                <li><a href={import.meta.env.VITE_ONBOARDING_URL || 'https://onboarding.uat.gymia.fit'} className="hover:text-blue-500 transition-colors">{t('nav.login')}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">{t('footer.corporate')}</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/playbook" className="hover:text-blue-500 transition-colors">{t('nav.playbook')}</Link></li>
                                <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">{t('footer.legal')}</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/privacy" className="hover:text-blue-500 transition-colors">{t('footer.privacy')}</Link></li>
                                <li><Link to="/terms" className="hover:text-blue-500 transition-colors">{t('footer.terms')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>{t('footer.copyright', { year: currentYear })}</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span>All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
