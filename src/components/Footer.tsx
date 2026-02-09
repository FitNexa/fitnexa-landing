import { Dumbbell, Globe, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <footer className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="space-y-8">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center">
                        <Dumbbell className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-slate-900 uppercase tracking-tighter">FitNexa <span className="text-blue-600">Elite</span></span>
                </div>
                <p className="text-sm font-bold text-slate-400 max-w-xs leading-loose uppercase tracking-widest text-[10px]">
                    The Iron-Clad Standard in Digital Infrastructure for the Global Fitness Enterprise.
                </p>
                <div className="flex space-x-6 text-slate-300">
                    <Globe className="w-6 h-6 hover:text-blue-600 transition-colors cursor-pointer" />
                    <Activity className="w-6 h-6 hover:text-blue-600 transition-colors cursor-pointer" />
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-24">
                <div className="space-y-6">
                    <p className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em]">The Platform</p>
                    <ul className="text-sm font-bold text-slate-400 space-y-3">
                        <li><Link to="/" className="hover:text-blue-600 transition-all">The Floor</Link></li>
                        <li><Link to="/" className="hover:text-blue-600 transition-all">Wall of Fame</Link></li>
                        <li><Link to="/blog" className="hover:text-blue-600 transition-all">The Playbook</Link></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">Corporate</p>
                    <ul className="text-sm font-bold text-slate-400 space-y-3">
                        <li><Link to="/about" className="hover:text-blue-600 transition-all">Founders</Link></li>
                        <li><Link to="/blog" className="hover:text-blue-600 transition-all">The Playbook</Link></li>
                        <li><Link to="/careers" className="hover:text-blue-600 transition-all">Join the Crew</Link></li>
                    </ul>
                </div>
                <div className="space-y-6 hidden lg:block">
                    <p className="text-[10px] font-black text-slate-950 uppercase tracking-[0.3em]">Legal & Terms</p>
                    <ul className="text-sm font-bold text-slate-400 space-y-3">
                        <li><Link to="/privacy" className="hover:text-blue-600 transition-all">Privacy Vault</Link></li>
                        <li><Link to="/terms" className="hover:text-blue-600 transition-all">The Contract</Link></li>
                        <li><Link to="/security" className="hover:text-blue-600 transition-all">Audit Logs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-slate-50 text-center md:text-left">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">© 2026 FitNexa Systems Inc. High Performance Guaranteed.</p>
        </div>
    </footer>
);
