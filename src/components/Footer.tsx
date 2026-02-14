import { Dumbbell, Globe, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
    <footer className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="space-y-8">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center">
                        <Dumbbell className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-slate-900 uppercase tracking-tighter">{t('nav.brand')} <span className="text-blue-600">{t('nav.brand_elite')}</span></span>
                </div>
                <p className="text-sm font-bold text-slate-400 max-w-xs leading-loose uppercase tracking-widest text-[10px]">
                    {t('footer.tagline')}
                </p>
                <div className="flex space-x-6 text-slate-300">
                    <Globe className="w-6 h-6 hover:text-blue-600 transition-colors cursor-pointer" />
                    <Activity className="w-6 h-6 hover:text-blue-600 transition-colors cursor-pointer" />
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-24">
                <div className="space-y-6">
                    <p className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em]">{t('footer.platform')}</p>
                    <ul className="text-sm font-bold text-slate-400 space-y-3">
                        <li><Link to="/" className="hover:text-blue-600 transition-all">{t('footer.the_floor')}</Link></li>
                        <li><Link to="/" className="hover:text-blue-600 transition-all">{t('footer.wall_of_fame')}</Link></li>
                        <li><Link to="/blog" className="hover:text-blue-600 transition-all">{t('footer.playbook')}</Link></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">{t('footer.corporate')}</p>
                    <ul className="text-sm font-bold text-slate-400 space-y-3">
                        <li><Link to="/about" className="hover:text-blue-600 transition-all">{t('footer.founders')}</Link></li>
                        <li><Link to="/blog" className="hover:text-blue-600 transition-all">{t('footer.playbook')}</Link></li>
                        <li><Link to="/careers" className="hover:text-blue-600 transition-all">{t('footer.join_crew')}</Link></li>
                    </ul>
                </div>
                <div className="space-y-6 hidden lg:block">
                    <p className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em]">{t('footer.legal')}</p>
                    <ul className="text-sm font-bold text-slate-400 space-y-3">
                        <li><Link to="/privacy" className="hover:text-blue-600 transition-all">{t('footer.privacy')}</Link></li>
                        <li><Link to="/terms" className="hover:text-blue-600 transition-all">{t('footer.contract')}</Link></li>
                        <li><Link to="/security" className="hover:text-blue-600 transition-all">{t('footer.audit_logs')}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-slate-50 text-center md:text-left">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
    </footer>
    );
};
