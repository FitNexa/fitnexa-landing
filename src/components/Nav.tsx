import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

    const scrollToSection = (id: string) => {
        if (isHome) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                        <Dumbbell className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">FitNexa <span className="text-blue-600 font-black">Elite</span></span>
                </Link>

                <div className="hidden md:flex items-center space-x-10">
                    <Link to="/" onClick={() => scrollToSection('benefits')} className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.2em]">The Floor</Link>
                    <Link to="/wall-of-fame" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.2em]">Wall of Fame</Link>
                    <Link to="/playbook" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.2em]">The Playbook</Link>
                    <a href="http://localhost:3009" className="bg-slate-950 text-white px-8 py-2.5 rounded font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-800 transition-all border border-slate-800">
                        Build Your Empire
                    </a>
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white border-b border-slate-200 p-6 space-y-4 shadow-xl"
                >
                    <Link to="/" onClick={() => { setIsOpen(false); scrollToSection('benefits'); }} className="block text-sm font-bold text-slate-900 uppercase tracking-widest">The Floor</Link>
                    <Link to="/wall-of-fame" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-slate-900 uppercase tracking-widest">Wall of Fame</Link>
                    <button className="w-full bg-slate-900 text-white py-4 rounded font-black uppercase text-[10px] tracking-widest">Contact Sales</button>
                </motion.div>
            )}
        </nav>
    );
};
