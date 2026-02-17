import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Nav = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();



    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const el = document.getElementById(id);
            if (el) {
                const navHeight = 80; // Approximate nav height
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const scrollToId = location.state.scrollTo;
            // distinct timeout to allow page load/render
            setTimeout(() => {
                const el = document.getElementById(scrollToId);
                if (el) {
                    const navHeight = 80;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                // Clear state
                navigate(location.pathname, { state: {}, replace: true });
            }, 100);
        }
    }, [location, navigate]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
        { code: 'fr', label: 'Français' },
        { code: 'it', label: 'Italiano' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="container-padding h-18 lg:h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                        <Dumbbell className="text-white w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                        {t('nav.brand')}
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        {t('nav.features')}
                    </button>
                    <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        {t('nav.pricing')}
                    </button>
                    <Link to="/playbook" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        {t('nav.playbook') || 'Blog'}
                    </Link>

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100/50 transition-colors"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span className="uppercase text-xs font-semibold">{i18n.language ? i18n.language.split('-')[0] : 'en'}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 py-1.5 overflow-hidden"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${i18n.language === lang.code ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-600'}`}
                                        >
                                            {lang.label}
                                            {i18n.language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="h-5 w-px bg-slate-200" />

                    <a href={import.meta.env.VITE_ONBOARDING_URL || 'https://onboarding.uat.gymia.fit'} className="btn-primary py-2 px-5 text-sm">
                        {t('nav.get_started')}
                    </a>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setLangOpen(!langOpen)}
                        className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
                    >
                        <span className="uppercase">{i18n.language ? i18n.language.split('-')[0] : 'en'}</span>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
                    >
                        <div className="container-padding py-6 space-y-4">
                            <button onClick={() => { setIsOpen(false); scrollToSection('features'); }} className="block w-full text-left text-lg font-medium text-slate-900 py-2 border-b border-slate-100">
                                {t('nav.features')}
                            </button>
                            <button onClick={() => { setIsOpen(false); scrollToSection('pricing'); }} className="block w-full text-left text-lg font-medium text-slate-900 py-2 border-b border-slate-100">
                                {t('nav.pricing')}
                            </button>
                            <Link to="/playbook" onClick={() => setIsOpen(false)} className="block w-full text-left text-lg font-medium text-slate-900 py-2 border-b border-slate-100">
                                {t('nav.playbook') || 'Blog'}
                            </Link>

                            {/* Mobile Language Details */}
                            <div className="py-4">
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Language</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`text-sm py-2 px-3 rounded-lg border ${i18n.language === lang.code ? 'bg-blue-50 border-blue-100 text-blue-600 font-bold' : 'bg-white border-slate-100 text-slate-600'}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <a href={import.meta.env.VITE_ONBOARDING_URL || 'https://onboarding.uat.gymia.fit'} className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg">
                                {t('nav.get_started')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
